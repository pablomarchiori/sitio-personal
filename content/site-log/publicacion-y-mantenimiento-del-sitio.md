---
title: "Cómo mantener, publicar y no romper el sitio"
date: 2026-03-28T17:30:00-03:00
draft: false
description: "Guía práctica para agregar contenido, manejar drafts, entender fechas y publicar cambios en GitHub Pages sin hacer lío."
tags: ["hugo", "git", "github-pages", "markdown", "site-log"]
categories: ["Site Log"]
---

# Objetivo

Dejar anotado el flujo real para mantener este sitio sin tener que redescubrirlo cada vez.

La idea de esta nota es cubrir lo práctico:

- cómo agregar contenido
- cómo crear secciones nuevas
- cómo funcionan los `draft`
- por qué local puede verse distinto que online
- qué pasó con el error de la fecha futura
- qué hacen `git add`, `git commit` y `git push`
- cómo publicar cambios sin hacer lío

## La estructura mental básica

Hay que pensar el sitio en tres capas:

- el contenido
- la vista local
- la publicación online

### 1. El contenido

El contenido vive dentro de `content/`.

Por ejemplo:

- `content/notas/`
- `content/site-log/`

Cada archivo `.md` es una página o una nota.

### 2. La vista local

Para ver el sitio en la PC se usa Hugo localmente, por ejemplo con:

`hugo server -D`

Eso levanta el sitio en:

`http://localhost:1313`

### 3. La publicación online

Lo que se ve online no sale directamente de la PC, sino del repositorio en GitHub y del workflow de GitHub Pages.

O sea:

- se cambia algo localmente
- se guarda
- se hace commit
- se hace push
- GitHub recompila el sitio
- recién ahí aparece online

## Cómo agregar una nota nueva

Si ya existe una sección, por ejemplo `notas`, se puede crear una nota nueva con:

`hugo new content notas/nombre-de-la-nota.md`

Si existe un arquetipo para esa sección, Hugo toma esa plantilla y arma el archivo base.

## Cómo crear una sección nueva

Una sección nueva, en la práctica, es una carpeta dentro de `content/`.

Por ejemplo:

`content/site-log/`

Si además se quiere que esa sección tenga una portada propia, hay que crear:

`content/site-log/_index.md`

Ese archivo funciona como portada o índice de la sección.

## Cómo está formado un archivo Markdown del sitio

Cada nota arranca con un encabezado entre `---` y `---`.

Eso es el front matter.

Por ejemplo:

- `title`
- `date`
- `draft`
- `description`
- `tags`
- `categories`

Después de ese bloque recién viene el contenido de la nota.

## Qué significa `draft: true`

Si una nota tiene:

`draft: true`

entonces está en borrador.

### Qué implica eso

- se puede ver localmente si el server se levanta con `-D`
- no se publica online en GitHub Pages

Por eso una nota puede existir, verse localmente y aun así no aparecer en la web pública.

## Por qué local puede verse distinto que online

Porque localmente se puede levantar Hugo con opciones más amplias.

Por ejemplo:

`hugo server -D`

muestra también los borradores.

Pero el workflow de GitHub Pages no publica drafts.  
O sea: si una nota sigue en borrador, online no aparece aunque local sí.

## El otro detalle molesto: la fecha futura

Además del draft, también importa la fecha.

Tuvimos un error justamente por eso: una nota no aparecía y no era porque estuviera mal ubicada, sino porque tenía una fecha futura.

### Qué pasó

La nota tenía algo como:

`date: 2026-03-28T18:30:00-03:00`

y en ese momento esa hora todavía no había llegado.

Entonces, aunque el sitio estaba levantado con:

`hugo server -D`

la nota no aparecía.

### Por qué

Porque `-D` muestra drafts, pero no incluye contenido futuro.

Para ver contenido con fecha futura hay que usar además:

`-F`

o sea:

`hugo server -D -F`

### Conclusión práctica

Si una nota no aparece, revisar siempre estas tres cosas:

- que esté en la carpeta correcta
- que el front matter esté bien
- que no tenga `draft: true` o una fecha futura que la esté escondiendo

## Cómo ver el sitio localmente

El comando habitual es:

`hugo server -D`

Si además se quiere ver contenido con fecha futura:

`hugo server -D -F`

Eso alcanza para la mayoría del trabajo diario.

## Qué hace cada comando de Git

### `git add`

Prepara cambios para el próximo commit.

Todavía no publica nada.  
Solo dice: estos cambios quiero guardarlos en la próxima versión.

### `git commit`

Guarda una versión nueva en el repositorio local.

Tampoco publica nada online.  
Todavía sigue siendo algo local.

### `git push`

Sube esos cambios a GitHub.

Recién después del `push`, GitHub Actions recompila y publica el sitio.

## Flujo normal para publicar un cambio

El flujo simple es este:

1. editar el archivo
2. revisar localmente en `localhost:1313`
3. hacer `git status`
4. hacer `git add .` o agregar archivos puntuales
5. hacer `git commit -m "mensaje"`
6. hacer `git push`
7. esperar que GitHub Actions termine
8. revisar online

## Cuándo usar `git add .`

`git add .` agrega todo lo modificado y todo lo nuevo dentro de la carpeta actual y sus subcarpetas.

Sirve cuando ya se sabe que todo lo que está pendiente realmente se quiere subir.

Si hay archivos de prueba o basura, conviene borrarlos antes o agregar solo lo puntual.

## Qué revisar antes de publicar

Antes de hacer `push`, conviene mirar:

`git status`

Eso muestra:

- archivos modificados
- archivos nuevos
- archivos borrados
- si hay algo que no se quería subir

## Qué hacer si local se ve bien pero online no

Revisar en este orden:

- si el archivo estaba en `draft: true`
- si tenía fecha futura
- si realmente se hizo `git push`
- si GitHub Actions terminó bien
- si la página está entrando por la URL correcta

## Qué cosas ya quedaron claras en este sitio

En este sitio ya quedó comprobado que:

- un draft se puede ver localmente pero no online
- una fecha futura puede hacer que una nota “desaparezca” aunque el archivo esté bien
- el contenido no se publica por arte de magia: sin `commit` y `push`, no sale
- GitHub Pages compila después del push, no antes
- conviene separar el contenido general en `notas` y la bitácora técnica del sitio en `site-log`

## Recomendación práctica para no perder tiempo

Antes de pensar que Hugo “anda mal”, revisar siempre esto:

- ¿el archivo está dentro de `content/`?
- ¿el front matter tiene los `---` correctos?
- ¿está en draft?
- ¿la fecha es futura?
- ¿el server está levantado con `-D`?
- ¿ya hice commit y push?
- ¿terminó el workflow de GitHub?

La mitad de los problemas raros suelen venir de ahí.

## Cierre

Mantener el sitio no es difícil, pero sí tiene varias pequeñas mañas.
La más clara hasta ahora fue esta:
una nota puede no aparecer no porque esté mal escrita, sino porque tiene `draft: true` o porque la fecha está en el futuro.
Por eso esta nota existe: para no volver a pelearse con exactamente lo mismo dentro de una semana.