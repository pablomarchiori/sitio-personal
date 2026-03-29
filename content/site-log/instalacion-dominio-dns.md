---
title: "Dominio propio, DNS y alguna pelea con los redirects"
date: 2026-03-28T17:00:00-03:00
draft: false
description: "Cómo agregué el dominio propio al sitio, qué DNS usé y dónde apareció la limitación con el dominio alternativo."
tags: ["github-pages", "dns", "dominio", "hanami", "cloudflare"]
categories: ["Notas"]
---

# Objetivo

Dejar documentado cómo agregué el dominio propio al sitio en GitHub Pages, qué toqué en DNS y dónde apareció la primera limitación molesta del esquema.  
La idea no es solo anotar qué funcionó, sino también qué no funcionó, porque eso después ahorra bastante tiempo cuando haya que tocar algo de nuevo.

## Qué quería lograr

La idea era dejar el sitio accesible con:

* `www.marchiori.ar`
* `marchiori.ar`
* `www.marchiori.com.ar`
* `marchiori.com.ar`

Y además mantener el correo funcionando en los dominios, porque en ambos ya tengo aliases que reenvían a cuentas reales.

O sea: no era solo “que abra la web”, sino que convivan web y correo sin romper nada.

## Dominio principal elegido

El dominio principal del sitio quedó como:

`www.marchiori.ar`

Ese quedó como dominio canónico del sitio.

## Configuración en GitHub Pages

En el repositorio del sitio fui a:

`Settings -> Pages -> Custom domain`

y cargué:

`www.marchiori.ar`

Después GitHub hizo el chequeo de DNS y empezó a provisionar el certificado.

## Qué puse en DNS para marchiori.ar

Para `marchiori.ar` cargué los registros típicos de GitHub Pages.

### Para el dominio raíz

Se agregaron cuatro registros `A` en `@`:

* `185.199.108.153`
* `185.199.109.153`
* `185.199.110.153`
* `185.199.111.153`

y también cuatro `AAAA`:

* `2606:50c0:8000::153`
* `2606:50c0:8001::153`
* `2606:50c0:8002::153`
* `2606:50c0:8003::153`

### Para www

Se agregó:

`CNAME www -> pablomarchiori.github.io`

Con eso, GitHub Pages terminó validando el dominio y publicando el sitio con dominio propio.

## El momento de “parece que está, pero no está”

Primero el sitio empezó a responder, pero por HTTPS todavía no quedaba del todo bien.

GitHub mostraba que el certificado estaba en proceso. Durante un rato el sitio abría raro por HTTPS y bien por HTTP, hasta que el certificado terminó de quedar activo.

Después de eso, `https://www.marchiori.ar` quedó funcionando normal.

## Correo en marchiori.ar

Esto era importante: el correo no se tocó ni se rompió.

En `marchiori.ar` siguieron quedando los registros de Hanami / Mailwip para reenvío de correo:

* `MX`
* `SPF`
* `DKIM`

O sea: en ese dominio hoy conviven sin problema:

* la web por GitHub Pages
* el correo por forward

## El otro dominio: marchiori.com.ar

La idea con `marchiori.com.ar` no era publicar otro sitio aparte, sino usarlo como dominio alternativo y mandarlo al principal.

Con `www.marchiori.com.ar` eso salió bastante directo usando el forward de Hanami.

Quedó con esta idea:

* `CNAME www -> forward.hanami.run`
* `TXT hanami-forward.www -> marchiori.ar`

Con eso, el `www` del `.com.ar` puede terminar en el sitio principal.

## Donde apareció la traba real

El problema no fue GitHub.

El problema apareció con el dominio pelado:

`marchiori.com.ar`

Ahí la idea era hacer lo mismo usando el forward de Hanami para el dominio raíz, pero el proveedor DNS actual no deja crear un `CNAME` en el dominio principal.

Dicho más simple: para `www` sí, para el dominio raíz no.

Entonces el resultado práctico fue este:

* `www.marchiori.com.ar` sí se puede redirigir
* `marchiori.com.ar` sin `www` no quedó resuelto por ese mismo método

## Lo importante de entender

Acá el límite no lo puso GitHub Pages.

GitHub ya había quedado resuelto con el dominio principal.

La limitación apareció por la combinación entre:

* el proveedor DNS actual
* el tipo de redirect que usa Hanami
* y la necesidad de mantener correo activo en el dominio

## Situación actual

Al cierre de esta etapa, quedó así:

* `www.marchiori.ar` funciona como dominio principal del sitio
* `marchiori.ar` acompaña esa configuración
* el sitio ya responde por HTTPS
* el correo sigue funcionando
* `www.marchiori.com.ar` puede usarse como entrada alternativa
* `marchiori.com.ar` raíz quedó como el punto pendiente

## Posible paso futuro

Queda en carpeta revisar una migración del DNS a Cloudflare.

No por moda ni por “sumar cosas”, sino porque podría dar más flexibilidad para manejar:

* redirects del dominio raíz
* reglas más finas
* mejor separación entre web y correo
* una administración de DNS más cómoda

La idea sería aprovechar eso si más adelante realmente vale la pena, no tocar por tocar.

## Cierre

La parte importante quedó resuelta: el sitio ya tiene dominio propio, HTTPS y sigue conviviendo con el correo.

La parte que quedó pendiente no es el sitio en sí, sino el manejo fino del dominio alternativo en el proveedor DNS actual.

Y justamente por eso vale la pena dejarlo escrito: para que después no parezca que “algo falló” cuando en realidad lo que apareció fue una limitación bastante concreta de infraestructura.