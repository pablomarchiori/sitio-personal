---
title: "CoyspuNET, ASP y un pedazo de web vieja"
date: 2026-06-01T21:00:00-03:00
draft: false
description: "Una prueba de recuperación estática de un sitio viejo hecho en ASP, entre recuerdos de dial-up, ADSL y páginas de otra época."
tags: ["labs", "web", "asp", "coyspunet", "internet"]
categories: ["Labs"]
---

## Viejos tiempos de dial-up y ADSL

Hay una parte de Internet que quedó bastante lejos, pero todavía me resulta reconocible. La época del dial-up, los módems haciendo ruido y el ancho de banda medido con otra escala. En CoyspuNET había 384k para todos los usuarios dial-up. No para una casa. Para todos.

Después llegó el ADSL, y en algún momento de eso me dio por hacer páginas web. Un pantallazo de eso se puede ver acá:

[Ver CoyspuNET recuperado](/coyspunet/)

## ASP clásico

Esto era la página de COYSPU en 2003. Para ese momento no desentonaba para nada. Aunque muchos usaban `.php`, yo seguía defendiendo el bastión de ASP: includes, bases Access, rutas pensadas para IIS y bastante mezcla con HTML y JavaScript.

Cuando hice esas páginas era Notepad puro, o algún editor tipo Notepad++. Era todo a pulmón: escribir a manopla y sin mucha asistencia, probar, corregir y volver a subir.

Ahora fue bastante distinto. Como dije, el sitio estaba en `.asp`, así que tenía que instalar IIS y no lo podía correr con Hugo ni publicarlo como página estática en GitHub. Entonces se lo pedí a ChatGPT y no toqué una línea de código. ChatGPT se las arregló solo.

## Qué se hizo

La idea era recuperar el sitio sin tener que volver a montar IIS ni ejecutar ASP clásico.

ChatGPT lo convirtió a una versión estática navegable a partir de un pedido bastante simple, escrito casi como salió:

> “Tengo un sitio web en ASP viejísimo. ¿Hay alguna forma de ejecutarlo sin instalar IIS? No quiero cargar eso, es un perno hacerlo. ¿Con Hugo se puede?”

Claro que Hugo no podía ejecutar ASP clásico. Eso estaba fuera de discusión. Entonces ChatGPT me sugirió otro camino: convertir el sitio a contenido estático. Me pidió el sitio completo en un ZIP y, cuando ya lo tenía, también las bases Access desde donde se armaban algunos contenidos dinámicos.

Los `.asp` se convirtieron a HTML, los includes simples se resolvieron, los links internos se acomodaron, las imágenes y recursos originales se conservaron, y lo que venía de las bases Access se recuperó donde se pudo.

También hubo que corregir cosas propias de la época: acentos rotos, codificación de caracteres, imágenes externas caídas, enlaces a servicios que ya no existen y rutas que dependían del entorno original.

## Aclaración

Esto es más un rescate que una restauración.

Este material queda publicado como una recuperación histórica y personal de una web vieja.

No representa el sitio actual de COYSPU, ni refleja servicios, información institucional, datos técnicos, teléfonos, enlaces, contenidos o condiciones vigentes de la cooperativa.

El pie original del sitio indica:

> © 2003. Coop. de Prov. de Agua, Obras y Servicios Públicos, Vivienda y Crédito Ltda. de Marcos Juárez

Por eso conviene leerlo como lo que es: un recorte de 2003, conservado como recuerdo de ese momento de Internet: dial-up, ADSL temprano, ASP clásico, Access y páginas hechas a mano.
