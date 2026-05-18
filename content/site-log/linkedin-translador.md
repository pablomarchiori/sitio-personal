---
title: "Traductor LinkedIn: pompa épica corporativa bajo demanda"
date: 2026-05-17T21:00:00-03:00
draft: false
description: "Un experimento simple en Labs: tomar una frase común y convertirla, con Gemini y Cloudflare Workers, en una publicación inflada con propósito, resiliencia y épica corporativa innecesaria."
tags: ["linkedin", "ia", "gemini", "cloudflare-workers", "hugo", "labs"]
categories: ["Site Log"]
---

![Traductor LinkedIn](/images/labs/traductor-linkedin-portada.png)

*Pompa épica corporativa, ahora con botón.*

La idea salió viendo a [Dot Dager](https://www.youtube.com/@DotDager) jugando con algo parecido: tomar una frase común y pasarla por el filtro LinkedIn, ese idioma que convierte cualquier insignificancia en épica profesional.

Este idioma no nos tomó por sorpresa: nos empujó por el ropero hacia Narnia, un lugar gobernado por propósito, resiliencia y mejora continua. Un Disney World corporativo donde todo parece tener impacto, visión estratégica y una cuota innecesaria de inspiración.

## La idea

La herramienta tenía que hacer una sola cosa: recibir una frase normal y devolverla convertida en pompa épica corporativa.

Algo del estilo:

> Me comí una manzana.

Y que la salida terminara convertida en una pequeña gesta profesional sobre ejecución, eficiencia operativa y procesamiento exitoso de recursos orgánicos.

No tiene utilidad real. Eso es parte del punto. Igual que la versión oficial.

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

```text
/labs/traductor-linkedin/
```

## La parte técnica

La página está hecha como un archivo Markdown dentro de Labs, con HTML, CSS y JavaScript embebido.

El sitio no llama directamente a Gemini, porque eso dejaría la API key expuesta en el navegador. La clave quedó guardada como secret dentro de un Cloudflare Worker.

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

Si se dejaba demasiado libre, Gemini se iba al LinkedIn insoportable completo: preguntas finales, frases motivacionales, épica desbordada y cierres tipo “¿Y vos cómo estás liderando el cambio?”.

Hubo que ajustar reglas:

- No inventar detalles técnicos.
- No usar hashtags.
- No hacer preguntas al lector.
- No usar “transformación digital”.
- Evitar primera persona solemne.
- Preferir una voz más seca y absurda.
- El cierre debe ser una afirmación seca.

El remate ideal apareció solo ante mis ojos viendo como "La impresora ahora imprime." tomaba el tono resiliente e inspirador que estaba buscando. Hermoso.

### El límite gratis

Gemini en modo gratuito no da margen infinito. En esta prueba quedó con un límite de 20 consultas por día.

Más que eso cuesta dinero, muchacho, y no pienso pagar por tu diversión. Así que debés ser inteligente y cuidar tus preguntas, muchacho.

Espero que al final salgan iluminados. Si no:

Gracias. Vuelva prontos (mañana).

Si el límite aparece, aparece. Es parte del experimento.

## El resultado

Para mí sirvió. No resuelve ningún problema importante y tampoco pretende hacerlo, pero me hizo probar APIs de Gemini, Cloudflare Workers y hacer que todo eso funcione con Hugo.

A veces un Lab no necesita salvar al mundo. Alcanza con agarrar una estupidez reconocible, volverla tocable y dejarla funcionando en una página.