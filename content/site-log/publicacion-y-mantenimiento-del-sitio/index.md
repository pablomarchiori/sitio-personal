---
title: "Cómo mantener, publicar y no romper el sitio"
date: 2026-07-23T17:30:00-03:00
draft: false
description: "Guía práctica para agregar contenido, manejar drafts, entender fechas y publicar cambios en GitHub Pages sin hacer lío."
tags: ["hugo", "git", "github-pages", "markdown", "site-log"]
categories: ["Site Log"]
featureAlt: "Logotipo de GitHub sobre un fondo de código informático."
---

*Texto original: 28/03/2026. Revisión editorial: 23/11/2026 (redacción y estructura).*

**Actualización:** 30/05/26 - [Recuperación de un archivo borrado por Duplicate Cleaner](#recuperar-un-archivo-borrado-por-error)

Esta nota comenzó como un apunte de trabajo para mantener el sitio con Hugo y GitHub Pages, especialmente después de perder tiempo por un borrador invisible y por una fecha futura. El 30 de mayo sumé la recuperación de un archivo que había borrado Duplicate Cleaner; por eso dejo los comandos y las comprobaciones tal como los fui usando.

## La estructura mental básica

Conviene distinguir el contenido que guardo en la PC, la vista local de Hugo y lo que finalmente publica GitHub Pages. Las tres cosas pueden estar en estados diferentes.

### 1. El contenido

El contenido vive dentro de `content/`, principalmente en `content/notas/` y `content/site-log/`. En la organización inicial cada publicación era un archivo `.md`; después pasé a carpetas por artículo con un `index.md` y sus recursos propios.

### 2. La vista local

Para trabajar localmente uso `hugo server -D`, que levanta la vista de desarrollo en `http://localhost:1313`. La opción `-D` incluye borradores.

### 3. La publicación online

Los cambios que veo en mi PC no quedan publicados por guardarlos. Primero van al historial local de Git, después a GitHub con `push`, y allí el workflow compila y despliega la versión pública.

## Cómo agregar una nota nueva

En la estructura original podía crear una publicación con:

`hugo new content notas/nombre-de-la-nota.md`

Si existe un arquetipo para esa sección, Hugo utiliza esa plantilla. **Desde la reorganización de octubre de 2026**, los artículos del sitio son *page bundles*: `content/notas/nombre-de-la-nota/index.md`, con sus imágenes y recursos al lado.

## Cómo crear una sección nueva

Una sección es una carpeta bajo `content/`, por ejemplo `content/site-log/`. Su portada o índice se define en `content/site-log/_index.md`, que no debe confundirse con el `index.md` de una publicación individual.

## Cómo está formado un archivo Markdown del sitio

Cada nota tiene un **front matter**, el encabezado delimitado por `---` donde Hugo guarda sus metadatos.

Por ejemplo:

- `title`
- `date`
- `draft`
- `description`
- `tags`
- `categories`

Después aparece el contenido en Markdown.

## Qué significa `draft: true`

Con `draft: true` la publicación queda en borrador. Hugo la muestra localmente si inicio el servidor con `-D`, pero el workflow normal de GitHub Pages no la incluye en la publicación.

## Por qué local puede verse distinto que online

La vista local puede incluir borradores y contenido futuro según las opciones del servidor, mientras que GitHub Pages usa la configuración del build de producción. Por eso una nota puede verse en `localhost` y faltar en la web.

## El otro detalle molesto: la fecha futura

Además del estado de borrador, Hugo evalúa la fecha de publicación. Una de las primeras notas parecía desaparecer porque tenía una hora futura, aunque el archivo estaba en la carpeta correcta.

### Qué pasó

La nota tenía algo como:

`date: 2026-03-28T18:30:00-03:00`

y en ese momento esa hora todavía no había llegado.

Entonces, aunque el sitio estaba levantado con:

`hugo server -D`

la nota no aparecía.

### Por qué

La opción `-D` incluye borradores, pero **no** contenido con fecha futura. Para verlo localmente hace falta también:

`-F`

o sea:

`hugo server -D -F`

Si una publicación no aparece, compruebo su ubicación, el front matter, `draft` y la fecha antes de investigar problemas de plantillas.

## Cómo ver el sitio localmente

El comando habitual es `hugo server -D`. Cuando necesito incluir también publicaciones fechadas en el futuro, uso `hugo server -D -F`.

## Qué hace cada comando de Git

### `git add`

Deja preparados los archivos seleccionados para incorporarlos al siguiente commit, todavía sin subirlos a ningún servidor.

### `git commit`

Registra una versión en el historial local de Git; no publica la página.

### `git push`

Envía los commits al repositorio de GitHub. Después del `push`, GitHub Actions compila y despliega el sitio.

## Flujo normal para publicar un cambio

El flujo que anoté entonces fue:

1. Editar el archivo y comprobarlo en `localhost:1313`.
2. Revisar `git status` para saber qué cambió.
3. Preparar los archivos con `git add .` o seleccionarlos individualmente.
4. Guardarlos con `git commit -m "mensaje"`.
5. Enviar con `git push`.
6. Comprobar el resultado de GitHub Actions y revisar la página pública.

Con el tiempo incorporé `publica.cmd`, que automatiza parte de esta secuencia. Antes de ejecutarlo, igual hay que revisar los cambios porque utiliza `git add -A` y agrega **todos** los archivos nuevos, modificados y borrados del repositorio.

## Cuándo usar `git add .`

`git add .` prepara cambios dentro de la carpeta actual y sus subcarpetas. Conviene utilizarlo únicamente después de revisar qué archivos se van a incluir; si hay pruebas o recursos que todavía no corresponden, prefiero seleccionar los archivos de manera explícita.

## Qué revisar antes de publicar

Antes del commit reviso `git status` para detectar archivos modificados, nuevos o borrados. Es especialmente importante con `publica.cmd`, porque su `git add -A` no distingue lo que quería publicar de lo que simplemente quedó en la carpeta.

## Recuperar un archivo borrado por error

Durante una limpieza con Duplicate Cleaner desapareció este archivo:

`layouts/_partials/functions/warnings.html`

Aunque el archivo está vacío, cumple una función concreta: actúa como override local y evita que Hugo use un partial incompatible del tema Congo. Al faltar, el sitio dejó de compilar y reapareció el error relacionado con `.Author`.

Para revisar si Git detecta archivos borrados:

`git status --short`

El resumen marca con `D` los archivos eliminados.

Para listar únicamente los archivos versionados que faltan en la carpeta local:

`git diff --name-only --diff-filter=D`

El filtro `D` muestra solo los archivos borrados que Git está siguiendo.

Para recuperar solo el archivo afectado desde el último commit:

`git restore --source=HEAD -- layouts/_partials/functions/warnings.html`

`HEAD` es el último commit local. Esta restauración afecta únicamente al archivo indicado.

Después conviene verificar que volvió a aparecer:

`dir layouts\_partials\functions`

Si Git muestra varios archivos borrados, es mejor revisarlos uno por uno. No conviene ejecutar una restauración general sin comprobar antes si hay cambios locales que se quieran conservar.

## Qué hacer si local se ve bien pero online no

Revisar en este orden:

- si el archivo estaba en `draft: true`
- si tenía fecha futura
- si realmente se hizo `git push`
- si GitHub Actions terminó bien
- si la página está entrando por la URL correcta
