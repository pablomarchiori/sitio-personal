---
title: "Ajustes del sitio para sumar un panel fijo"
date: 2026-04-04T18:30:00-03:00
draft: false
description: "Cambios en Hugo, Cloudflare y el panel público del sitio para reutilizar una tablet vieja como pantalla fija."
tags: ["hugo", "cloudflare", "csp", "dashboard", "panel", "site log"]
---

La historia completa del rescate de la tablet quedó en Labs: [Rescate de una tablet vieja como panel fijo](/labs/panel-tablet-vieja/). Acá dejo registrado qué cambios hice en el sitio para que ese experimento funcionara: una página pública en `/panel/`, un layout propio en Hugo, consultas a APIs externas y un ajuste puntual en la política de seguridad del sitio.

## Nueva página `/panel/`

Agregué una página específica para usar como panel fijo:

[**`/panel/`**](https://www.marchiori.ar/panel/)

La idea fue mantenerla separada del resto del sitio. No usa la estructura normal de notas, ni navegación, ni elementos visuales pensados para lectura. Es una pantalla de consulta rápida.

El panel muestra:

- hora
- fecha
- clima de Marcos Juárez
- calendario mensual
- feriados del mes

La página está pensada para quedar abierta en una pantalla secundaria, una tablet vieja o cualquier dispositivo que pueda funcionar como terminal fija.

## Layout propio en Hugo

Para no depender del diseño general del sitio, armé un layout específico para el panel.

La página quedó publicada con una ruta simple (`/panel/`) y un HTML más directo, con estilos embebidos y JavaScript propio. La prioridad no era hacer una página elegante, sino una pantalla estable, legible y liviana.

Ese criterio también ayuda con dispositivos viejos. Cuantas menos dependencias externas, menos chances de que algo falle por navegador, certificados, librerías o compatibilidad.

## Ajuste de CSP en Cloudflare

El panel funcionaba bien en local, pero al publicarlo en producción no podía consultar los datos externos que usa para clima y feriados.

El problema no estaba en Hugo ni en el JavaScript. Era la política de seguridad del sitio.

La Content Security Policy que tenía configurada en Cloudflare permitía conexiones al propio sitio y a Cloudflare Insights, pero no a las APIs públicas que necesitaba el panel (`api.open-meteo.com` y `api.argentinadatos.com`).

La directiva original de `connect-src` era:

```text
connect-src 'self' https://cloudflareinsights.com;
```

Para que el panel pudiera consultar clima y feriados, agregué los dos dominios necesarios:

```text
connect-src 'self' https://cloudflareinsights.com https://api.open-meteo.com https://api.argentinadatos.com;
```

La CSP completa quedó así:

```text
default-src 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline' https:; script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com; font-src 'self' data: https:; connect-src 'self' https://cloudflareinsights.com https://api.open-meteo.com https://api.argentinadatos.com; object-src 'none'; base-uri 'self'; frame-ancestors 'self'; form-action 'self'; upgrade-insecure-requests
```

No fue una relajación general del hardening. Fue un permiso puntual para que esa página pueda conectarse solo a los endpoints que necesita.

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

## Resultado

El sitio ahora tiene una página específica para panel fijo, separada del flujo normal de notas y con permisos CSP ajustados para consultar las APIs necesarias.

La parte más experimental y de rescate del hardware quedó en Labs. Esta entrada queda como registro del cambio técnico aplicado al sitio.

Por ahora, el panel vive en `/panel/` y la historia completa de la tablet queda donde corresponde: [Labs](/labs/panel-tablet-vieja/).
