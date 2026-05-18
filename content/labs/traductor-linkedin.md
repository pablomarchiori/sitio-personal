---
title: "Traductor a lenguaje LinkedIn"
date: 2026-05-17T19:30:00-03:00
draft: false
description: "Un traductor inútil pero necesario: convierte frases normales en publicaciones corporativas infladas."
tags: ["linkedin", "satira", "ia", "labs"]
categories: ["Labs"]
---

En estos tiempos de oquedad 🎶  
de oscuridad iluminada 🎶  
de distracción a perpetuidad 🎶  
de imbecilidad tan programada 🎶  
hay que sabeeer el lenguaajeee corpooorativooo 🎶

Esto es simple: pegás una frase normal, chabacana, sin brillos, y la convertís en una publicación con propósito, resiliencia, sinergia, con toda la pompa épica que necesitás para pertenecer al mundo corporativo que LinkedIn custodia para todos nosotros, los plebeyos.

<div class="linkedin-translator">
  <label for="texto-original"><strong>Texto normal feo y sin brillo</strong></label>
  <textarea id="texto-original" rows="5" placeholder="Ejemplo: Arreglé una impresora que no imprimía."></textarea>

  <button id="btn-traducir" type="button">Traducir a LinkedIn</button>

  <label for="texto-linkedin"><strong>Versión LinkedIn, potenciada para maximizar impacto, propósito y ponerte a sinergiar por ahí.</strong></label>
  <textarea id="texto-linkedin" rows="10" readonly placeholder="Acá va a aparecer mi preciosssooo."></textarea>

  <p id="estado-traductor"></p>
</div>

<style>
.linkedin-translator {
  margin-top: 1.5rem;
  max-width: 760px;
}

.linkedin-translator label {
  display: block;
  margin: 1rem 0 0.4rem;
}

.linkedin-translator textarea {
  width: 100%;
  box-sizing: border-box;
  padding: 0.8rem;
  font: inherit;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: vertical;
}

.linkedin-translator button {
  margin: 1rem 0;
  padding: 0.7rem 1rem;
  font: inherit;
  cursor: pointer;
  border: 1px solid #222;
  border-radius: 8px;
  background: #222;
  color: #fff;
}

.linkedin-translator button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

#estado-traductor {
  min-height: 1.5rem;
  font-size: 0.95rem;
}
</style>

<script>
const endpoint = "https://traductor-linkedin.mnerd.workers.dev";

const btn = document.getElementById("btn-traducir");
const input = document.getElementById("texto-original");
const output = document.getElementById("texto-linkedin");
const estado = document.getElementById("estado-traductor");

btn.addEventListener("click", async () => {
  const texto = input.value.trim();

  if (!texto) {
    estado.textContent = "Pegá un texto primero.";
    return;
  }

  if (texto.length > 800) {
    estado.textContent = "El texto es demasiado largo. Máximo 800 caracteres.";
    return;
  }

  btn.disabled = true;
  estado.textContent = "Traduciendo a pompa épica corporativa...";
  output.value = "";

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ texto })
    });

    const data = await response.json();

    if (!response.ok) {
      estado.textContent = data.error || "Error consultando el traductor.";
      return;
    }

    output.value = data.resultado || "";
    estado.textContent = "Listo.";
  } catch (error) {
    estado.textContent = "No se pudo conectar con el traductor.";
  } finally {
    btn.disabled = false;
  }
});
</script>

>
> El Worker de Gemini ha dicho: “Podéis hacerme 20 preguntas al día.”
> Así que debés ser inteligente y cuidar tus preguntas, muchacho. Esto cuesta dinero, muchacho, y no pienso pagar por tu diversión.
> Esto es el Barrio Chino y todo el maldito sistema está fuera de lugar.
> Espero que hayan sido iluminados. Si no, “Gracias. Vuelva prontos.”
>