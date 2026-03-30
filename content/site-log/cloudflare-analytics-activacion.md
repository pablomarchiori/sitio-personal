---
title: "Cloudflare Analytics: activación y diagnóstico"
date: 2026-03-30T09:15:00-03:00
draft: false
description: "Cómo activé Cloudflare Web Analytics en el sitio."
tags: ["cloudflare", "analytics", "dns", "github pages", "site log"]
---

Quería sumar una métrica básica al sitio, sin meterle cosas raras ni llenar todo de scripts.  
La idea era simple: **activar Cloudflare Web Analytics** y listo.

En teoría, no parecía haber mucho misterio. El DNS ya estaba funcionando, el sitio respondía bien y todo daba la impresión de estar en orden. Así que fui a Cloudflare, agregué el dominio para analytics y esperé ver aparecer tráfico.

No apareció nada.

## A arremangarse y buscar

Abrí las herramientas del navegador y revisé la pestaña **Network**.  
Esperaba encontrar alguna referencia al beacon de Cloudflare, algo como `beacon`, `cloudflareinsights` o una llamada a `/cdn-cgi/rum`.

Lo único que cargaba era lo normal del sitio:

- `appearance.min.js`
- `main.bundle.min.css`
- `custom.css`
- imágenes y manifiesto

O sea: el sitio estaba cargando bien, pero **Cloudflare Analytics no se estaba inyectando en absoluto**.

## El primer falso sospechoso

En un momento pensé que el problema podía ser el hostname.

Yo había activado analytics para `marchiori.ar`, pero el sitio real entra por `www.marchiori.ar`.  
La duda era lógica: quizá había que dar de alta también el `www`.

Pero eso no terminaba de cerrar, porque Cloudflare maneja la activación automática a nivel de zona cuando el tráfico pasa por su proxy. Así que, si todo hubiera estado bien encaminado, `www` no debería haber sido el problema principal. En ese punto ya empezaba a dar la impresión de que el problema estaba en otro lado.

## La prueba que mostró el problema real

Después vino la verificación más útil de todas:

```powershell
curl.exe -I https://www.marchiori.ar

```

La respuesta devolvía encabezados como estos:

* `Server: GitHub.com`
* `Via: 1.1 varnish`
* `X-Fastly-Request-ID`

Eso ya dejaba bastante claro que la respuesta **venía directa desde GitHub Pages/Fastly**, no desde el proxy de Cloudflare.

Y cuando fui a mirar el panel DNS, apareció la confirmación definitiva:
los registros web estaban en **DNS only**, no en **Proxied**.

Ahí estaba el problema de verdad.

## Qué estaba mal

Yo tenía configurados correctamente los registros para que el dominio resolviera y el sitio funcionara, pero **no estaba pasando el tráfico web por Cloudflare**.

Eso significa que:

* el sitio abría;
* el dominio resolvía bien;
* GitHub Pages entregaba el contenido;
* pero **Cloudflare no estaba en el medio** para inyectar automáticamente el analytics.

En otras palabras: el sitio funcionaba, pero lo hacía **por afuera** de la parte de Cloudflare que necesitaba usar.

## La corrección

La solución fue simple una vez detectada la causa:

* pasar los registros **A** de `marchiori.ar` a **Proxied**;
* pasar los registros **AAAA** de `marchiori.ar` a **Proxied**;
* pasar el **CNAME** de `www` a **Proxied**;
* dejar sin tocar los **MX** y **TXT**, porque esos no van por proxy.

Después de eso, el tráfico web sí empezó a pasar por Cloudflare, que es justamente lo necesario para que la instalación automática de Web Analytics funcione como corresponde. Cloudflare lo documenta así: el modo automático aplica a tráfico web proxied, mientras que para sitios no proxied hay que usar instalación manual con JS snippet.

## Conclusión

Al final, el problema no era Hugo, no era GitHub Pages, no era el `www`, ni era un bug raro de Cloudflare.

Era algo más básico:

**había activado analytics, pero el sitio todavía no estaba realmente pasando por Cloudflare.**

Una vez corregido eso, recién tenía sentido esperar que aparecieran métricas.

Otra pequeña confirmación de algo bastante clásico en sistemas: muchas veces el problema no está en lo que uno acaba de tocar, sino en una capa anterior que parecía resuelta.
