---
title: "Hugo 'el quisquilloso' o pavadas que hacen perder tiempo"
date: 2026-05-17T18:00:00-03:00
draft: false
description: "Tres ajustes chicos del sitio: un bloque Markdown que se veía mal, HTML dentro de Markdown y una sección que no aparecía en Reciente."
tags: ["hugo", "markdown", "goldmark", "site-log"]
categories: ["Site Log"]
---

*Texto original: 17/05/2026. Actualización: 23/11/2026 (revisión editorial y estructura).*

En unas cuantas pruebas con Hugo terminé perdiendo tiempo por detalles pequeños: la separación entre bloques de Markdown, una opción de Goldmark y una mayúscula en el nombre de una sección. Dejo los tres casos porque son fáciles de repetir cuando uno vuelve al sitio después de un tiempo.

## Un bloque Markdown que se veía mal

En la primera prueba, un fragmento del archivo `.md` se veía mal tanto en local como en GitHub, aunque las líneas parecían correctas.

El bloque era algo simple:

```md
## Otras formas de decirlo

"Dejalo con la configuración predeterminada."  
"Vino con la configuración inicial."

**Desvío:** anglicismo técnico / traducción imprecisa.

----
```

Funcionó al agregar una línea en blanco entre bloques y dejar un salto de línea al final del archivo. El problema estaba en cómo Goldmark interpretaba esa separación, no en el texto que quería mostrar.

La versión segura quedó así:

```md
## Otras formas de decirlo

"Dejalo con la configuración predeterminada."  
"Vino con la configuración inicial."

**Desvío:** anglicismo técnico / traducción imprecisa.

---
```

Con ese pequeño ajuste, el renderizado quedó como esperaba.

## HTML dentro de Markdown

Después quise alinear una imagen con un texto mediante HTML dentro de una nota. Goldmark, el renderizador de Markdown que utiliza Hugo, no estaba mostrando ese HTML porque por defecto bloquea su procesamiento.

La corrección fue agregar esto en `hugo.toml`:

```toml
[markup]
  [markup.goldmark]
    [markup.goldmark.renderer]
      unsafe = true
```

`unsafe = true` permite que el HTML incluido en el Markdown llegue al resultado. Es una opción que requiere cuidado con contenido de origen desconocido; en este sitio, donde controlo lo que publico, me sirve para maquetaciones puntuales.

## Labs no aparecía en Reciente

La tercera sorpresa fue que **Labs** no aparecía en el listado de publicaciones recientes. La nota estaba bien; el error se encontraba en `hugo.toml`.

Dentro de `mainSections` había quedado esto:

```toml
mainSections = ["notas", "Labs", "site-log"]
```

Pero la sección real es `labs`, en minúscula. Hugo distingue mayúsculas y minúsculas, así que tomaba `notas` y `site-log`, pero dejaba afuera `labs`.

La corrección fue esta:

```toml
mainSections = ["notas", "labs", "site-log"]
```

Después de eso, las publicaciones de Labs volvieron a entrar en "Reciente" como correspondía.
