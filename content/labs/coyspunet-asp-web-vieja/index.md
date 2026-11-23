---
title: "CoyspuNET, ASP y un pedazo de web vieja"
date: 2026-06-01T21:00:00-03:00
draft: false
description: "Una prueba de recuperación estática de un sitio viejo hecho en ASP, entre recuerdos de dial-up, ADSL y páginas de otra época."
tags: ["labs", "web", "asp", "coyspunet", "internet"]
categories: ["Labs"]
---

*Texto original: 01/06/2026. Actualización: 23/11/2026 (revisión editorial y estructura).*

## Viejos tiempos de dial-up y ADSL

Todavía me acuerdo de la época del dial-up, con los módems haciendo ruido y el ancho de banda medido en otra escala. En CoyspuNET había apenas 384k para repartir entre todos los usuarios dial-up, algo difícil de imaginar hoy, cuando una conexión doméstica puede tener cientos de megas.

Después llegó el ADSL y por esos años también me dio por hacer páginas web. Una de ellas fue la de COYSPU, que armé en 2003 y que ahora se puede recorrer de nuevo:

[Ver CoyspuNET recuperado](/coyspunet/)

## ASP clásico

Para 2003, aquella web estaba bastante en línea con lo que se hacía. Aunque muchos usaban `.php`, yo seguía defendiendo el bastión de ASP, con *includes*, bases Access, rutas pensadas para IIS y una buena mezcla de HTML y JavaScript. Escribía todo a mano, con Notepad o algún editor tipo Notepad++, y el trabajo consistía en probar, corregir y volver a subir los archivos.

Cuando quise recuperarla apareció una complicación: los archivos seguían en `.asp`, que Hugo no puede ejecutar y que requerían volver a montar un servidor con IIS. Como no tenía ganas de instalar todo eso, le planteé el problema a ChatGPT casi con las mismas palabras con las que me había surgido:

> "Tengo un sitio web en ASP viejísimo. ¿Hay alguna forma de ejecutarlo sin instalar IIS? No quiero cargar eso, es un perno hacerlo. ¿Con Hugo se puede?"

ChatGPT propuso convertir el sitio a contenido estático y me pidió primero un ZIP con los archivos y después las bases Access que alimentaban algunas secciones. No toqué una línea de código durante la conversión: le pasé el material y fue trabajando sobre él.

## Qué se recuperó

Los archivos `.asp` se convirtieron a HTML, se resolvieron los *includes* simples, se acomodaron los enlaces internos y se conservaron las imágenes y los recursos originales. También se recuperó, en la medida de lo posible, el contenido que antes se generaba desde las bases Access.

Hubo que corregir problemas propios de la época, como acentos mal codificados, imágenes externas que ya no estaban disponibles, enlaces a servicios desaparecidos y rutas que dependían de la instalación original. El resultado es una versión estática navegable que permite volver a ver el sitio sin tener que ejecutar ASP clásico.

## Una aclaración sobre el sitio recuperado

Se trata de una recuperación histórica y personal de la página de **COYSPU de 2003**. No representa el sitio actual de la cooperativa ni contiene información vigente sobre sus servicios, datos técnicos, teléfonos o condiciones institucionales.

El pie de página original decía:

> © 2003. Coop. de Prov. de Agua, Obras y Servicios Públicos, Vivienda y Crédito Ltda. de Marcos Juárez

Quedó como un recuerdo de aquella etapa de internet, entre el dial-up, el ADSL temprano, ASP clásico, Access y las páginas hechas a mano.
