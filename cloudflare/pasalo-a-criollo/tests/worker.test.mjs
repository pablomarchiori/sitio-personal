import test from "node:test";
import assert from "node:assert/strict";
import worker from "../src/index.js";

const origin = "https://www.marchiori.ar";
function envFixture({ limit = "20" } = {}) {
  let count = 0;
  const db = {
    prepare(query) {
      return {
        bind(...args) {
          return {
            async first() {
              const max = Number(args[1]);
              if (count >= max) return null;
              return { cantidad: ++count };
            },
            async run() { count = Math.max(0, count - 1); }
          };
        }
      };
    }
  };
  return { ALLOWED_ORIGINS: origin, DB: db, DAILY_LIMIT: limit, GEMINI_API_KEY: "fake-for-testing", GEMINI_MODEL: "gemini-3.5-flash-lite", get count() { return count; } };
}
function req(body, headers = {}) {
  return new Request("https://example.workers.dev/", { method: "POST", headers: { Origin: origin, "Content-Type": "application/json", ...headers }, body: JSON.stringify(body) });
}
const valid = { texto: "No tengo plata", modo: "neutro", region: "general" };

test("rechaza origen no permitido", async () => {
  const response = await worker.fetch(new Request("https://example.workers.dev/", { method: "POST", headers: { Origin: "https://sitio-ajeno.com", "Content-Type": "application/json" }, body: JSON.stringify(valid) }), envFixture());
  assert.equal(response.status, 403);
});
test("rechaza modos desconocidos antes de gastar cuota", async () => {
  const env = envFixture();
  const response = await worker.fetch(req({ ...valid, modo: "cualquiera" }), env);
  assert.equal(response.status, 400);
  assert.equal(env.count, 0);
});
test("preflight CORS solo para origen autorizado", async () => {
  const response = await worker.fetch(new Request("https://example.workers.dev/", { method: "OPTIONS", headers: { Origin: origin } }), envFixture());
  assert.equal(response.status, 204);
  assert.equal(response.headers.get("access-control-allow-origin"), origin);
});
test("traduce y respeta JSON de resultado", async () => {
  const env = envFixture();
  const oldFetch = globalThis.fetch;
  globalThis.fetch = async (_url, options) => {
    assert.equal(options.headers["x-goog-api-key"], "fake-for-testing");
    const sent = JSON.parse(options.body);
    assert.equal(sent.generationConfig.responseMimeType, "application/json");
    return new Response(JSON.stringify({ candidates: [{ content: { parts: [{ text: JSON.stringify({ resultado: "No tengo dinero", expresiones: [{ termino: "plata", significado: "Dinero" }], nota: "" }) }] } }] }), { status: 200 });
  };
  try {
    const response = await worker.fetch(req(valid), env);
    assert.equal(response.status, 200);
    const data = await response.json();
    assert.equal(data.resultado, "No tengo dinero");
    assert.equal(data.expresiones[0].termino, "plata");
    assert.equal(data.restantes, 19);
  } finally { globalThis.fetch = oldFetch; }
});
test("cupo global agotado", async () => {
  const env = envFixture({ limit: "1" });
  const oldFetch = globalThis.fetch;
  globalThis.fetch = async () => new Response(JSON.stringify({ candidates: [{ content: { parts: [{ text: JSON.stringify({ resultado: "Hola", expresiones: [], nota: "" }) }] } }] }), { status: 200 });
  try {
    assert.equal((await worker.fetch(req(valid), env)).status, 200);
    assert.equal((await worker.fetch(req(valid), env)).status, 429);
  } finally { globalThis.fetch = oldFetch; }
});
test("devuelve cuota cuando falla el proveedor", async () => {
  const env = envFixture();
  const oldFetch = globalThis.fetch;
  globalThis.fetch = async () => new Response("error", { status: 429 });
  try {
    const response = await worker.fetch(req(valid), env);
    assert.equal(response.status, 502);
    assert.equal(env.count, 0);
  } finally { globalThis.fetch = oldFetch; }
});

test("solo el modo lunfardo recibe glosario pertinente en las instrucciones", async () => {
  const env = envFixture();
  const oldFetch = globalThis.fetch;
  const prompts = [];
  globalThis.fetch = async (_url, opts) => {
    const body = JSON.parse(opts.body);
    prompts.push(body.systemInstruction.parts[0].text);
    return new Response(JSON.stringify({ candidates: [{ content: { parts: [{ text: JSON.stringify({ resultado: "Resultado simulado", expresiones: [], nota: "" }) }] } }] }), { status: 200 });
  };
  try {
    const texto = "No tengo dinero y no tengo ganas de trabajar.";
    const classic = await worker.fetch(req({ texto, modo: "lunfardo", region: "general" }), env);
    const normal = await worker.fetch(req({ texto, modo: "cotidiano", region: "general" }), env);
    assert.equal(classic.status, 200);
    assert.equal(normal.status, 200);
    assert.match(prompts[0], /guita: Dinero/);
    assert.match(prompts[0], /laburar: Trabajar/);
    assert.match(prompts[0], /fiaca: Pereza/);
    assert.match(prompts[0], /No copies definiciones/);
    assert.ok(!prompts[1].includes("guita: Dinero"));
  } finally { globalThis.fetch = oldFetch; }
});

test("modo lunfardo sin coincidencias avisa que no debe inventar términos", async () => {
  const env = envFixture();
  const oldFetch = globalThis.fetch;
  let prompt = "";
  globalThis.fetch = async (_url, opts) => {
    prompt = JSON.parse(opts.body).systemInstruction.parts[0].text;
    return new Response(JSON.stringify({ candidates: [{ content: { parts: [{ text: JSON.stringify({ resultado: "Resultado simulado", expresiones: [], nota: "" }) }] } }] }), { status: 200 });
  };
  try {
    const response = await worker.fetch(req({ texto: "El satélite gira alrededor del planeta.", modo: "lunfardo", region: "general" }), env);
    assert.equal(response.status, 200);
    assert.match(prompt, /no encontró equivalencias seguras/i);
  } finally { globalThis.fetch = oldFetch; }
});
