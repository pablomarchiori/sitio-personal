---
title: "Ordenando mi biblioteca digital con Codex"
date: 2026-07-23T19:00:00-03:00
draft: false
description: "Le di a Codex acceso a una biblioteca de casi 59.000 archivos para ordenar carpetas, modernizar formatos y convertir parte del contenido."
tags: ["Codex", "inteligencia artificial", "automatización", "biblioteca digital"]
categories: ["Notas"]
---

![Una biblioteca digital caótica que atraviesa un portal y aparece ordenada](/images/notas/ordenando-mi-biblioteca-digital-con-codex-portada.png)

Antes del streaming y de las suscripciones para todo, los “internautas” descargábamos cuanta cosa encontrábamos por ahí, convencidos de que algún día nos iba a servir.

En mi caso, el paso de los años demostró que la mayoría terminó sirviendo poco 😅, pero dejó una acumulación digital de libros, historietas, manuales, documentos y material multimedia que todavía conservo. Todo quedó reunido en una carpeta de OneDrive que se alimentó de distintas fuentes, formatos y épocas de mi vida.

Aunque la colección nunca fue un caos absoluto, con el tiempo aparecieron nombres escritos de varias maneras, carpetas innecesarias, formatos antiguos y archivos que ya no se abrían bien con programas actuales. Siempre tuve en mente revisarla, pero hacerlo a mano no me parecía una posibilidad muy realista: son 58.667 archivos distribuidos en 2.558 carpetas.

Con la nueva aplicación de escritorio de ChatGPT podía darle a Codex acceso a una carpeta local, así que abrí `Documentos\Libros` y le pedí que revisara qué había ahí.

## Mirar antes de tocar

Después de darle acceso, Codex recorrió las carpetas, revisó extensiones, nombres y contenidos, y preparó un inventario. Yo le marcaba qué quería conseguir y definía los criterios generales. Él inspeccionaba los archivos, proponía cambios, escribía los scripts y ejecutaba las tareas.

Cuando encontraba algo dudoso o necesitaba permisos, se detenía y preguntaba.

Antes de mover o convertir nada (léase: antes de cagarla), le pedí que trabajara en modo simulación. El primer registro mostraba qué carpetas pensaba eliminar, qué nombres iba a cambiar y cuáles eran los archivos candidatos a conversión. Además, todo quedó documentado en archivos CSV.

Recién después de revisar eso autorizaba los cambios reales.

## Poner orden

Codex empezó unificando títulos, numeraciones y nombres de volúmenes. También eliminó carpetas vacías y corrigió estructuras innecesariamente profundas.

En algunos cómics, por ejemplo, la carpeta principal contenía otra carpeta y recién dentro de ella estaban las imágenes de las páginas. Codex detectaba esos casos y subía las imágenes al nivel correcto cuando no había otros archivos que justificaran esa separación.

La tarea es sencilla cuando aparece una vez. Repetida en cientos de carpetas se vuelve el tipo de trabajo que uno deja pendiente durante años.

Ya había intentado resolver algunas de estas cosas con herramientas más tradicionales, pero siempre terminaba armando una regla rígida para un caso puntual. Acá las reglas podían ajustarse a medida que aparecían excepciones.

## Modernizar formatos antiguos

Después aparecieron documentos DOC y presentaciones PPT. Codex me pidió autorización para usar las aplicaciones instaladas en la computadora y automatizó la conversión a DOCX y PPTX.

Abría cada archivo con Office, generaba la versión nueva y comprobaba que el texto, las fuentes, el paginado y los demás elementos se hubieran conservado correctamente. Los originales iban a una carpeta de respaldo antes de ser reemplazados.

También convirtió imágenes BMP a PNG conservando sus dimensiones, recuperó archivos MHT y revisó varios contenidos Flash.

Con uno de los archivos Flash empezó a buscar una forma de recuperarlo. Al inspeccionar el resto de la carpeta encontró una versión HTML interactiva del mismo material, así que decidí abandonar la conversión y conservar la alternativa que ya funcionaba.

## Atacando los videos y una pausa

