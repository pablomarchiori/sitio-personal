---
title: "Hardening básico del sitio en Cloudflare: de F a A en SecurityHeaders"
date: 2026-03-30T10:45:00-03:00
draft: false
description: "Cómo mejoré la postura de seguridad del sitio desde Cloudflare, qué hace cada header y por qué esto va bastante más allá de tener HTTPS."
tags: ["cloudflare", "security", "headers", "https", "csp", "hsts", "hardening"]
categories: ["Site Log"]
---

**2026-04-04 — Update sobre Content Security Policy (CSP) y panel del sitio:** [agregué `connect-src` para habilitar consultas a APIs externas del panel sin romper el hardening original](#update-2026-04-04-csp-y-panel).

**2026-05-17 — Update sobre Permissions-Policy y geolocalización del panel:** [habilité `geolocation=(self)` para que el panel pueda usar la ubicación del navegador sin abrir cámara ni micrófono](#update-2026-05-17-permissions-policy-y-geolocalizacion-del-panel).

**2026-05-17 — Update sobre Content Security Policy (CSP) y traductor LinkedIn:** [agregué `connect-src` para habilitar la conexión al Cloudflare Worker del traductor sin modificar el criterio general de hardening](#update-2026-05-17-csp-y-traductor-linkedin).

---

El sitio funcionaba bien, tenía HTTPS y cargaba sin problemas. Pero al pasarlo por [SecurityHeaders](https://securityheaders.com/?q=marchiori.ar&followRedirects=on), la nota era **F**.

A simple vista parecía estar todo correcto: dominio publicado, certificado activo, candado del navegador y contenido cargando normal. Pero eso no alcanza para decir que un sitio está bien endurecido.

Una cosa es que el sitio cargue. Otra bastante distinta es que el navegador reciba instrucciones claras sobre qué puede cargar, desde dónde, con qué permisos y bajo qué restricciones.

## Qué implica una F en SecurityHeaders

Una **F** en un scanner de headers no significa automáticamente que el sitio esté comprometido ni que exista una vulnerabilidad crítica explotable.

Sí indica una postura débil de seguridad del lado del navegador.

En este caso faltaban capas básicas como:

- forzar correctamente HTTPS;
- usar HSTS;
- limitar framing;
- evitar MIME sniffing;
- restringir permisos del navegador;
- definir una política de contenido razonable.

El sitio podía funcionar bien y, al mismo tiempo, estar flojo desde el punto de vista de hardening.

## El punto de partida

El reporte marcaba faltantes claros:

- `Strict-Transport-Security`
- `Content-Security-Policy`
- `X-Frame-Options`
- `X-Content-Type-Options`
- `Referrer-Policy`
- `Permissions-Policy`

Eso no convertía al sitio en algo roto, pero sí mostraba una configuración incompleta de headers de seguridad.

## Qué se hizo

Como el sitio está detrás de **Cloudflare**, la mejora se pudo aplicar desde ahí, sin tocar Hugo ni el contenido publicado.

Los cambios fueron:

1. activar **Always Use HTTPS**;
2. configurar **HSTS**;
3. subir **Minimum TLS Version** a 1.2;
4. activar el Managed Transform **Add security headers**;
5. agregar reglas manuales para:
   - `Permissions-Policy`;
   - `Content-Security-Policy`.

## Qué hace cada ajuste

### Always Use HTTPS

Fuerza la redirección de `http://` a `https://`.

El sitio ya respondía por HTTPS, pero con esto se evita que el acceso inicial quede librado a cómo escribió la URL el usuario o a si primero entra por HTTP.

### HSTS

**HSTS (HTTP Strict Transport Security)** le indica al navegador que ese dominio debe abrirse únicamente por **HTTPS** durante un período determinado (`max-age`).

Para empezar, se configuró de forma prudente:

- **Max Age:** 1 mes;
- **includeSubDomains:** apagado;
- **Preload:** apagado.

La idea fue mejorar seguridad sin aplicar de entrada una política demasiado agresiva.

### Minimum TLS Version = 1.2

Se subió la versión mínima de TLS a **1.2**.

Eso elimina compatibilidad con versiones viejas de TLS que hoy no tiene sentido mantener.

### Managed Transform: Add security headers

Cloudflare tiene un transform administrado que agrega varios headers comunes sin armarlos uno por uno.

Sirvió para cubrir parte del hardening básico sin bajar al detalle desde el primer minuto.

### X-Frame-Options

`X-Frame-Options` ayuda a evitar que el sitio sea cargado dentro de un `frame` o `iframe` de terceros.

Su utilidad principal es mitigar escenarios de **clickjacking**, donde una página legítima puede ser embebida por otra con fines engañosos.

### X-Content-Type-Options

`X-Content-Type-Options: nosniff` le indica al navegador que no reinterprete una respuesta como si fuera de otro tipo distinto del declarado por el servidor.

Si el servidor dice que algo es una imagen, un CSS o un JavaScript, el navegador no debería intentar adivinar otra cosa por su cuenta.

### Referrer-Policy

`Referrer-Policy` controla cuánta información de la página de origen envía el navegador cuando el usuario sigue un enlace o carga un recurso hacia otro destino.

Por ejemplo: si alguien está en una URL con parámetros y desde ahí sale a otro sitio, la política puede limitar si se envía la URL completa, solo el dominio de origen o directamente nada.

No cambia cómo se ve el sitio, pero reduce información de navegación expuesta hacia afuera.

### Permissions-Policy

`Permissions-Policy` permite negar o limitar APIs del navegador como:

- cámara;
- micrófono;
- geolocalización;
- pagos;
- sensores.

En un sitio estático, muchas de esas capacidades no tienen sentido. Por eso conviene dejarlas explícitamente deshabilitadas, salvo cuando una página concreta las necesite.

### Content-Security-Policy

La **Content Security Policy (CSP)** define qué recursos puede cargar el navegador y desde dónde: scripts, estilos, imágenes, fuentes, conexiones, frames, etc.

Es una de las capas más potentes para endurecer un sitio web, pero también una de las más fáciles de romper si se configura sin mirar qué necesita realmente la página.

La política aplicada fue prudente, no máxima. La prioridad fue mejorar seguridad sin bloquear recursos legítimos del sitio.

Cuando algo se rompe por CSP, la consola del navegador suele marcarlo con mensajes del tipo `Refused to load...` o `Refused to connect...`. Ahí aparece el origen bloqueado y la directiva que lo rechazó.

Esa fue la parte útil del proceso: no ajustar a ciegas, sino mirar qué bloquea el navegador y autorizar únicamente lo necesario.

## El resultado

Después de aplicar esos cambios, el sitio pasó de **F** a **A** en SecurityHeaders.

No cambió el contenido. No cambió el diseño. No cambió Hugo.

Cambió la respuesta HTTP y la forma en que el navegador queda limitado al cargar el sitio.

## La advertencia que quedó

El reporte quedó en **A**, pero con una advertencia.

La CSP actual es prudente. No busca ser la más estricta posible. Para endurecerla más habría que revisar scripts inline, hashes, nonces y dependencias externas con más detalle.

No quedó perfecto. Quedó bastante mejor, y el siguiente paso ya está claro.

## Si no estuviera Cloudflare

Cloudflare simplificó bastante el trabajo porque varias políticas se aplicaron en el **edge**, antes de llegar al servidor de origen.

Si el sitio estuviera publicado directamente sobre un **IIS en una vCloud**, la lógica sería la misma, pero la implementación cambiaría de lugar:

- el certificado HTTPS y su binding quedarían en IIS;
- la redirección HTTP → HTTPS se haría en IIS o en el balanceador;
- HSTS se configuraría en IIS;
- los demás headers se agregarían como custom response headers o desde un proxy inverso;
- cualquier ajuste fino de CSP dependería más de cómo esté armada la aplicación.

No cambia la necesidad. Cambia dónde se resuelve.

Con Cloudflare fue más rápido y limpio. Sin Cloudflare se puede hacer igual, pero con más trabajo sobre el servidor, el hosting y, muchas veces, la propia aplicación.

## Infraestructura, desarrollo y especialización

En el mismo día uno puede pasar de asistir a un usuario con un cambio de contraseña a hacer hardening sobre un sitio web. Sin transición.

Cada vez se agregan más capas técnicas, pero la operación diaria no siempre separa soporte básico, infraestructura, seguridad web y desarrollo con tanta prolijidad como los organigramas.

## El rol de la IA

Sin asistencia de IA, este proceso habría sido más largo y más tedioso.

No porque la IA reemplace la validación real, sino porque ayudó a ordenar el recorrido inicial: qué headers mirar primero, en qué secuencia probarlos y cómo llegar a una CSP razonable sin perder horas entre documentación dispersa.

Después hubo que revisar, probar y validar igual. Como punto de partida para no perder horas entre documentación dispersa, funcionó bien.

También dejó algo práctico: una vez recorrido el proceso, documentarlo resulta mucho más claro que intentar armar todo desde cero.

---

## Update 2026-04-04: CSP y panel del sitio {#update-2026-04-04-csp-y-panel}

Después de publicar una página tipo panel para usar en una tablet vieja, apareció un detalle que no era visible en local pero sí en producción.

El panel cargaba bien en `localhost`, pero al publicarlo en el dominio no podía consultar el clima ni los feriados desde APIs externas. La causa era la **Content Security Policy (CSP)** definida en Cloudflare como parte del hardening del sitio.

La política original permitía conexiones solo al propio sitio y a Cloudflare Insights:

```text
connect-src 'self' https://cloudflareinsights.com;
```

Eso bloqueaba las consultas del panel hacia:

```text
https://api.open-meteo.com
https://api.argentinadatos.com
```

La directiva quedó ampliada así:

```text
connect-src 'self' https://cloudflareinsights.com https://api.open-meteo.com https://api.argentinadatos.com;
```

La CSP completa quedó en esta forma:

```text
default-src 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline' https:; script-src 'self' 'unsafe-inline' https://static.cloudflareinsights.com; font-src 'self' data: https:; connect-src 'self' https://cloudflareinsights.com https://api.open-meteo.com https://api.argentinadatos.com; object-src 'none'; base-uri 'self'; frame-ancestors 'self'; form-action 'self'; upgrade-insecure-requests
```

No fue una relajación general de seguridad. Fue un ajuste puntual para que el panel pudiera consultar solo las APIs externas que realmente necesitaba.

## Update 2026-05-17: Permissions-Policy y geolocalización del panel {#update-2026-05-17-permissions-policy-y-geolocalizacion-del-panel}

Al agregar ubicación automática al panel, hizo falta ajustar `Permissions-Policy`.

El panel necesitaba usar la geolocalización del navegador para obtener la ubicación del dispositivo y consultar el clima correspondiente. La política anterior bloqueaba esa API:

```text
Permissions-Policy: geolocation=(), camera=(), microphone=()
```

La corrección fue habilitar geolocalización solo para el propio sitio y mantener bloqueados cámara y micrófono:

```text
Permissions-Policy: geolocation=(self), camera=(), microphone=()
```

El cambio fue puntual: permitir que el panel use ubicación del navegador, sin abrir permisos innecesarios para otras funciones.

## Update 2026-05-17: CSP y traductor LinkedIn {#update-2026-05-17-csp-y-traductor-linkedin}

Al publicar el traductor LinkedIn, la página no podía conectarse con el Cloudflare Worker desde producción.

La corrección fue agregar el endpoint del Worker en `connect-src`:

```text
https://traductor-linkedin.mnerd.workers.dev
```

La directiva quedó ampliada así:

```text
connect-src 'self' https://cloudflareinsights.com https://api.open-meteo.com https://api.argentinadatos.com https://traductor-linkedin.mnerd.workers.dev;
```

Motivo: permitir que la página del traductor consulte únicamente el Worker necesario, sin cambiar el criterio general de hardening.
