---
title: "Google Search Console… you lazy bit!"
date: 2026-05-25T18:10:00-03:00
draft: false
description: "Search Console seguía mostrando problemas viejos o enlaces rotos que había que separar entre errores históricos y referencias reales del sitio."
tags: ["google-search-console", "seo", "breadcrumbs", "404", "cloudflare", "moonjs", "site-log"]
categories: ["Site Log"]
featureAlt: "Logotipo de Google Search Console sobre un gráfico de líneas."
---

*Texto original: 17/05/2026. Actualización: 23/11/2026 (revisión editorial y estructura).*

**Actualización:** 26/05/26 - [404 que sí venían de enlaces reales](#actualizacion-404)

Search Console seguía marcando un error de datos estructurados en una página que ya había corregido. El aviso decía:

```text
Se debe especificar "name" o "item.name" en "itemListElement"
```

El mensaje señalaba las rutas de navegación (*breadcrumbs*).

## El síntoma

Al pedir la indexación, el informe histórico todavía mostraba una versión rota de la página: título y `h1` vacíos, fecha `1 de enero de 1`, ausencia del contenido principal y último elemento del breadcrumb sin nombre. Era exactamente la clase de HTML que explicaba aquel aviso.

## La página actual ya estaba bien

Después de corregirla, la **prueba en tiempo real** confirmó que Google podía rastrear e indexar la página actual. El **Rich Results Test** también detectó estos elementos válidos:

```text
Article
Breadcrumbs
```

La diferencia estaba entre el informe guardado por Google y el HTML que la página entregaba en ese momento.

## Índice viejo contra prueba en tiempo real

El índice y los informes de Search Console no se actualizan necesariamente al mismo tiempo que la página. La prueba en tiempo real consulta la URL de nuevo, y las tres comprobaciones de aquel día dieron resultados distintos según el momento evaluado:

```text
Índice / informe viejo: seguía mostrando el error.
Prueba en tiempo real: veía la página corregida.
Rich Results Test: detectaba Article y Breadcrumbs válidos.
```

Pedí una nueva indexación y dejé que Google actualizara el informe, porque modificar otra vez el sitio no habría corregido un resultado histórico. En un aviso parecido, primero conviene comparar el índice con la prueba en tiempo real antes de tocar el HTML.

<a id="actualizacion-404"></a>
## Otra vuelta: 404 que sí venían de enlaces reales

**Actualización 26/05/26:** apareció otro aviso de Search Console, ahora bajo **No se ha encontrado (404)**. Esta vez la lista incluía rutas del simulador **Moonjs**, del panel y de Cloudflare:

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

Si bien algunas URLs estaban dentro de `public`, ese no era el lugar correcto para tocar nada. En Hugo, `public` es salida generada: si se corrige ahí, el próximo build puede pisar el cambio. La fuente real está en:

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

Era una ruta construida por JavaScript. Mientras existieran los archivos del año correspondiente, no había que inventar una redirección rara para esa URL incompleta.

La ruta `/cdn-cgi/l/email-protection` pertenece a la protección de direcciones de correo de Cloudflare, así que no se resolvía editando Markdown o plantillas de Hugo.

Después de corregir las fuentes correspondía regenerar y publicar el sitio, y pedir a Google que volviera a rastrear las URLs afectadas.
