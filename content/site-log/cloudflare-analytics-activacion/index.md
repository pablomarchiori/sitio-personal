---
title: "Cloudflare Analytics: activación y diagnóstico"
date: 2026-03-30T09:15:00-03:00
draft: false
description: "Cómo activé Cloudflare Web Analytics en el sitio."
tags: ["cloudflare", "analytics", "dns", "github pages", "site log"]
featureAlt: "Logotipo naranja de Cloudflare con la leyenda Cloudflare Web Analytics."
---

*Texto original: 30/03/2026. Actualización: 23/11/2026 (revisión editorial y estructura).*

Quería activar **Cloudflare Web Analytics** para tener una idea básica de las visitas al sitio, sin agregar herramientas ni scripts innecesarios. El dominio ya resolvía, la página cargaba normalmente y habilité Analytics desde Cloudflare, pero las estadísticas seguían vacías.

## A buscar en el navegador

Abrí las herramientas de desarrollo y revisé **Network**, buscando solicitudes relacionadas con `beacon`, `cloudflareinsights` o `/cdn-cgi/rum`. Solo aparecían los recursos habituales del sitio:

- `appearance.min.js`
- `main.bundle.min.css`
- `custom.css`
- imágenes y manifiesto

No se estaba cargando el componente de Analytics.

## El primer sospechoso

Había habilitado las estadísticas para `marchiori.ar`, mientras que el sitio usa `www.marchiori.ar`. Pensé que podía faltar dar de alta `www`, aunque la inyección automática de Cloudflare depende principalmente de que el tráfico pase por su proxy. Había que comprobar por dónde estaba entrando la respuesta.

## La prueba

Consulté las cabeceras HTTP:

```powershell
curl.exe -I https://www.marchiori.ar
```

La respuesta incluía:

- `Server: GitHub.com`
- `Via: 1.1 varnish`
- `X-Fastly-Request-ID`

El sitio se estaba sirviendo directamente desde **GitHub Pages/Fastly**. En Cloudflare confirmé que los registros web estaban en **DNS only** y no en **Proxied**. La resolución DNS funcionaba, pero Cloudflare no estaba intermediando el tráfico web y, por lo tanto, no podía insertar automáticamente su Analytics.

## El cambio en DNS

Pasé a **Proxied** los registros web de la zona:

- los **A** de `marchiori.ar`;
- los **AAAA** de `marchiori.ar`;
- el **CNAME** de `www`.

No modifiqué los **MX** ni los **TXT**, porque el correo no pasa por ese proxy. Después de ese ajuste, las solicitudes web sí atravesaron Cloudflare y la instalación automática de Analytics pudo empezar a funcionar. Para los sitios que no pasan por el proxy, Cloudflare ofrece la alternativa de instalar manualmente el fragmento de JavaScript.
