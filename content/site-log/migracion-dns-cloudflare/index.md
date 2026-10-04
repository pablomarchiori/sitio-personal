---
title: "Mudanza a Cloudflare: dominio propio, DNS y redirects de mail"
date: 2026-03-29T21:00:00-03:00
draft: false
description: "Cómo migré mis dominios a Cloudflare, unifiqué DNS y reenvíos de correo, y resolví la redirección del dominio alternativo."
tags: ["cloudflare", "dns", "dominio", "email-routing", "redirects", "github-pages", "hanami"]
categories: ["Notas"]
---

# De cdmon y Hanami a Cloudflare

Cuando apareció el problema del **apex** del dominio, por una sugerencia de **ChatGPT GPT-5.4 Thinking**, me puse a investigar **Cloudflare**. La verdad es que no tenía registrado todo lo que ofrecían. Yo venía usando **cdmon** desde hacía fácil **15 años o más**, sin mover demasiado esa parte.

En correo, el recorrido fue bastante largo. Primero pasé por los **reenvíos de correo de Dattatec**. Después usé **Outlook Premium**, en la época en que todavía permitía trabajar con **dominio propio**. Cuando Microsoft sacó esa funcionalidad, me pasé a **DonWeb** —que antes era Dattatec—. Más adelante, DonWeb también dejó de ofrecer esa opción, así que buscando alternativas encontré **Hanami.run**.

Con **Hanami** la experiencia fue muy buena. Funcionó perfecto, sin quejas. Durante bastante tiempo me resolvió muy bien el reenvío de correo por alrededor de **2 USD mensuales**, que no era un problema. El punto no era el costo, sino que al ver lo que ofrecía **Cloudflare** apareció una oportunidad más interesante: **simplificar y unificar**.

La posibilidad de tener en un mismo lugar los **DNS**, los **reenvíos de correo**, las **reglas de redirección**, algunas **métricas** y otras funciones adicionales me terminó de convencer. Así que decidí migrar.

No fue una búsqueda impulsada por disconformidad con Hanami, porque en mi caso funcionó muy bien. Fue más bien una decisión de orden: **menos servicios separados, menos dependencias dispersas y una base más coherente para seguir armando el sitio**.

Además, era una buena excusa para meterme un poco más en el mundo de **Cloudflare**, que hasta ahora había mirado bastante de afuera.

Veremos cuánto dura esta configuración, pero por ahora la movida cerró por todos lados.

---

# Configuración final en Cloudflare

## Objetivo general

Se migraron a Cloudflare los dominios:

* **`marchiori.ar`**
* **`marchiori.com.ar`**

La idea final quedó así:

* **`marchiori.ar`** como dominio principal del sitio
* **GitHub Pages** como hosting web para `marchiori.ar`
* **Cloudflare Email Routing** para el correo entrante de ambos dominios
* **`marchiori.com.ar`** redirigiendo hacia `marchiori.ar`
* eliminación completa de dependencias anteriores con **Hanami**

---

# 1. Delegación de dominios

La delegación de ambos dominios se cambió en **NIC Argentina**, apuntándolos a los nameservers asignados por Cloudflare.

A partir de eso:

* Cloudflare pasó a ser el **DNS autoritativo**
* toda la configuración DNS se centralizó ahí
* los servicios viejos quedaron reemplazados progresivamente

---

# 2. Configuración final de `marchiori.ar`

## 2.1 Sitio web

`marchiori.ar` quedó apuntando a **GitHub Pages**.

### Registros DNS web

#### A

* `marchiori.ar -> 185.199.108.153`
* `marchiori.ar -> 185.199.109.153`
* `marchiori.ar -> 185.199.110.153`
* `marchiori.ar -> 185.199.111.153`

#### AAAA

* `marchiori.ar -> 2606:50c0:8000::153`
* `marchiori.ar -> 2606:50c0:8001::153`
* `marchiori.ar -> 2606:50c0:8002::153`
* `marchiori.ar -> 2606:50c0:8003::153`

#### CNAME

* `www -> pablomarchiori.github.io`

### Estado de proxy

Todos estos registros web quedaron en:

* **DNS only**

Es decir:

* sin proxy de Cloudflare
* resolución directa hacia GitHub Pages

---

## 2.2 Correo

El correo de `marchiori.ar` se migró a **Cloudflare Email Routing**.

### Registros DNS de correo

#### MX

* `marchiori.ar -> route1.mx.cloudflare.net`
* `marchiori.ar -> route2.mx.cloudflare.net`
* `marchiori.ar -> route3.mx.cloudflare.net`

#### SPF

* `marchiori.ar -> "v=spf1 include:_spf.mx.cloudflare.net ~all"`

#### DKIM

