---
title: "Cómo armar las publicaciones para Hugo"
date: 2026-03-29T21:30:00-03:00
draft: false
description: "Diferencia entre secciones, menú, categorías y tags en Hugo, más una guía rápida de Markdown para escribir notas."
tags: ["hugo", "markdown", "site-log", "publicaciones", "guia"]
---

Esta es una nota de referencia para no volver a preguntarme lo mismo dentro de dos semanas: qué es cada cosa en Hugo, cómo conviene organizar el contenido del sitio y qué sintaxis Markdown me sirve para escribir publicaciones sin renegar.

---

## Qué es cada cosa en Hugo

### Sección

La **sección** la define la carpeta dentro de `content/`.

Ejemplos:

```text
content/site-log/mi-nota.md
content/notas/otra-nota.md
```

Eso define la sección:

- `site-log`
- `notas`

Si un archivo está dentro de `content/site-log/`, entonces pertenece a la sección **site-log**.

---

### Menú

El **menú** es la navegación del sitio. No clasifica el contenido; solo crea accesos.

Ejemplo en `hugo.toml`:

```toml
[[menus.main]]
name = "Notas"
pageRef = "notas"
weight = 10

[[menus.main]]
name = "Site Log"
pageRef = "site-log"
weight = 20
```

Eso hace que aparezcan las entradas del menú, pero no cambia la sección del contenido.

---

### Categories

Las **categories** son una **taxonomía**. Sirven para clasificar el contenido por tema.

Ejemplo:

```yaml
categories: ["Infraestructura web"]
```

Eso no define dónde vive el archivo. Solo le agrega una clasificación temática.

---

### Tags

Los **tags** también son una taxonomía, pero más fina y específica.

Ejemplo:

```yaml
tags: ["cloudflare", "dns", "github-pages", "email-routing"]
```

---

## Cómo conviene usarlo en mi sitio

Para los posts del **Site Log**, lo más lógico es:

- guardar el archivo dentro de `content/site-log/`
- usar **tags** para los detalles técnicos
- usar **categories** solo si realmente aportan algo

### Opción simple

Usar:

- sección = `site-log`
- tags = detalles técnicos

Ejemplo:

```yaml
title: "Mudanza a Cloudflare: dominio propio, DNS y alguna pelea con los redirects"
date: 2026-03-28T17:00:00-03:00
draft: false
description: "Cómo migré mis dominios a Cloudflare, unifiqué DNS y reenvíos de correo, y resolví la redirección del dominio alternativo."
tags: ["cloudflare", "dns", "dominio", "email-routing", "redirects", "github-pages", "hanami"]
```

### Opción con categoría

Si además quiero clasificar por taxonomía:

```yaml
categories: ["Site Log"]
```

Pero no es obligatorio.

---

## Estructura básica de una publicación

El encabezado va arriba del archivo, entre `---`.

```yaml
---
title: "Título de la nota"
date: 2026-03-29T21:00:00-03:00
draft: false
description: "Resumen corto."
tags: ["tag1", "tag2"]
---
```

Después de eso empieza el contenido.

---

## Markdown útil para escribir

### Títulos

```markdown
# Título principal
## Subtítulo
### Subsubtítulo
```

---

### Negrita, cursiva y tachado

```markdown
**negrita**
*cursiva*
~~tachado~~
```

Resultado:

**negrita**  
*cursiva*  
~~tachado~~

---

### Listas

#### Lista simple

```markdown
- punto uno
- punto dos
- punto tres
```

#### Lista numerada

```markdown
1. primero
2. segundo
3. tercero
```

---

### Citas

```markdown
> Esto es una cita o bloque destacado.
```

---

### Código en línea

```markdown
Usé `CNAME www -> pablomarchiori.github.io`.
```

Resultado:

Usé `CNAME www -> pablomarchiori.github.io`.

---

### Bloques de código

#### Texto plano

````markdown
```text
A   @   185.199.108.153
CNAME   www   pablomarchiori.github.io
```
````

#### YAML

````markdown
```yaml
title: "Mi nota"
draft: false
```
````

#### TOML

````markdown
```toml
[[menus.main]]
name = "Site Log"
pageRef = "site-log"
```
````

---

## Cómo agregar un link

### Link normal

