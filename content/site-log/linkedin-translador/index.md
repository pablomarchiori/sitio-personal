---
title: "Traductor LinkedIn: pompa épica corporativa bajo demanda"
date: 2026-05-18T14:00:00-03:00
draft: false
description: "Un experimento simple en Labs: tomar una frase común y convertirla, con Gemini y Cloudflare Workers, en una publicación inflada con propósito, resiliencia y épica corporativa innecesaria."
tags: ["linkedin", "ia", "gemini", "cloudflare-workers", "hugo", "labs"]
categories: ["Site Log"]
featureAlt: "Traductor LinkedIn"
coverCaption: "*Pompa épica corporativa, ahora con botón.*"
---

*Texto original: 18/05/2026. Actualización: 23/11/2026 (revisión editorial y estructura).*

La idea salió viendo a [Dot Dager](https://www.youtube.com/@DotDager) jugando con algo parecido: tomar una frase común y pasarla por el filtro LinkedIn, ese idioma que convierte cualquier insignificancia en épica profesional.

Ese idioma nos empuja por el ropero hacia Narnia, un lugar gobernado por propósito, resiliencia y mejora continua; una especie de Disney World corporativo donde hasta la tarea más insignificante necesita impacto y visión estratégica.

## La idea

Quería que la herramienta recibiera una frase corriente y la devolviera pasada por ese filtro de pompa épica corporativa.

Algo del estilo:

> Me comí una manzana.

Y que la salida terminara convertida en una pequeña gesta profesional sobre ejecución, eficiencia operativa y procesamiento exitoso de recursos orgánicos.

La utilidad real era discutible, pero justamente ahí estaba el chiste. Igual que en la versión oficial.

## El enfoque

La interfaz tenía que ser simple:

- un cuadro de texto;
- un botón;
- una respuesta exagerada;
- ningún login;
- ningún panel raro;
- nada de tocar medio sitio.

Si podía quedar como un Lab más dentro de Hugo, mejor.

La página quedó en:

[Traductor a lenguaje LinkedIn](/labs/traductor-linkedin/)

## La parte técnica

La interfaz quedó en una página de Labs dentro del sitio Hugo, con HTML, CSS y JavaScript. Para no exponer la clave de Gemini en el navegador, el JavaScript llama a un **Cloudflare Worker**, que tiene la API key guardada como secreto.

El flujo quedó así:

Hugo
↓
JavaScript de la página
↓
Cloudflare Worker
↓
Gemini API
↓
Respuesta en la página

El Worker recibe el texto, arma el prompt, llama a Gemini y devuelve el resultado. Hugo solo muestra la interfaz.

### El prompt

La parte delicada fue controlar el tono.

Si se dejaba demasiado libre, Gemini se iba al LinkedIn insoportable completo: preguntas finales, frases motivacionales, épica desbordada y cierres tipo "¿Y vos cómo estás liderando el cambio?".

Hubo que ajustar reglas:

- No inventar detalles técnicos.
- No usar hashtags.
- No hacer preguntas al lector.
- No usar "transformación digital".
- Evitar primera persona solemne.
- Preferir una voz más seca y absurda.
- El cierre debe ser una afirmación seca.

El resultado que buscaba apareció cuando "La impresora ahora imprime" se convirtió, ante mis ojos, en una hazaña resiliente e inspiradora. Hermoso.

### El límite gratis

En la configuración de esta prueba, el modo gratuito de Gemini tenía un límite de **20 consultas por día**.

Más que eso cuesta dinero, muchacho, y no pienso pagar por tu diversión. Así que debés ser inteligente y cuidar tus preguntas, muchacho.


## El resultado

La herramienta terminó sirviendo para probar la API de Gemini y los Cloudflare Workers dentro del sitio, además de transformar frases como "La impresora ahora imprime" en manifiestos de superación personal. Bastante para una nerdeada de Labs.