Codex encontró también varios videos AVI. Inspeccionó su duración y resolución, descargó FFmpeg, preparó la conversión y generó las versiones MP4. Que hubiera descargado por su cuenta la herramienta que necesitaba fue lo que realmente me sorprendió.

Después comparó los datos de entrada y salida para comprobar que cada archivo conservara la duración y las dimensiones del original.

Mi parte fue autorizar el proceso y abrir algunos resultados para revisar imagen y sonido. Con la excusa de comprobar uno, terminé viendo casi un capítulo completo de *Robotech* 🤫.

## De HTML a EPUB

Entre los HTML había cosas muy diferentes. Algunos eran índices, manuales o pequeños sitios que tenía sentido conservar como páginas. Otros contenían obras literarias completas repartidas en varios archivos, con capítulos, imágenes y enlaces internos.

Para esas obras, Codex reconstruyó el orden de los capítulos, generó el índice, reunió las imágenes y armó un EPUB. El resultado se podía abrir y recorrer desde cualquier lector compatible.

Después de revisar uno, noté que le faltaba la portada. No sé si Codex no la había identificado o si simplemente nunca habíamos hablado del tema.

Así que asumí mi rol de liderazgo y le dije:

> Ponele la portada.

Buscó entre los recursos de la obra, encontró la imagen correspondiente y la incorporó. No tuve que señalarle el nombre del archivo ni explicarle dónde estaba.

![Algunos de los libros convertidos, vistos en Calibre](/images/notas/ordenando-mi-biblioteca-digital-con-codex-calibre.png)

## EPUB o PDF

Las obras narrativas y los textos divididos en capítulos pasaron a EPUB. Ese formato permite adaptar el texto a la pantalla, cambiar la tipografía y recorrer el contenido mediante un índice.

Los artículos, documentos técnicos y materiales donde importaba conservar la disposición visual terminaron en PDF. En algunos casos también hubo que corregir fondos, márgenes o tipografías para que se leyeran mejor.

Los HTML originales y sus recursos también quedaron guardados.

## Cómo terminó la cosa

Fueron un par de tardes y no me exigieron atención constante. Podía hacer otras cosas y volver cuando Codex terminaba una etapa o necesitaba consultarme algo.

Codex no se la llevó fácil tampoco, mirando el registro, el primer script que ejecutó ni siquiera llegó a correr: PowerShell rechazó la combinación de parámetros. Tuvo que corregirlo, volver a correr la simulación y revisar el registro nuevo. Se econtró con reglas que funcionaban en una carpeta pero no en otra, y conversiones que necesitaron más de un intento.

La validación terminó concentrándose en unos pocos puntos:

- texto e imágenes completos;
- enlaces y capítulos en el orden correcto;
- documentos que mantuvieran su diseño;
- videos con la misma duración y resolución;
- EPUB que abrieran y se pudieran recorrer.

Cuando algo no estaba claro, conservaba el original y dejaba ese caso pendiente.

Hoy probablemente lo haría por etapas más chicas, empezando por un solo tipo de archivo y ajustando las reglas antes de escalar al resto. Aun así, creo que el trabajo quedó hecho en una fracción del tiempo que me habría llevado hacerlo a mano.

Codex tampoco la tuvo fácil. Según el registro, el primer script ni siquiera llegó a ejecutarse: PowerShell rechazó la combinación de parámetros. Tuvo que corregirlo, volver a correr la simulación y revisar el registro nuevo. También encontró reglas que funcionaban en una carpeta pero no en otra, y conversiones que necesitaron más de un intento

Recién ahí me puse a mirar cómo se consume. Habitualmente uso razonamiento alto en ChatGPT Classic sin haber alcanzado un límite y di por sentado que en Codex sería igual. No lo es. Acá el consumo no depende simplemente de cuántos mensajes mandás: se calcula a partir de tokens y varía según el tamaño y la complejidad del trabajo, el modelo elegido y la duración de la sesión. En una tarea como esta, leer miles de archivos y mantener todo ese contexto puede gastar muchísimo más que una conversación larga.

¿Fue útil organizar una colección que casi no uso? No lo sé. Pero esas dos tardes me sirvieron para descubrir una aplicación práctica de Codex que no conocía 🤓.