```markdown
[Cloudflare](https://www.cloudflare.com/)
```

Resultado:

[Cloudflare](https://www.cloudflare.com/)

### Link interno del sitio

```markdown
[Ver otra nota](/site-log/mi-otra-nota/)
```

---

## Cómo agregar una imagen

Si la imagen está en `static/img/ejemplo.png`:

```markdown
![Texto alternativo](/img/ejemplo.png)
```

### Con título opcional

```markdown
![Mi captura](/img/cloudflare-dns.png "Panel DNS en Cloudflare")
```

### Organización recomendada

Una estructura razonable sería:

```text
static/img/site-log/
```

Ejemplos:

```text
static/img/site-log/cloudflare-dns-marchiori-ar.png
static/img/site-log/cloudflare-redirect-rule.png
```

Después, dentro de la nota:

```markdown
![DNS de marchiori.ar en Cloudflare](/img/site-log/cloudflare-dns-marchiori-ar.png)
```

---

## Imagen que al hacer clic abre otra imagen

Esto sirve para mostrar una versión chica o miniatura, y que al hacer clic se abra la imagen grande.

```markdown
[![Tablet CX Boreal II mostrando el panel](/images/labs/panel-tablet-cx-boreal-ii-thumb.jpg)](/images/labs/panel-tablet-cx-boreal-ii.jpg)
```

---

## Imagen con texto debajo

```markdown
![Regla de redirect en Cloudflare](/img/site-log/redirect-cloudflare.png)

*Regla usada para redirigir marchiori.com.ar hacia marchiori.ar.*
```

---

## Línea horizontal

```markdown
---
```

Dentro del texto sirve para separar bloques. Solo hay que evitar confundirla con el front matter del principio.

---

## Tablas

```markdown
| Tipo  | Host | Valor |
|------|------|------|
| A    | @    | 185.199.108.153 |
| CNAME | www | pablomarchiori.github.io |
```

Resultado:

| Tipo  | Host | Valor |
|------|------|------|
| A    | @    | 185.199.108.153 |
| CNAME | www | pablomarchiori.github.io |

---

## Estructura recomendada para mis notas

Una plantilla simple que me sirve:

```markdown
---
title: "Título"
date: 2026-03-29T21:00:00-03:00
draft: false
description: "Resumen corto."
tags: ["cloudflare", "dns"]
---

## Contexto

Texto introductorio.

## Qué problema apareció

Explicación.

## Qué decidí hacer

Pasos o razonamiento.

## Configuración final

- punto
- punto
- punto

## Lo que aprendí

Cierre.
```

---

## Cuándo usar sección, tags y categorías

### Sección
La uso para el tipo de contenido:

- `site-log`
- `notas`

### Tags
Los uso siempre que aporten:

- `cloudflare`
- `dns`
- `hugo`
- `github-pages`
- `iis`

### Categories
Las uso solo si realmente suman. Si no, no pongo ninguna.

---

## Ejemplo completo mínimo

```markdown
---
title: "Mudanza a Cloudflare: dominio propio, DNS y alguna pelea con los redirects"
date: 2026-03-28T17:00:00-03:00
draft: false
description: "Cómo migré mis dominios a Cloudflare, unifiqué DNS y reenvíos de correo, y resolví la redirección del dominio alternativo."
tags: ["cloudflare", "dns", "github-pages", "hanami", "redirects"]
---

## Contexto

Venía usando **cdmon** desde hacía muchos años y después fui pasando por varios servicios de reenvío de correo.

## El problema

Cuando apareció el problema del **apex** del dominio, empecé a mirar otras opciones.

## La decisión

Terminé migrando DNS y correo a **Cloudflare**.

## Resultado

- `marchiori.ar` quedó como dominio principal
- `marchiori.com.ar` redirige a `marchiori.ar`
- el correo quedó unificado con **Email Routing**

![Configuración DNS final](/img/site-log/cloudflare-dns-final.png)

*Vista de la configuración final en Cloudflare.*
```

---

## Regla simple para no marearme

Para publicar:

- el archivo va en `content/site-log/`
- front matter arriba
- después contenido en Markdown
- imágenes en `static/img/...`
- links con `[texto](url)`
- negrita con `**texto**`

Con eso alcanza para la mayoría de las publicaciones.
