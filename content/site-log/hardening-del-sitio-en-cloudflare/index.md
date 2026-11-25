---
title: "Hardening básico del sitio en Cloudflare: de F a A en SecurityHeaders"
date: 2026-03-30T10:45:00-03:00
draft: false
description: "Cómo mejoré la postura de seguridad del sitio desde Cloudflare, qué hace cada header y por qué esto va bastante más allá de tener HTTPS."
tags: ["cloudflare", "security", "headers", "https", "csp", "hsts", "hardening"]
categories: ["Site Log"]
featureAlt: "Logotipo de Cloudflare iluminado sobre un fondo de circuitos electrónicos."
---

*Texto original: 30/03/2026. Actualización: 23/11/2026 (revisión editorial y estructura).*

**2026-04-04 - Update sobre Content Security Policy (CSP) y panel del sitio:** [agregué `connect-src` para habilitar consultas a APIs externas del panel](#update-2026-04-04-csp-y-panel).

**2026-05-17 - Update sobre Permissions-Policy y geolocalización del panel:** [habilité `geolocation=(self)` para que el panel pueda usar la ubicación del navegador](#update-2026-05-17-permissions-policy-y-geolocalizacion-del-panel).

**2026-05-17 - Update sobre Content Security Policy (CSP) y traductor LinkedIn:** [agregué el Cloudflare Worker del traductor a `connect-src`](#update-2026-05-17-csp-y-traductor-linkedin).

**2026-10-05 - Update sobre CSP y videos de YouTube:** [agregué `frame-src` para permitir los videos embebidos de YouTube](#update-2026-10-05-csp-y-youtube).

---

Al revisar el sitio en [SecurityHeaders](https://securityheaders.com/?q=marchiori.ar&followRedirects=on) obtuvo una calificación **F**, aunque cargaba correctamente y ya tenía certificado HTTPS. Faltaban varias cabeceras de seguridad que permiten limitar qué puede hacer el navegador con los recursos de la página.

## El “hardening”

**Hardening** es ajustar la configuración de un sistema para reducir exposición y limitar comportamientos inseguros por defecto. En esta prueba trabajé sobre las cabeceras HTTP, sin cambiar el contenido de Hugo.

## Qué mostraba el análisis

La calificación **F** no demostraba una intrusión ni una vulnerabilidad crítica por sí sola; en este caso señalaba que faltaban estas cabeceras:

- `Strict-Transport-Security`
- `Content-Security-Policy`
- `X-Frame-Options`
- `X-Content-Type-Options`
- `Referrer-Policy`
- `Permissions-Policy`



## Qué se hizo

Como el sitio está detrás de **Cloudflare**, buena parte del trabajo se pudo aplicar desde ahí, sin tocar Hugo ni el contenido publicado.

Se activó **Always Use HTTPS**, se configuró **HSTS**, se subió la versión mínima de TLS a **1.2**, se habilitó el Managed Transform **Add security headers** y se agregaron reglas manuales para `Permissions-Policy` y `Content-Security-Policy`.

### Always Use HTTPS

Fuerza la redirección de `http://` a `https://`.

### HSTS

**HSTS (HTTP Strict Transport Security)** le indica al navegador que ese dominio debe abrirse únicamente por **HTTPS** durante un período determinado (`max-age`).

Para empezar lo configuré de forma prudente:

- **Max Age:** 1 mes
- **includeSubDomains:** apagado
- **Preload:** apagado

Preferí comenzar con un alcance acotado y comprobar el resultado antes de extenderlo.

### Minimum TLS Version = 1.2

Se subió la versión mínima de TLS a **1.2**, descartando versiones viejas del protocolo que ya no tenía sentido mantener habilitadas.

### `X-Frame-Options`

Ayuda a evitar que el sitio sea cargado dentro de un `frame` o `iframe` de terceros.

Su utilidad principal es mitigar escenarios de **clickjacking**, donde una página legítima puede ser embebida por otra con fines engañosos.

### `X-Content-Type-Options: nosniff`

Le indica al navegador que no reinterprete un archivo o una respuesta como si fuera de otro tipo distinto del declarado por el servidor.

Por ejemplo: si el servidor dice “esto es una imagen” o “esto es un archivo CSS”, el navegador debe tratarlo como eso y no intentar adivinar otra cosa por su cuenta.

Sirve para reducir riesgos asociados a contenido mal servido o mal identificado.

### `Referrer-Policy`

Controla cuánta información de la página de origen envía el navegador cuando el usuario sigue un enlace o carga un recurso hacia otro destino.

Por ejemplo: si alguien está en `https://marchiori.ar/notas/algo/?origen=linkedin` y desde ahí sale a otro sitio, según la política configurada el navegador puede enviar la URL completa, solo el dominio de origen o directamente no enviar nada.

No cambia cómo se ve el sitio, pero sí permite limitar qué información de navegación se expone hacia afuera.

### `Permissions-Policy`

Permite limitar APIs del navegador como cámara, micrófono, geolocalización, pagos o sensores.

En un sitio como este muchas de esas capacidades no hacen falta, así que tiene sentido bloquearlas salvo cuando una página concreta las necesite.

### `Content-Security-Policy`

La **Content Security Policy (CSP)** define qué recursos puede cargar el navegador y desde dónde: scripts, estilos, imágenes, fuentes, conexiones, frames, etc.

Es una de las capas más interesantes porque una política demasiado abierta aporta poco, pero una demasiado cerrada puede bloquear recursos legítimos.

Configuré una política que limitara los orígenes externos sin impedir el funcionamiento normal del sitio. Cuando CSP bloquea un recurso, la consola del navegador suele indicar el origen y la directiva responsable mediante mensajes como `Refused to load...` o `Refused to connect...`. Esa evidencia resulta más útil que ir agregando permisos sin saber qué se está habilitando; la política no “va a salir a bailar” por insistencia.

## El resultado

Después de aplicar los cambios, el sitio pasó de **F** a **A** en SecurityHeaders.

El cambio estuvo en las cabeceras HTTP, sin modificar el diseño ni las páginas de Hugo. Quedó pendiente endurecer algunas excepciones de CSP, pero prioricé una configuración estable antes de restringirlas más.

## Si no estuviera Cloudflare

Cloudflare permitió aplicar estas políticas desde el **edge**, la capa que recibe las solicitudes antes del origen.

Si el sitio estuviera publicado directamente sobre un **IIS en una vCloud**, la lógica sería la misma pero la implementación cambiaría de lugar. El certificado HTTPS y su binding quedarían en IIS, la redirección HTTP → HTTPS se haría en IIS o en el balanceador, HSTS se configuraría allí y el resto de los headers podría agregarse como custom response headers o desde un proxy inverso.



## Infraestructura, desarrollo y especialización

En infraestructura se puede pasar de un cambio de contraseña a ajustar una CSP casi sin transición. Estas reglas también cruzan el trabajo de desarrollo: scripts, iframes, APIs externas y permisos del navegador condicionan qué puede ejecutar una página, por lo que cada excepción exige revisar cómo está hecha la aplicación.

## El rol de la IA

Usé IA para orientar la búsqueda de cabeceras y ordenar el trabajo. Los cambios concretos y su resultado los revisé después en Cloudflare, la consola del navegador y SecurityHeaders.

---

## Update 2026-04-04: CSP y panel del sitio {#update-2026-04-04-csp-y-panel}

Después de publicar una página tipo panel para usar en una tablet vieja, apareció un detalle que no era visible en local pero sí en producción.

El panel cargaba bien en `localhost`, pero publicado en el dominio no podía consultar el clima ni los feriados desde APIs externas. La causa era la **Content Security Policy (CSP)**.

La política original permitía conexiones solo al propio sitio y a Cloudflare Insights:

```text
connect-src 'self' https://cloudflareinsights.com;
```

El panel necesitaba además:

```text
https://api.open-meteo.com
https://api.argentinadatos.com
```

La directiva quedó:

```text
connect-src 'self' https://cloudflareinsights.com https://api.open-meteo.com https://api.argentinadatos.com;
```

No fue una apertura general de la política. Se habilitaron solamente los dos servicios que el panel necesitaba.

## Update 2026-05-17: Permissions-Policy y geolocalización del panel {#update-2026-05-17-permissions-policy-y-geolocalizacion-del-panel}

Al agregar ubicación automática al panel hizo falta ajustar `Permissions-Policy`.

La política anterior bloqueaba la geolocalización:

```text
Permissions-Policy: geolocation=(), camera=(), microphone=()
```

Se habilitó solamente para el propio sitio:

```text
Permissions-Policy: geolocation=(self), camera=(), microphone=()
```

El panel pudo usar la ubicación del navegador sin abrir cámara ni micrófono.

## Update 2026-05-17: CSP y traductor LinkedIn {#update-2026-05-17-csp-y-traductor-linkedin}

Al publicar el traductor LinkedIn, la página no podía conectarse con el Cloudflare Worker desde producción.

La corrección fue agregar su endpoint a `connect-src`:

```text
https://traductor-linkedin.mnerd.workers.dev
```

La directiva quedó ampliada así:

```text
connect-src 'self' https://cloudflareinsights.com https://api.open-meteo.com https://api.argentinadatos.com https://traductor-linkedin.mnerd.workers.dev;
```

Otra vez, el criterio fue habilitar únicamente el destino que la aplicación realmente necesitaba.

## Update 2026-10-05: CSP y YouTube {#update-2026-10-05-csp-y-youtube}

Al agregar videos de YouTube a la nota [Quinto y la Estudiantina del 94](https://www.marchiori.ar/notas/quinto-y-la-estudiantina-del-94/), los espacios de los videos aparecían bloqueados con el mensaje:

> Este contenido está bloqueado. Contacte con el dueño del sitio para arreglar el problema.

Los videos estaban insertados con el shortcode normal de Hugo:

```markdown
{{< youtube aTvlA5gdpDY >}}
```

Ese shortcode termina generando un `iframe`. La CSP permitía recursos propios por defecto, pero no tenía definida una política específica para frames externos.

No había que tocar los videos ni el Markdown. Había que decirle a la CSP que YouTube era un origen permitido para `frame-src`.

Se agregó:

```text
frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com;
```

La política completa quedó:

```text
default-src 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline' https:; script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com; font-src 'self' data: https:; connect-src 'self' https://cloudflareinsights.com https://api.open-meteo.com https://geocoding-api.open-meteo.com https://api.argentinadatos.com https://traductor-linkedin.mnerd.workers.dev; frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com; object-src 'none'; base-uri 'self'; frame-ancestors 'self'; form-action 'self'; upgrade-insecure-requests
```

La CSP estaba aplicando la restricción configurada: al agregar solo los dos orígenes necesarios para los videos, los `iframe` pudieron cargarse sin abrir `frame-src` a cualquier destino.
