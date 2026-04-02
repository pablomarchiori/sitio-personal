---
title: "Orden alfabético en secciones, listados manuales"
date: 2026-04-02T12:20:00-03:00
draft: false
description: "Cómo apliqué el orden alfabético en las secciones del Manual, quité el listado automático del theme y dejé listados personalizados."
tags: ["hugo", "congo", "site log", "manual", "orden alfabetico", "layouts"]
categories: ["Site Log"]
---

No me gustaba cómo quedaba el **Manual de supervivencia lingüística**. Salía en orden cronológico de publicación y eso lo dejaba desordenado, sobre todo pensando en agregar más entradas a futuro. En un tema así, me resultaba mucho más lógico que quedara en **orden alfabético**.

El theme, por defecto, mostraba el listado agrupado por fecha, con el año arriba y hasta un **0001** para lo que no tenía fecha definida.

## El problema principal

El primer intento fue con `weight`, aplicando un orden manual.

Pero en esa vista no alcanzaba, porque el listado de la sección seguía respetando la lógica de fechas del theme.

Después de bastante ida y vuelta, cambié el enfoque y terminé separando el problema en dos partes:

- en la portada del manual, dejar una **lista manual de secciones**
- en cada sección, dejar el **listado automático de artículos**, pero ordenado alfabéticamente por título

Eso además resolvió otro detalle molesto en la portada: desaparecieron el bloque del año, los títulos repetidos y el borrador que caía como `0001`.

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

No hacía falta reordenar ese bloque: directamente convenía que no apareciera. Para eso, agregué un layout específico solo para esa sección.

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

Así desaparecieron el año, el `0001` y el listado automático que en esa portada no aportaba nada.

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

La línea clave fue esta:

```go-html-template
{{ range .RegularPages.ByTitle }}
```

Ese `ByTitle` fue lo que dejó la lista en orden alfabético.

## Breadcrumbs: qué son

En el medio, chatcito me ofreció hacer cosas con "los **breadcrumb**".  
En castellano suele traducirse como **miga de pan** o, más claro en este contexto, **ruta de navegación**.  
Es la línea que a veces aparece arriba del título y muestra algo como:

```text
Inicio / Manual de supervivencia lingüística / Anglicismos y calcos
```

Sirve para:  
- ubicarte dentro del sitio
- volver a niveles anteriores
- entender mejor la estructura de navegación

No era algo necesario para esta parte del sitio, pero quedó como aprendizaje del proceso.

## Qué me dejó esta vuelta

Con Hugo y los themes no siempre alcanza con tocar front matter y esperar que todo se acomode solo. A veces el problema no está en el contenido, sino en la forma en que el layout del theme genera el listado.

Y sí, en el medio la asistencia de IA tuvo momentos de excursión innecesaria. Por momentos parecía que ChatGPT se había subido al Artemis II y estaba orbitando la Luna antes de volver con la respuesta.

Aun así, sin ayuda de IA me hubiera llevado bastante más tiempo llegar a esta solución.

En el proceso, además de dejarlo funcionando, me quedaron varias cosas claras:

- cómo crear layouts específicos por sección
- cómo anular un listado automático del theme
- cómo ordenar páginas por título con `ByTitle`
- y qué es un breadcrumb
