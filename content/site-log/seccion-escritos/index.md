---
title: "Agregué la sección Escritos"
date: 2026-06-07T00:00:00-03:00
draft: false
description: "Alta de una nueva sección del sitio para publicar textos personales de archivo."
tags: ["sitio", "hugo", "escritos"]
categories: ["Site Log"]
featureAlt: "Ilustración en blanco y negro de un hombre sentado frente al mar, con un cuaderno y una taza sobre la mesa."
---

*Texto original: 07/06/2026. Actualización: 23/11/2026 (revisión editorial y estructura).*

Sumé una nueva sección al sitio: [Escritos](/escritos/).

Quería separar del resto de las notas algunos textos breves de archivo personal, escritos principalmente entre 2011 y 2015, que no encajaban demasiado en las secciones técnicas o de divulgación.

Armé un índice por año, con una página individual para cada escrito, y sumé ilustraciones en blanco y negro para acompañar algunos textos. La idea fue mantener una estética común de tinta, contraste y poco detalle facial.

A nivel técnico, agregué:

- contenido nuevo en `content/escritos/`;
- un template específico para el listado en `layouts/escritos/list.html`;
- un template individual para los textos en `layouts/escritos/single.html`;
- imágenes propias en `static/images/escritos/`;
- acceso desde el menú principal del sitio.
