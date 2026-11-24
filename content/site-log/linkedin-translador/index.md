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

Me dieron ganas de hacer una versión propia. La herramienta tenía que recibir una frase corriente, por ejemplo:

> Me comí una manzana.

La respuesta debía convertirla en una pequeña gesta profesional sobre ejecución, eficiencia operativa y procesamiento exitoso de recursos orgánicos. La utilidad real era discutible, pero justamente ahí estaba el chiste. Igual que en la versión oficial.

Para la interfaz alcanzaba con un cuadro de texto, un botón y una respuesta exagerada. Nada de logins, paneles raros ni tocar medio sitio. La dejé como un Lab más dentro de Hugo: [Traductor a lenguaje LinkedIn](/labs/traductor-linkedin/).

## Cómo lo armé

La interfaz quedó hecha con HTML, CSS y JavaScript. Para no exponer la clave de Gemini en el navegador, el JavaScript llama a un **Cloudflare Worker**, que tiene la API key guardada como secreto. El recorrido es sencillo:

`Página Hugo → JavaScript → Cloudflare Worker → Gemini API → respuesta en la página`

El Worker recibe el texto, arma el prompt, consulta a Gemini y devuelve el resultado. Hugo solo muestra la interfaz.

La parte delicada fue controlar el tono. Si se lo dejaba demasiado libre, Gemini se iba al LinkedIn insoportable completo: preguntas finales, frases motivacionales, épica desbordada y cierres tipo "¿Y vos cómo estás liderando el cambio?".

Tuve que ajustar las reglas para que no inventara detalles técnicos ni usara hashtags, preguntas al lector o la expresión "transformación digital". También debía evitar la primera persona solemne, preferir una voz más seca y absurda y terminar con una afirmación tajante.

El resultado que buscaba apareció cuando "La impresora ahora imprime" se convirtió, ante mis ojos, en una hazaña resiliente e inspiradora. Hermoso. De paso, el experimento sirvió para probar la API de Gemini y los Cloudflare Workers dentro del sitio.

En la configuración de esta prueba, el modo gratuito de Gemini tenía un límite de **20 consultas por día**. Más que eso cuesta dinero, muchacho, y no pienso pagar por tu diversión. Así que debés ser inteligente y cuidar tus preguntas, muchacho.
