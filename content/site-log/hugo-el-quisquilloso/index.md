---
title: "Hugo 'el quisquilloso' o pavadas que hacen perder tiempo"
date: 2026-05-17T18:00:00-03:00
draft: false
description: "Tres ajustes chicos del sitio: un bloque Markdown que se veía mal, HTML dentro de Markdown y una sección que no aparecía en Reciente."
tags: ["hugo", "markdown", "goldmark", "site-log"]
categories: ["Site Log"]
---

A veces el problema no está en algo grande. No es el servidor, no es el theme de Hugo roto, no es GitHub haciendo algo raro. A veces es una línea en blanco, una opción de configuración o una mayúscula donde no va.

Estos días me encontré con tres de esos problemas que no deberían llevar más de cinco minutos y terminan llevando bastante más.

## Un bloque Markdown que se veía mal

El primer caso fue visual. El archivo `.md` parecía estar correcto, pero una parte de la página se renderizaba mal tanto en local como en GitHub.

El bloque era algo simple:

```md
## Otras formas de decirlo

“Dejalo con la configuración predeterminada.”  
“Vino con la configuración inicial.”

**Desvío:** anglicismo técnico / traducción imprecisa.

----
```

La solución fue bastante poco épica: agregar una línea en blanco más y dejar el salto de línea final del archivo.

No era un problema del contenido. Era un problema de separación entre bloques. Markdown suele bancarse bastante, pero no siempre interpreta igual cuando un bloque queda demasiado pegado al siguiente o cuando el archivo termina sin un salto de línea final.

La versión segura quedó así:

```md
## Otras formas de decirlo

“Dejalo con la configuración predeterminada.”  
“Vino con la configuración inicial.”

**Desvío:** anglicismo técnico / traducción imprecisa.

---
```

No cambia la idea. Cambia cómo lo interpreta el renderizador.

## HTML dentro de Markdown

El segundo ajuste apareció cuando quise usar un bloque HTML dentro de una nota. La idea era simple: alinear una imagen con un texto al lado. No era una tabla de datos, sino un recurso de maquetación.

El problema era que Hugo estaba bloqueando ese HTML dentro del Markdown. En este caso, el renderizador usado por Hugo es Goldmark, y por defecto no deja pasar HTML embebido.

La corrección fue agregar esto en `hugo.toml`:

```toml
[markup]
  [markup.goldmark]
    [markup.goldmark.renderer]
      unsafe = true
```

El nombre `unsafe` suena más dramático de lo que es para este caso. Básicamente le dice a Hugo que no ignore HTML escrito dentro del Markdown.

Hay que usarlo con criterio. En un sitio personal donde el contenido lo escribo y lo controlo yo, me sirve para resolver casos puntuales donde Markdown se queda corto.

## Labs no aparecía en Reciente

El tercer ajuste fue otra pavada clásica: la sección **Labs** no aparecía en el bloque de publicaciones recientes.

El problema no estaba en la nota nueva ni en el home. Estaba en `hugo.toml`.

Dentro de `mainSections` había quedado esto:

```toml
mainSections = ["notas", "Labs", "site-log"]
```

Pero la sección real es `labs`, en minúscula. Hugo distingue mayúsculas y minúsculas, así que tomaba `notas` y `site-log`, pero dejaba afuera `labs`.

La corrección fue esta:

```toml
mainSections = ["notas", "labs", "site-log"]
```

Después de eso, las publicaciones de Labs volvieron a entrar en “Reciente” como correspondía.

## Lo que queda anotado

No fueron grandes problemas técnicos. Fueron detalles de mantenimiento que, una vez resueltos, parecen obvios. Por eso conviene dejarlos anotados: la próxima vez que aparezca algo parecido, al menos no arrancar de cero.