* `cf2024-1._domainkey ->` valor DKIM generado por Cloudflare

Todos estos registros quedaron en:

* **DNS only**

---

## 2.3 Reglas de correo

### Catch-all

Se configuró catch-all para:

* cualquier dirección no definida en `@marchiori.ar`
* destino: `pablo.marchiori@outlook.com`

### Direcciones específicas

Se crearon además estas reglas:

* `pablo@marchiori.ar -> pablo.marchiori@outlook.com`
* `xxx1@marchiori.ar -> xxx1.marchiori@hotmail.com`
* `xxx2@marchiori.ar -> xxx2.marchiori@outlook.com`
* `xxx3@marchiori.ar -> xxx3.marchiori@outlook.com`

En los casos necesarios hubo que verificar primero las direcciones destino.

---

## 2.4 Lo que se eliminó

Se eliminaron todos los restos de Hanami en `marchiori.ar`, incluyendo:

* `mx1.hanami.run`
* `mx2.hanami.run`
* SPF anterior con `spf.hanami.run`
* cualquier otro resto de configuración heredada

---

# 3. Configuración final de `marchiori.com.ar`

## 3.1 Correo

También se migró el correo de `marchiori.com.ar` a **Cloudflare Email Routing**.

### Registros DNS de correo

#### MX

* `marchiori.com.ar -> route1.mx.cloudflare.net`
* `marchiori.com.ar -> route2.mx.cloudflare.net`
* `marchiori.com.ar -> route3.mx.cloudflare.net`

#### SPF

* `marchiori.com.ar -> "v=spf1 include:_spf.mx.cloudflare.net ~all"`

#### DKIM

* `cf2024-1._domainkey ->` valor DKIM generado por Cloudflare

Todos estos en:

* **DNS only**

---

## 3.2 Reglas de correo

### Catch-all

* catch-all de `marchiori.com.ar`
* destino: `pablo.marchiori@outlook.com`

### Direcciones específicas

* `pablo@marchiori.com.ar -> pablo.marchiori@outlook.com`
* `lucia@marchiori.com.ar -> lucia.marchiori@hotmail.com`
* `anabella@marchiori.com.ar -> anabella.marchiori@outlook.com`
* `monica@marchiori.com.ar -> monica.marchiori@outlook.com`

También acá se usó verificación previa de destinos cuando correspondía.

---

## 3.3 Web y redirección

`marchiori.com.ar` no se dejó como sitio independiente.
Se lo configuró para **redirigir a `marchiori.ar`**.

### Registros DNS web

#### A

* `marchiori.com.ar -> 192.0.2.1`

#### CNAME

* `www -> marchiori.com.ar`

Estos dos registros quedaron en:

* **Proxied**

Eso se hizo para que Cloudflare pudiera interceptar la petición y aplicar las reglas de redirección.

---

## 3.4 Redirect Rules

Se crearon reglas en Cloudflare para redirigir:

* `marchiori.com.ar`
* `www.marchiori.com.ar`

hacia:

* `https://marchiori.ar`

manteniendo:

* el **path**
* el **query string**

### Expresión usada

En la parte de destino se utilizó:

```text
concat("https://marchiori.ar", http.request.uri.path)
```

con:

* **Status code: 301**
* **Preserve query string: activado**

Esto hace que, por ejemplo:

* `https://www.marchiori.com.ar/prueba`
* redirija a
* `https://marchiori.ar/prueba`

---

## 3.5 Lo que se eliminó

Se borró todo lo que dependía de Hanami:

* `CNAME * -> forward.hanami.run`
* `CNAME www -> forward.hanami.run`
* `TXT hanami-forward`
* `TXT hanami-forward.www`
* MX anteriores de Hanami
* SPF anterior de Hanami

---

# 4. Resultado final

La estructura final quedó así:

## `marchiori.ar`

* dominio principal
* web en GitHub Pages
* correo por Cloudflare
* `www` funcionando
* sin Hanami

## `marchiori.com.ar`

* correo por Cloudflare
* redirección web a `marchiori.ar`
* sin Hanami

## Beneficios concretos

* unificación de DNS y correo en una sola plataforma
* menos dependencia de terceros separados
* configuración más limpia
* base lista para seguir aprovechando otras funciones de Cloudflare
* eliminación de servicios heredados que habían quedado como parches a lo largo de los años

---

# 5. Observación práctica

Durante la migración hubo algún rebote transitorio de correo en `marchiori.ar`, pero terminó siendo un problema momentáneo de propagación o activación reciente. Después de eso, el reenvío quedó funcionando correctamente desde Cloudflare.

---

Si querés, te lo convierto ahora en una versión más tipo **post del sitio**, con subtítulos más naturales y menos formato técnico.
