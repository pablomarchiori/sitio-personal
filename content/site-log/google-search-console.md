---
title: "Google Search Console… you lazy bit!"
date: 2026-05-25T18:10:00-03:00
draft: false
description: "Search Console seguía mostrando problemas viejos o enlaces rotos que había que separar entre errores históricos y referencias reales del sitio."
tags: ["google-search-console", "seo", "breadcrumbs", "404", "cloudflare", "moonjs", "site-log"]
categories: ["Site Log"]
---

**Texto original:** 17/05/26  
**Actualización:** 26/05/26 — [404 que sí venían de enlaces reales](#actualizacion-404)

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

<a id="actualizacion-404"></a>
## Otra vuelta: 404 que sí venían de enlaces reales

Actualización 26/05/26: Otro aviso de Search Console, esta vez bajo **No se ha encontrado (404)**. La lista no apuntaba a notas normales del sitio, sino a direcciones del simulador **Moonjs**:

```text
/cgi-bin/logger.php
/moonjs/svtsim.com/svtsim.html
/moonjs/svtsim.com/hemosim.html
/moonjs/info@sandroid.org
/data/feriados-
/cdn-cgi/l/email-protection
```

La búsqueda en el repositorio confirmó que varias referencias salían del código copiado de **Moonjs**:

```cmd
findstr /S /I /N /C:"logger.php" /C:"svtsim.com" /C:"hemosim" /C:"info@sandroid" /C:"feriados-" /C:"email-protection" *.md *.html *.js *.json *.xml
```

Si bien algunas URLs estaban dentro de `public`, ese no era el lugar correcto para tocar nada. En Hugo, `public` es salida generada. Si se corrige ahí, el próximo build puede pisar el cambio. La fuente real está en:

```text
static\moonjs\agc.html
static\moonjs\agc_sp.html
```

En los archivos de Moonjs había llamadas a un logger que no existe en este sitio. Ese endpoint probablemente tenía sentido en el sitio original del emulador, pero acá solo generaba una URL rota.


```js
$.get("/cgi-bin/logger.php", {"s": "moonjs", "v": "11", "r": Math.random()});
```

También había enlaces externos escritos como relativos:

```html
<a href="svtsim.com/svtsim.html">
<a href="svtsim.com/hemosim.html">
```

El navegador interpretaba eso como rutas internas dentro de `/moonjs/`, por ejemplo:

```text
https://www.marchiori.ar/moonjs/svtsim.com/svtsim.html
```

La corrección fue pasarlos a URLs absolutas:

```html
<a href="https://svtsim.com/svtsim.html">
<a href="https://svtsim.com/hemosim.html">
```

También había direcciones de correo usadas como si fueran enlaces comunes:

```html
<a href="info@sandroid.org">
<a href="mail://siravan@svtsim.com">
```

Eso se corrigió usando `mailto:`:

```html
<a href="mailto:info@sandroid.org">
<a href="mailto:siravan@svtsim.com">
```

La URL `/data/feriados-` venía de un script del panel que arma dinámicamente el nombre del JSON según el año:

```js
var jsonUrl = "/data/feriados-" + year + ".json";
```

Eso no era un enlace roto común, sino una ruta construida por JavaScript. Mientras los archivos reales existan con el año correspondiente, no había que inventar una redirección rara para esa URL incompleta.

La ruta `/cdn-cgi/l/email-protection` venía de Cloudflare, no del contenido normal del repositorio. Eso pertenece a la protección de direcciones de correo de Cloudflare. No era algo para resolver editando Markdown o plantillas de Hugo.

Después de eso, correspondía regenerar el sitio, publicar y pedir a Google que reindexe.

