---
title: "Orden alfabético en secciones, listados manuales"
date: 2026-04-02T12:20:00-03:00
draft: false
description: "Cómo apliqué el orden alfabético en las secciones del Manual, quité el listado automático del theme y dejé listados personalizados."
tags: ["hugo", "congo", "site log", "manual", "orden alfabetico", "layouts"]
categories: ["Site Log"]
featureAlt: "Ilustración de un lector rodeado de libros y palabras como cringe, bizarro, literal y épico."
---

*Texto original: 02/04/2026. Actualización: 23/11/2026 (revisión editorial y estructura).*

El **Manual de supervivencia lingüística** aparecía ordenado por fecha de publicación, con encabezados por año y hasta un **0001** para las entradas que no tenían fecha. Para consultar términos y desvíos del lenguaje me servía mucho más tenerlos en **orden alfabético**.

## El problema principal

Probé a definir el orden con `weight`, pero el listado seguía organizado por fechas. Terminé separando el trabajo en dos partes:

- en la portada del manual, dejar una **lista manual de secciones**
- en cada sección, dejar el **listado automático de artículos**, pero ordenado alfabéticamente por título

La portada dejó de mostrar el año, los títulos duplicados y el borrador identificado como `0001`.

## La portada del manual: lista manual y sin listado automático abajo

La portada quedó con links escritos a mano dentro del `_index.md` de la sección.

### Código usado en `content/manual-de-supervivencia-linguistica/_index.md`

```md
---
title: "Manual de supervivencia lingüística"
draft: false
---

## Tipos de desvíos

### [Anglicismos y calcos]({{< relref "/manual-de-supervivencia-linguistica/anglicismos-y-calcos/" >}})
Sentidos importados del inglés que desplazan palabras mejores que ya existían en español.

...

### [Otros desvíos]({{< relref "/manual-de-supervivencia-linguistica/otros-desvios/" >}})
Corrimientos de sentido, vaguedades o simplificaciones que no encajan del todo en las categorías anteriores.
```

Con eso, la portada quedó exactamente en el orden que quería y además permitió dejar una breve descripción debajo de cada sección.

## Cómo quité el listado automático de abajo

En la portada no necesitaba el listado que agregaba Congo al final, así que preparé un layout específico para esa sección.

### Archivo creado

```text
layouts/manual-de-supervivencia-linguistica/section.html
```

### Código usado

```go-html-template
{{ define "main" }}
  <article class="max-w-full">
    <header>
      <h1 class="mt-0 text-4xl font-extrabold text-neutral-900 dark:text-neutral">
        {{ .Title }}
      </h1>
    </header>

    <section class="prose mt-6 max-w-none dark:prose-invert">
      {{ .Content }}
    </section>
  </article>
{{ end }}
```

Con eso quedó solo:

- el título
- el contenido escrito en el `_index.md`
- y nada más

## Cada sección: listado automático, pero en orden alfabético

Resuelta la portada, el siguiente paso fue hacer que dentro de cada sección las entradas salieran solas, pero ordenadas por nombre.

Ahí sí tenía sentido dejar un listado automático, porque esas páginas son las que pueden crecer más con el tiempo.

En cada `_index.md` de sección agregué un layout específico.

### Ejemplo en `content/manual-de-supervivencia-linguistica/anglicismos-y-calcos/_index.md`

```md
---
title: "Anglicismos y calcos"
draft: false
type: "manual"
layout: "lista-alfabetica"
---
No toda palabra importada enriquece el idioma.  
A veces solo reemplaza palabras que ya existían en español.
```

### Archivo creado

```text
layouts/_default/lista-alfabetica.html
```

### Código usado

```go-html-template
{{ define "main" }}
  <article class="max-w-full">
    <header>
      <h1 class="mt-0 text-4xl font-extrabold text-neutral-900 dark:text-neutral">
        {{ .Title }}
      </h1>
    </header>

    <section class="prose mt-6 max-w-none dark:prose-invert">
      {{ .Content }}
    </section>

    <section class="mt-10">
      {{ range .RegularPages.ByTitle }}
        <article class="mb-8">
          <h2 class="text-xl font-semibold">
            <a href="{{ .RelPermalink }}">{{ .Title }}</a>
          </h2>

          {{ if not .Draft }}
            <div class="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
              {{ time.Format ":date_long" .Date }} · 1 min
            </div>
          {{ end }}
        </article>
      {{ end }}
    </section>
  </article>
{{ end }}
```

El orden alfabético lo produce esta expresión:

```go-html-template
{{ range .RegularPages.ByTitle }}
```

## Breadcrumbs: qué son

En medio de la configuración, chatcito apareció con “los **breadcrumb**”, esas **rutas de navegación** que suelen verse encima del título de una página y muestran dónde estamos:

```text
Inicio / Manual de supervivencia lingüística / Anglicismos y calcos
```

Sirven para volver a niveles anteriores del sitio, aunque no era lo que estaba tratando de resolver con la lista alfabética.

El ajuste quedó resuelto con los dos layouts, sin tocar el tema Congo. En la búsqueda hubo momentos en que ChatGPT parecía haberse subido al Artemis II y estar orbitando la Luna antes de volver con `ByTitle`, pero el camino quedó documentado en los archivos de arriba.
