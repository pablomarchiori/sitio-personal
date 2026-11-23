---
title: "Dominio propio, DNS y alguna pelea con los redirects"
date: 2026-03-28T17:00:00-03:00
draft: false
description: "Cómo agregué el dominio propio al sitio, qué DNS usé y dónde apareció la limitación con el dominio alternativo."
tags: ["github-pages", "dns", "dominio", "hanami", "cloudflare"]
categories: ["Notas"]
---

*Texto original: 28/03/2026. Actualización: 23/11/2026 (revisión editorial y estructura).*

El 28 de marzo configuré los dominios del sitio en **GitHub Pages**. Quería usar `www.marchiori.ar` como dirección principal, aceptar también `marchiori.ar` y redirigir las variantes de `marchiori.com.ar`, sin tocar el correo que ya funcionaba en ambos dominios.

## El dominio principal en GitHub Pages

Elegí `www.marchiori.ar` como dominio canónico. En el repositorio entré en `Settings -> Pages -> Custom domain`, cargué esa dirección y dejé que GitHub verificara los DNS y preparara el certificado.

Para el dominio raíz `marchiori.ar` agregué cuatro registros **A**:

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

Y cuatro registros **AAAA**:

- `2606:50c0:8000::153`
- `2606:50c0:8001::153`
- `2606:50c0:8002::153`
- `2606:50c0:8003::153`

Para el subdominio `www` utilicé:

`CNAME www -> pablomarchiori.github.io`

El sitio empezó a responder antes de que terminara la provisión del certificado, así que durante un rato HTTP funcionaba y HTTPS todavía mostraba problemas. Cuando GitHub completó el proceso, `https://www.marchiori.ar` quedó accesible normalmente.

## El correo siguió funcionando

En `marchiori.ar` mantuve los registros **MX**, **SPF** y **DKIM** utilizados entonces por Hanami/Mailwip para reenviar correo hacia las cuentas reales. El cambio de web no implicaba mover el servicio de correo ni alterar sus registros.

## El dominio alternativo y la limitación del DNS

Quería que tanto `www.marchiori.com.ar` como `marchiori.com.ar` llevaran al sitio principal. Para la variante `www`, el reenvío de Hanami permitía usar:

- `CNAME www -> forward.hanami.run`
- `TXT hanami-forward.www -> marchiori.ar`

El inconveniente apareció con el dominio raíz `marchiori.com.ar`. El proveedor DNS de ese momento no permitía crear allí un `CNAME`, de modo que no podía aplicar el mismo mecanismo de reenvío. Quedó resuelta la variante con `www`, mientras que el dominio sin ese prefijo seguía pendiente.

## Estado de aquella primera configuración

En esa etapa, `www.marchiori.ar` era la dirección principal, el dominio raíz acompañaba la publicación en GitHub Pages, HTTPS funcionaba y el correo continuaba con su reenvío habitual. La parte sin resolver era la redirección de `marchiori.com.ar` sin `www`.

Ya entonces tenía en vista trasladar la gestión DNS a Cloudflare, que ofrecía más flexibilidad para reglas de redirección sin mezclar la publicación web con el correo. Esa migración se hizo después y quedó registrada en [la nota sobre el cambio de DNS a Cloudflare](/site-log/migracion-dns-cloudflare/); los registros de arriba corresponden a la **configuración histórica de marzo de 2026**.
