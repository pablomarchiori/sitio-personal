---
title: "Hardening básico del sitio en Cloudflare: de F a A en SecurityHeaders"
date: 2026-03-30T10:45:00-03:00
draft: false
description: "Cómo mejoré la postura de seguridad del sitio desde Cloudflare, qué hace cada header y por qué esto va bastante más allá de tener HTTPS."
tags: ["cloudflare", "security", "headers", "https", "csp", "hsts", "hardening"]
categories: ["Site Log"]
---

**2026-04-04 — Update sobre Content Security Policy (CSP) y panel del sitio:** [agregué `connect-src` para habilitar consultas a APIs externas del panel](#update-2026-04-04-csp-y-panel).

**2026-05-17 — Update sobre Permissions-Policy y geolocalización del panel:** [habilité `geolocation=(self)` para que el panel pueda usar la ubicación del navegador](#update-2026-05-17-permissions-policy-y-geolocalizacion-del-panel).

**2026-05-17 — Update sobre Content Security Policy (CSP) y traductor LinkedIn:** [agregué el Cloudflare Worker del traductor a `connect-src`](#update-2026-05-17-csp-y-traductor-linkedin).

**2026-10-05 — Update sobre CSP y videos de YouTube:** [agregué `frame-src` para permitir los videos embebidos de YouTube](#update-2026-10-05-csp-y-youtube).

---

El sitio funcionaba bien, tenía HTTPS y cargaba sin problemas. Pero al pasarlo por [SecurityHeaders](https://securityheaders.com/?q=marchiori.ar&followRedirects=on), la nota era **F**.

A simple vista parecía estar todo correcto: dominio publicado, certificado activo, candado del navegador y contenido cargando normal. Pero hoy eso ya no alcanza. Además del certificado, se esperan otras capas de protección, y en este caso la **postura de seguridad del lado del navegador** todavía era débil.

En otras palabras: una cosa es que el sitio cargue, y otra bastante distinta es que tenga una configuración de seguridad sólida.

## El “hardening”

**Hardening** es **mejorar la seguridad técnica de un sistema** para reducir su superficie de ataque, limitar comportamientos inseguros por defecto y agregar capas de protección que disminuyan riesgos ante errores, abusos o ataques.

Dicho más simple: no se trata solo de que algo funcione, sino de que funcione con menos exposición innecesaria.

## Qué mostraba el análisis

Una **F** en un scanner de headers no significa automáticamente que el sitio esté comprometido ni que exista una vulnerabilidad crítica explotable.

En este caso indicaba que faltaban varias capas de protección del lado del navegador:

- `Strict-Transport-Security`
- `Content-Security-Policy`
- `X-Frame-Options`
- `X-Content-Type-Options`
- `Referrer-Policy`
- `Permissions-Policy`

El sitio podía funcionar normalmente y, al mismo tiempo, tener margen para mejorar su configuración de seguridad.

## Qué se hizo

Como el sitio está detrás de **Cloudflare**, buena parte del trabajo se pudo aplicar desde ahí, sin tocar Hugo ni el contenido publicado.

Se activó **Always Use HTTPS**, se configuró **HSTS**, se subió la versión mínima de TLS a **1.2**, se habilitó el Managed Transform **Add security headers** y se agregaron reglas manuales para `Permissions-Policy` y `Content-Security-Policy`.

### Always Use HTTPS

Fuerza la redirección de `http://` a `https://`.

El sitio ya respondía por HTTPS, pero con esto el acceso por HTTP deja de depender de cómo haya escrito la URL el usuario.

### HSTS

**HSTS (HTTP Strict Transport Security)** le indica al navegador que ese dominio debe abrirse únicamente por **HTTPS** durante un período determinado (`max-age`).

Para empezar lo configuré de forma prudente:

- **Max Age:** 1 mes
- **includeSubDomains:** apagado
- **Preload:** apagado

La idea fue sumar la protección sin aplicar de entrada una política demasiado agresiva.

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

La configuración que usé fue prudente. La intención era mejorar seguridad sin romper el sitio.

Cuando la CSP bloquea algo, la consola del navegador suele decir exactamente qué ocurrió con mensajes como `Refused to load...`, `Refused to connect...` o similares. Ahí aparece el origen bloqueado y la directiva responsable.

La parte más útil de este ajuste no fue improvisar hasta que algo funcionara, sino entender qué herramientas usar y qué mirar en cada capa. En seguridad web, avanzar a ciegas no sirve: una política no “va a salir a bailar” por más que uno le insista. Hace falta criterio, validación y señales concretas para ajustar cada cosa donde corresponde.

## El resultado

Después de aplicar los cambios, el sitio pasó de **F** a **A** en SecurityHeaders.

No cambió el contenido, el diseño ni Hugo. Cambió la respuesta HTTP y el conjunto de reglas que recibe el navegador al cargar el sitio.

Quedó una advertencia relacionada con la CSP actual, que todavía permite algunos comportamientos que podrían restringirse más adelante. No busqué llevarla al máximo desde el primer día: primero preferí una configuración estable y razonable, y dejar el ajuste fino para cuando aparezca una necesidad concreta.

## Si no estuviera Cloudflare

Cloudflare simplificó bastante el trabajo porque varias políticas se pudieron aplicar en el **edge de Cloudflare**, o sea, en la capa intermedia desde la que Cloudflare publica y protege el sitio antes de llegar al servidor de origen.

Si el sitio estuviera publicado directamente sobre un **IIS en una vCloud**, la lógica sería la misma pero la implementación cambiaría de lugar. El certificado HTTPS y su binding quedarían en IIS, la redirección HTTP → HTTPS se haría en IIS o en el balanceador, HSTS se configuraría allí y el resto de los headers podría agregarse como custom response headers o desde un proxy inverso.

No cambia la necesidad. Cambia dónde se resuelve.

## Infraestructura, desarrollo y especialización

En el mismo día uno puede pasar de asistir a un usuario con un cambio de contraseña a trabajar sobre la seguridad de publicación de un sitio web. Sin demasiada transición.

Aunque buena parte de esta configuración corresponde a infraestructura, mantener un sitio seguro necesita trabajo conjunto con desarrollo. CSP, scripts inline, APIs externas, iframes, dependencias y permisos del navegador terminan cruzando las dos áreas.

La cantidad de capas que hoy intervienen exige cada vez más especialización, aunque la realidad operativa muchas veces siga obligando a saltar de una tarea básica a otra bastante más específica.

## El rol de la IA

Sin asistencia de IA, este proceso habría sido más largo y más tedioso.

No porque la IA reemplace la validación real ni las pruebas, sino porque me ayudó a identificar qué headers convenía mirar primero, a ordenar mejor la secuencia de implementación, a llegar más rápido a una CSP razonable y a no perder horas entre documentación dispersa o pruebas mal enfocadas.

Después hubo que revisar, probar y validar igual.

También dejó algo práctico: una vez recorrido todo el proceso, la publicación de referencia se vuelve mucho más clara y documentarlo resulta bastante más rápido que intentar reconstruir manualmente cada decisión después.

Más allá del resultado puntual, lo más valioso fue el aprendizaje: meterse de lleno en un aspecto de seguridad web que muchas veces se deja para después, cuando en realidad forma parte de una publicación seria.

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

Este caso terminó siendo un buen ejemplo práctico de cómo funciona CSP. La política no estaba fallando: estaba haciendo exactamente lo que se le había pedido, bloquear un origen que todavía no estaba autorizado.

La solución tampoco fue abrir los frames para cualquiera, sino agregar solamente los dos orígenes de YouTube que podían necesitar los embeds.
