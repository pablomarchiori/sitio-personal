---
title: "Google Search Console… you lazy bit!"
date: 2026-05-17T18:10:00-03:00
draft: false
description: "Search Console seguía mostrando un problema viejo de breadcrumbs, aunque la página actual ya estaba corregida."
tags: ["google-search-console", "seo", "breadcrumbs", "site-log"]
categories: ["Site Log"]
---

Un caso chico, pero útil para dejar anotado: Google Search Console seguía mostrando un error en una página que ya estaba corregida.

El aviso era este:

```text
Se debe especificar "name" o "item.name" en "itemListElement"
```

El problema aparecía en las rutas de exploración, o sea, en los breadcrumbs.

## El síntoma

Al pedir la indexación de una página, Search Console mostraba un estado viejo con problemas. La página aparecía como si tuviera un elemento sin nombre.

En el HTML que Google había visto antes, el problema era bastante claro: el título estaba vacío, el `h1` también, la fecha aparecía como `1 de enero de 1`, el contenido principal no estaba y el último elemento del breadcrumb quedaba sin nombre.

No era un error misterioso de Google. Google había rastreado una versión rota de la página.

## La página actual ya estaba bien

Después de corregir la página, hice la prueba en tiempo real desde Search Console.

La URL ya aparecía disponible para Google. La página se podía rastrear, se podía indexar y ya no mostraba ese estado vacío que había generado el error anterior.

También la revisé con el Rich Results Test de Google. En esa prueba ya aparecían elementos válidos:

```text
Article
Breadcrumbs
```

Eso cambiaba bastante el diagnóstico. El problema no parecía estar en la versión actual publicada, sino en el informe viejo que Search Console todavía estaba mostrando.

## Índice viejo contra prueba en tiempo real

Search Console no siempre muestra todos los estados en el mismo momento. Una cosa es la versión que Google tiene en su índice o en un informe generado antes. Otra cosa es la prueba en tiempo real, que vuelve a pedir la URL actual.

En este caso, la diferencia era esa:

```text
Índice / informe viejo: seguía mostrando el error.
Prueba en tiempo real: veía la página corregida.
Rich Results Test: detectaba Article y Breadcrumbs válidos.
```

Entonces no tenía sentido seguir tocando el sitio a ciegas. La versión actual ya estaba bien.

## Qué hice

La acción correcta fue pedir la indexación de nuevo y esperar a que Google actualizara el informe.

Si las dos pruebas ya ven la página bien, no hay nada más para tocar.

El punto importante es no confundir un error actual con un error histórico. Si uno toca cosas de más en ese momento, puede terminar rompiendo algo que ya estaba funcionando.

## Lo que queda anotado

Cuando Search Console marque un problema, conviene mirar dos cosas antes de modificar nada:

```text
1. Qué dice el índice o informe histórico.
2. Qué dice la prueba en tiempo real.
```

Si el informe viejo marca error, pero la prueba en tiempo real ya ve la página bien, probablemente solo falta que Google actualice el estado.

No es magia negra. Es Google mostrando dos momentos distintos de la misma URL.
