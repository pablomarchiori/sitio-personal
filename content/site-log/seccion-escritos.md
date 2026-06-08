---
title: "Agregué la sección Escritos"
date: 2026-06-07T00:00:00-03:00
draft: false
description: "Alta de una nueva sección del sitio para publicar textos personales de archivo."
tags: ["sitio", "hugo", "escritos"]
categories: ["Site Log"]
---

Sumé una nueva sección al sitio: [Escritos](/escritos/).

La idea es separar estos textos del resto de las notas. No son artículos técnicos, ni entradas de divulgación, son textos breves de archivo personal, escritos en distintos momentos, principalmente entre 2011 y 2015.

La sección quedó armada como un índice propio, agrupado por año, con una página individual para cada texto. También agregué ilustraciones en blanco y negro para acompañar algunos escritos, manteniendo una estética común: tinta, contraste, composición horizontal y poco detalle facial.

A nivel técnico, agregué:

- contenido nuevo en `content/escritos/`;
- un template específico para el listado en `layouts/escritos/list.html`;
- un template individual para los textos en `layouts/escritos/single.html`;
- imágenes propias en `static/images/escritos/`;
- acceso desde el menú principal del sitio.

El objetivo fue que la sección funcione como archivo, sin mezclarla con las notas habituales del sitio y sin forzar una lectura literaria o explicativa.
