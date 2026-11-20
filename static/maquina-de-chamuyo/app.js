(() => {
  "use strict";

  const form = document.getElementById("traductor");
  const input = document.getElementById("original");
  const counter = document.getElementById("contador");
  const submit = document.getElementById("enviar");
  const clear = document.getElementById("limpiar");
  const status = document.getElementById("estado");
  const result = document.getElementById("resultado");
  const placeholder = document.getElementById("placeholder");
  const copy = document.getElementById("copiar");
  const modeLabel = document.getElementById("indicador-modo");
  const dial = document.getElementById("selector-giratorio");
  const meter = document.querySelector(".meter");
  const cupo = document.getElementById("cupo");
  const machine = document.querySelector(".machine");
  const apiUrl = String(window.PASALO_CONFIG?.apiUrl || "").trim();
  const modes = ["cotidiano", "lunfardo", "neutro", "humor"];
  const modeSettings = {
    cotidiano: { angle: "-46deg", dial: "-40deg", name: "Modo tranqui" },
    lunfardo: { angle: "-4deg", dial: "-13deg", name: "Modo de antaño" },
    neutro: { angle: "-68deg", dial: "15deg", name: "Modo sin vueltas" },
    humor: { angle: "62deg", dial: "44deg", name: "Chamuyo a pleno" }
  };
  let busy = false;

  function selectedMode() {
    return form.querySelector('input[name="modo"]:checked')?.value || "cotidiano";
  }
  function syncMode() {
    const values = modeSettings[selectedMode()];
    meter.style.setProperty("--needle-angle", values.angle);
    dial.style.setProperty("--dial-angle", values.dial);
    modeLabel.textContent = values.name;
  }
  function setMode(mode) {
    const radio = form.querySelector(`input[name="modo"][value="${mode}"]`);
    if (radio) radio.checked = true;
    syncMode();
  }
  function updateCounter() {
    counter.textContent = `${input.value.length}/1000`;
  }
  function setStatus(text, isError = false) {
    status.textContent = text;
    machine.classList.toggle("has-error", isError);
  }
  function resetResult() {
    result.textContent = "";
    placeholder.hidden = false;
    copy.disabled = true;
  }
  function render(data) {
    result.textContent = data.resultado;
    placeholder.hidden = true;
    copy.disabled = false;
  }

  for (const radio of form.querySelectorAll('input[name="modo"]')) {
    radio.addEventListener("change", syncMode);
  }
  dial.addEventListener("click", () => {
    if (busy) return;
    const current = modes.indexOf(selectedMode());
    setMode(modes[(current + 1) % modes.length]);
  });
  input.addEventListener("input", updateCounter);
  clear.addEventListener("click", () => {
    if (busy) return;
    input.value = "";
    setMode("cotidiano");
    updateCounter();
    resetResult();
    setStatus("Esperando una frase.");
    input.focus();
  });
  document.querySelectorAll("button.example").forEach(button => {
    button.addEventListener("click", () => {
      if (busy) return;
      input.value = button.dataset.text || "";
      setMode(button.dataset.mode || "cotidiano");
      updateCounter();
      resetResult();
      setStatus("Frase cargada. Apretá TRADUCIR.");
      input.focus();
    });
  });
  copy.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(result.textContent);
      setStatus("Traducción copiada.");
    } catch {
      setStatus("No se pudo copiar automáticamente. Seleccioná el texto para copiarlo.", true);
    }
  });
  form.addEventListener("submit", async event => {
    event.preventDefault();
    if (busy) return;
    const texto = input.value.trim();
    if (!texto) { setStatus("Escribí una frase primero.", true); input.focus(); return; }
    if (texto.length > 1000) { setStatus("Máximo 1000 caracteres.", true); return; }
    if (!apiUrl) { setStatus("Falta configurar la URL del Worker en config.js.", true); return; }

    busy = true;
    submit.disabled = true;
    submit.classList.add("working");
    resetResult();
    setStatus("Procesando chamuyo…");
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 25000);
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ texto, modo: selectedMode(), region: "general" }),
        signal: controller.signal
      });
      let data;
      try { data = await response.json(); }
      catch { throw new Error("La máquina recibió una respuesta ilegible."); }
      if (!response.ok) throw new Error(data.error || `Error ${response.status}.`);
      if (typeof data.resultado !== "string" || !data.resultado.trim()) throw new Error("La máquina no encontró palabras.");
      render(data);
      if (typeof data.restantes === "number") cupo.textContent = `${data.restantes} RESTANTES`;
      setStatus("Traducción despachada.");
    } catch (error) {
      setStatus(error.name === "AbortError" ? "La máquina tardó demasiado. Probá de nuevo." : error.message || "No se pudo conectar.", true);
    } finally {
      clearTimeout(timeoutId);
      busy = false;
      submit.disabled = false;
      submit.classList.remove("working");
    }
  });
  syncMode();
  updateCounter();
})();
