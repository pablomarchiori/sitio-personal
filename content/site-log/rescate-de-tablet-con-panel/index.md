---
title: "Ajustes del sitio para sumar un panel fijo"
date: 2026-04-04T18:30:00-03:00
draft: false
description: "Cambios en Hugo, Cloudflare y el panel público del sitio para reutilizar una tablet vieja como pantalla fija."
tags: ["hugo", "cloudflare", "csp", "dashboard", "panel", "site log"]
---

*Texto original: 04/04/2026. Actualización: 23/11/2026 (revisión editorial y estructura).*

El rescate de la tablet está contado en [Labs](/labs/panel-tablet-vieja/). Esta entrada registra los cambios hechos en Hugo y Cloudflare para que pudiera mostrar un panel propio: una ruta pública en `/panel/`, un layout independiente, consultas a APIs y permisos específicos en la política de seguridad.

## Nueva página `/panel/`

Agregué una página específica para usar como panel fijo:

[**`/panel/`**](https://www.marchiori.ar/panel/)

Quedó separada de las notas, sin navegación ni elementos pensados para leer artículos, porque necesitaba funcionar como pantalla de consulta rápida.

El panel muestra:

- hora
- fecha
- clima de Marcos Juárez
- calendario mensual
- feriados del mes

La página puede quedar abierta en una tablet vieja o cualquier otra pantalla secundaria.

## Layout propio en Hugo

Armé un layout propio con HTML, estilos embebidos y JavaScript para no cargar toda la estructura visual del sitio. Con una tablet antigua, limitar las dependencias también reduce los problemas de compatibilidad con el navegador, las librerías y los certificados.

## Ajuste de CSP en Cloudflare

El panel funcionaba bien en local, pero al publicarlo en producción no podía consultar los datos externos que usa para clima y feriados.

La **Content Security Policy (CSP)** de Cloudflare permitía conexiones al propio sitio y a Cloudflare Insights, pero bloqueaba los dos servicios externos que consultaba el panel.

La directiva original de `connect-src` era:

```text
connect-src 'self' https://cloudflareinsights.com;
```

Para que el panel pudiera consultar clima y feriados, agregué los dominios necesarios:

```text
connect-src 'self' https://cloudflareinsights.com https://api.open-meteo.com https://api.argentinadatos.com;
```

Más adelante, al sumar la opción Otra para buscar cualquier ciudad, también hizo falta permitir el endpoint de geocoding de Open-Meteo. Las ciudades predefinidas usan coordenadas ya cargadas en el JavaScript, pero la búsqueda libre necesita convertir el nombre de una ciudad en latitud y longitud.

Al incorporar la búsqueda de ciudades, la directiva quedó así:
```text
connect-src 'self' https://cloudflareinsights.com https://api.open-meteo.com https://api.argentinadatos.com https://geocoding-api.open-meteo.com;
```
En aquella etapa, la CSP completa tenía esta forma:

```text
default-src 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline' https:; script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com; font-src 'self' data: https:; connect-src 'self' https://cloudflareinsights.com https://api.open-meteo.com https://api.argentinadatos.com https://geocoding-api.open-meteo.com; object-src 'none'; base-uri 'self'; frame-ancestors 'self'; form-action 'self'; upgrade-insecure-requests
```
La excepción se limitó a los destinos usados por el panel; el resto de la política seguía cerrado.

<small>Actualizado el 2026-05-17: se agregó https://geocoding-api.open-meteo.com a connect-src para habilitar la búsqueda libre de ciudad desde el panel.</small>


## Pantalla completa

También agregué un comportamiento simple para usar el panel como pseudo-kiosco.

Al tocar la pantalla una vez, el navegador intenta pasar el documento a pantalla completa. El script queda limitado al primer toque para evitar que vuelva a pedir fullscreen en cada interacción.

```html
<script>
var fullscreenRequested = false;

function requestFullscreenOnce() {
    if (fullscreenRequested) {
        return;
    }

    var doc = window.document;
    var docEl = doc.documentElement;
    var requestFullScreen =
        docEl.requestFullscreen ||
        docEl.mozRequestFullScreen ||
        docEl.webkitRequestFullScreen ||
        docEl.msRequestFullscreen;

    if (requestFullScreen) {
        fullscreenRequested = true;
        requestFullScreen.call(docEl);
    }
}

document.addEventListener("click", requestFullscreenOnce);
document.addEventListener("touchstart", requestFullscreenOnce);
</script>
```

En Firefox sobre la tablet vieja funcionó bien. No lo tomo como una solución universal, pero para este caso alcanzó.
