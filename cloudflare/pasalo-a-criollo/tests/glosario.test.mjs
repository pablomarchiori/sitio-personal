import test from "node:test";
import assert from "node:assert/strict";
import { GLOSARIO, seleccionarLunfardo } from "../src/glosario.js";

const terminos = (texto) => seleccionarLunfardo(texto).map(x => x.termino);

test("el glosario tiene referencias identificables y definiciones propias", () => {
  assert.ok(GLOSARIO.length >= 25);
  assert.equal(new Set(GLOSARIO.map(x => x.termino)).size, GLOSARIO.length);
  for (const e of GLOSARIO) {
    assert.ok(e.significado.length > 3);
    assert.ok(e.url.startsWith("https://www.todotango.com/comunidad/lunfardo/termino.aspx?p="));
  }
});
test("elige términos relacionados con dinero, fiaca y trabajo", () => {
  const elegidos = terminos("No tengo dinero y hoy no tengo ganas de trabajar.");
  assert.ok(elegidos.includes("guita"));
  assert.ok(elegidos.includes("fiaca"));
  assert.ok(elegidos.includes("laburar"));
});
test("reconoce formas diacríticas y palabras completas", () => {
  assert.ok(terminos("Quiero tomar un CAFÉ en la calle.").includes("feca"));
  assert.ok(terminos("La guita está en casa.").includes("guita"));
  assert.equal(terminos("La cafetería no abrió").includes("feca"), true);
  assert.equal(terminos("Mi cafetera está rota").includes("feca"), false);
});
test("no confunde el botón de la interfaz con el lunfardismo", () => {
  assert.ok(!terminos("Voy a presionar el botón de traducir").includes("botón"));
});
test("no interpreta mango como dinero ante una fruta", () => {
  assert.ok(!terminos("Prefiero el jugo de mango maduro").includes("mango"));
});
test("no añade palabras al azar ante texto no relacionado", () => {
  assert.deepEqual(seleccionarLunfardo("El satélite gira alrededor de un planeta."), []);
});
test("mantiene un contexto acotado", () => {
  const r = seleccionarLunfardo("Quiero pagar mi deuda en la calle y comprar café, comida y un traje.");
  assert.ok(r.length <= 6);
});
