---
title: "Quince años después: de Blogger a GitHub"
date: 2026-03-26T19:30:00-03:00
draft: false
description: "Una nivelación mínima antes de instalar el sitio: qué tuve que entender de Git y GitHub viniendo desde otro palo."
tags: ["git", "github", "aprendizaje", "infraestructura", "site-log"]
categories: ["Site Log"]
---

*Texto original: 26/03/2026. Actualización: 23/11/2026 (revisión editorial y estructura).*

Quince años después de tener un sitio en Blogger volví a armar una página propia. En aquel momento me peleaba con el XML de las plantillas, cambiaba cosas a fuerza de prueba y error y confiaba en no romper demasiado. Para esta vuelta elegí Hugo y GitHub Pages, con la intención de poder mantener los archivos por mi cuenta y entender mejor cómo terminan publicados.

## De Blogger a un repositorio

Blogger tenía la comodidad de editar desde un panel, pero también las limitaciones de trabajar dentro de una plataforma ajena. Ahora prefería guardar las publicaciones como archivos, versionarlas y tener más control sobre el sitio. Eso me obligó a ordenar algunas ideas de Git que, desde mi trabajo habitual en infraestructura, no utilizaba todos los días.

## Git no es GitHub

**Git** se ejecuta en mi PC y registra las modificaciones del proyecto, incluidos los archivos agregados, borrados o recuperados del historial. **GitHub** aloja el repositorio remoto y, en este caso, GitHub Pages usa lo que recibe allí para generar el sitio público.

El circuito terminó siendo bastante concreto:

1. Modificar los archivos del proyecto.
2. Revisar el sitio localmente.
3. Preparar los cambios con `git add`.
4. Guardarlos en el historial local con `git commit`.
5. Enviarlos a GitHub con `git push`.
6. Comprobar que GitHub Actions termine de publicar.

Un commit no publica nada por sí mismo y el `push` tampoco equivale a una página ya actualizada: todavía tiene que ejecutarse la compilación y el despliegue.

## Mirado desde infraestructura

Acá no tengo un IIS, un Apache ni una VM donde copiar archivos manualmente. La publicación depende de varias piezas que se complementan: el repositorio local, GitHub, el workflow de GitHub Pages, el dominio y los DNS. Conocer esa separación ayuda a entender por qué un cambio puede verse en `localhost` y todavía no existir en la web.

Por eso empecé documentando este recorrido antes de instalar Hugo y ajustar Congo. Quería algo sencillo de mantener y terminé metiéndome un poco en el trabajo de los desarrolladores, entre commits, pushes y alguna que otra pelea con GitHub. Había que renegar un poco, sí, pero también para eso había vuelto. 🫢
