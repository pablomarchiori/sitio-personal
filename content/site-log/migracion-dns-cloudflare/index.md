---
title: "Mudanza a Cloudflare: dominio propio, DNS y redirects de mail"
date: 2026-03-29T21:00:00-03:00
draft: false
description: "Cómo migré mis dominios a Cloudflare, unifiqué DNS y reenvíos de correo, y resolví la redirección del dominio alternativo."
tags: ["cloudflare", "dns", "dominio", "email-routing", "redirects", "github-pages", "hanami"]
categories: ["Notas"]
---

*Texto original: 29/03/2026. Actualización: 23/11/2026 (revisión editorial y estructura).*

## De cdmon y Hanami a Cloudflare

Cuando apareció el problema del **apex** del dominio, **ChatGPT GPT-5.4 Thinking** me sugirió investigar **Cloudflare**. Yo venía usando **cdmon** desde hacía fácil **15 años o más**, sin tocar demasiado esa parte, y desconocía varias de las funciones de Cloudflare.

Con el correo había pasado por más servicios. Empecé con los **reenvíos de Dattatec** y después usé **Outlook Premium**, cuando Microsoft todavía permitía trabajar con **dominio propio**. Al retirar esa posibilidad, volví a **DonWeb** (la antigua Dattatec). Cuando también dejó de ofrecerla, encontré **Hanami.run**.

Hanami funcionaba perfecto y costaba alrededor de **2 USD mensuales**. No tenía motivos para cambiarlo, pero al investigar Cloudflare descubrí que podía administrar desde un mismo lugar los **DNS**, los **reenvíos de correo** y las **redirecciones** de ambos dominios, además de acceder a métricas y otras funciones. Eso terminó de convencerme. De paso, era una buena excusa para conocer mejor Cloudflare, que hasta entonces había mirado bastante de afuera.

## La migración de los dominios

Cambié en **NIC Argentina** la delegación de `marchiori.ar` y `marchiori.com.ar` a los *nameservers* asignados por Cloudflare. Desde ese momento, Cloudflare pasó a ser el **DNS autoritativo** de ambos dominios.

La organización quedó definida así: `marchiori.ar` como dominio principal, con el sitio alojado en **GitHub Pages**; **Cloudflare Email Routing** para recibir y reenviar el correo de los dos dominios; y `marchiori.com.ar` como dominio alternativo, con redirección web hacia el principal. Los servicios que dependían de Hanami se fueron retirando a medida que completaba la configuración.

## El DNS de `marchiori.ar`

El sitio siguió alojado en **GitHub Pages**. Para el dominio raíz quedaron estos registros:

| Tipo | Destino |
| --- | --- |
| A | `185.199.108.153` |
| A | `185.199.109.153` |
| A | `185.199.110.153` |
| A | `185.199.111.153` |
| AAAA | `2606:50c0:8000::153` |
| AAAA | `2606:50c0:8001::153` |
| AAAA | `2606:50c0:8002::153` |
| AAAA | `2606:50c0:8003::153` |

Para `www` mantuve el **CNAME** hacia `pablomarchiori.github.io`. Todos los registros web quedaron en **DNS only**, sin pasar el tráfico por el proxy de Cloudflare.

## El correo y los reenvíos

Para los dos dominios configuré **Cloudflare Email Routing**. En cada zona DNS, los registros **MX** apuntan a:

- `route1.mx.cloudflare.net`
- `route2.mx.cloudflare.net`
- `route3.mx.cloudflare.net`

El registro **SPF** quedó con el mismo valor en ambos dominios:

```text
v=spf1 include:_spf.mx.cloudflare.net ~all
```

También se configuró el registro **DKIM** `cf2024-1._domainkey` con el valor generado por Cloudflare para cada dominio. Los registros de correo quedaron en **DNS only**.

El *catch-all* de `marchiori.ar` reenvía cualquier dirección que no tenga una regla específica a `pablo.marchiori@outlook.com`. Estas son las reglas individuales:

| Dirección | Destino |
| --- | --- |
| `pablo@marchiori.ar` | `pablo.marchiori@outlook.com` |
| `xxx1@marchiori.ar` | `xxx1.marchiori@hotmail.com` |
| `xxx2@marchiori.ar` | `xxx2.marchiori@outlook.com` |
| `xxx3@marchiori.ar` | `xxx3.marchiori@outlook.com` |

En `marchiori.com.ar` también dejé un *catch-all* hacia `pablo.marchiori@outlook.com`, junto con estas reglas:

| Dirección | Destino |
| --- | --- |
| `pablo@marchiori.com.ar` | `pablo.marchiori@outlook.com` |
| `lucia@marchiori.com.ar` | `lucia.marchiori@hotmail.com` |
| `anabella@marchiori.com.ar` | `anabella.marchiori@outlook.com` |
| `monica@marchiori.com.ar` | `monica.marchiori@outlook.com` |

Para activar algunas de las reglas tuve que verificar primero las direcciones de destino.

## `marchiori.com.ar` y las redirecciones

El dominio alternativo conserva sus direcciones de correo, pero en la web apunta a `marchiori.ar`. Para que Cloudflare procese las redirecciones, configuré estos registros en **Proxied**:

- **A:** `marchiori.com.ar` → `192.0.2.1`
- **CNAME:** `www` → `marchiori.com.ar`

Después creé las **Redirect Rules** para `marchiori.com.ar` y `www.marchiori.com.ar`. El destino se construye con esta expresión, que conserva la ruta solicitada:

```text
concat("https://marchiori.ar", http.request.uri.path)
```

La redirección responde con **301** y tiene activada la opción **Preserve query string**, para mantener también los parámetros de la URL. Por ejemplo, `https://www.marchiori.com.ar/prueba` termina en `https://marchiori.ar/prueba`.

## Limpieza de la configuración anterior

Una vez que el correo quedó configurado en Cloudflare, eliminé los registros heredados de **Hanami**.

En `marchiori.ar` retiré los MX `mx1.hanami.run` y `mx2.hanami.run`, el SPF que incluía `spf.hanami.run` y otros restos de la configuración anterior.

En `marchiori.com.ar` eliminé los **CNAME** `*` y `www` hacia `forward.hanami.run`, los **TXT** `hanami-forward` y `hanami-forward.www`, y los antiguos registros MX y SPF de Hanami.

## Un rebote durante la migración

Durante el cambio hubo algún rebote transitorio de correo en `marchiori.ar`, aparentemente relacionado con la propagación o la activación reciente de la nueva configuración. Después de eso, los reenvíos quedaron funcionando desde Cloudflare.
