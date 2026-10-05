---
title: "Instalación del sitio personal con Hugo en Windows"
date: 2026-09-07T16:55:00-03:00
draft: false
description: "Primera nota del sitio: instalación de Hugo, Git, Congo y puesta en marcha local."
tags: ["hugo", "windows", "github", "sitio-personal"]
categories: ["Notas"]
---
**Actualización: 04/10/2026 — estructura de artículos, imágenes y AGENTS.md**  
Reorganicé las publicaciones en carpetas que reúnen cada texto y sus archivos, ordené el uso de `content` y `static`, y documenté las convenciones en `AGENTS.md`. La copia local del sitio también genera imágenes optimizadas para compartir enlaces. [Ver anexo](#anexo-estructura-de-artículos-imágenes-y-agentsmd).

**Actualización: 07/09/2026 — contador de lecturas por página**  
Agregué un contador de lecturas para Notas, Labs y Escritos con servicios de Cloudflare. [Ver anexo](#anexo-contador-de-lecturas-con-cloudflare).

**Actualización: 07/09/2026 — compartir, modo claro/oscuro y búsqueda**  
Agregué las opciones para compartir, el selector de apariencia y la búsqueda general. [Ver anexo](#anexo-compartir-apariencia-y-búsqueda).

**Actualización: 24/08/2026 — Hugo 0.165.0 y Congo 2.14.0**  
Actualicé las versiones usadas en Windows y en la publicación automática. [Ver anexo](#anexo-actualización-de-hugo-y-congo).

## Instalación original — 28/03/2026

Quería un sitio personal que pudiera mantener por mi cuenta, escribir en Markdown y publicar con costo cero o casi. Venía de servicios como Blogger y buscaba una plataforma abierta, con una presentación sencilla y la posibilidad de conectar un dominio propio. También quería renegar un poco con casos prácticos para aprender cómo funcionaba todo.

Elegí Hugo, *un programa que convierte textos y plantillas en las páginas del sitio*, con el tema Congo para la presentación y Git para guardar el historial de cambios. Trabajé en Windows, con asistencia de ChatGPT 5.4 Thinking y algo de Gemini.

### Hugo, Git y el proyecto local

Descargué Hugo para Windows, dejé el ejecutable en una carpeta local y lo agregué al `PATH`, *la lista de carpetas donde Windows busca los programas cuando escribimos un comando*. Comprobé la instalación con `hugo version`.

Después instalé Git for Windows y lo verifiqué con `git --version`. Empecé usando Git Bash, pero terminé pasando a CMD porque me resultaba más cómodo para copiar y pegar comandos.

Creé el proyecto con `hugo new project sitio-personal` e inicialicé su historial con `git init` dentro de esa carpeta.

### Congo y los primeros ajustes

La elección del tema llevó unas cuantas vueltas, con Gemini, ChatGPT y yo haciendo de árbitro. Congo me cerraba por su aspecto sobrio, el soporte para notas e imágenes y las posibilidades de ajuste.

Lo incorporé como **submódulo**, *un repositorio de Git incluido dentro de otro y fijado a una revisión concreta*, con este comando:

```text
git submodule add https://github.com/jpanther/congo.git themes/congo
```

Enseguida apareció la primera contrariedad. Había descargado la edición estándar de Hugo y Congo requería **Hugo Extended**, que incluye las herramientas necesarias para procesar los estilos del tema. Reemplacé el ejecutable y preparé una configuración mínima en `hugo.toml`.

El siguiente problema fue una incompatibilidad entre Hugo y un **partial** de Congo, *una plantilla reutilizable que otras plantillas pueden invocar*. Lo resolví creando un archivo vacío en `layouts/partials/functions/warnings.html`, que reemplazaba localmente ese partial sin modificar los archivos del tema.

Con esos ajustes, `hugo server -D` puso el sitio en marcha en `http://localhost:1313/`. La opción `-D` permite ver también las publicaciones marcadas como borrador.

### Publicación y ajuste visual

Guardé el primer **commit**, *una revisión de los archivos en el historial de Git*, y subí el proyecto a GitHub. Configuré GitHub Pages para alojarlo y GitHub Actions para construirlo y publicarlo. Su **workflow**, *la secuencia de tareas automáticas definida para el proyecto*, se ejecuta cada vez que envío cambios a la rama principal con `git push`.

La primera versión quedó en [pablomarchiori.github.io/sitio-personal](https://pablomarchiori.github.io/sitio-personal/), con una portada básica, la sección Notas y la primera publicación.

Todavía me molestaba el espacio excesivo entre los elementos de las listas. Probé con `assets/css/custom.css`, pero el tema no lo tomaba como esperaba. Funcionó al usar `static/css/custom.css` y cargarlo expresamente desde `layouts/partials/extend-head.html`.

Para más adelante quedaron el dominio propio, la organización de secciones y categorías y una guía para mantener el sitio y publicar nuevas notas. Por lo pronto, ya podía escribir, probar los cambios en mi equipo y subirlos. Faltaba acostumbrarme a la secuencia. 😅

```text
git add content\site-log\instalacion-del-sitio\index.md
git commit -m "Actualizar nota de instalación del sitio"
git push
```

La ruta del ejemplo corresponde a la organización actual de esta nota, adoptada en octubre.

---

## Anexo: actualización de Hugo y Congo

El 24/08/2026 actualicé **Hugo Extended de 0.159.1 a 0.165.0**. En Windows alcanzó con reemplazar `hugo.exe` y comprobar la versión con `hugo version`.

Al iniciar el sitio aparecieron avisos sobre parámetros `deprecated`, *obsoletos y pendientes de retirada*, desde Hugo 0.158. En `hugo.toml` cambié `languageCode = "es-ar"` por `locale = "es-AR"`.

Los avisos restantes venían de Congo. Entré en `themes\congo`, actualicé las referencias con `git fetch --tags` y seleccioné **Congo v2.14.0** con `git checkout v2.14.0`. Git mostró `detached HEAD`: *el submódulo había quedado en una revisión concreta, identificada por la etiqueta de esa versión, sin seguir una rama*. Era lo esperado para esa forma de instalar el tema.

Congo v2.14.0 incorporaba los cambios para las nuevas propiedades de idioma de Hugo. Después de actualizarlo, el sitio volvió a compilar sin esos avisos.

### La versión usada por GitHub Pages

También cambié `HUGO_VERSION: 0.159.1` por `HUGO_VERSION: 0.165.0` en `.github/workflows/hugo.yaml`, para que GitHub Actions usara la misma versión que mi equipo.

En el primer intento escribí `0.165.1`. Esa versión no existía en ese momento y la descarga devolvió una respuesta de error. Al intentar descomprimirla, la instalación falló con estos mensajes:

```text
tar: This does not look like a tar archive
gzip: stdin: not in gzip format
```

La dirección de descarga era incorrecta: `curl` había guardado una respuesta de error donde se esperaba un archivo `.tar.gz`. Al corregir el número, el workflow volvió a funcionar. En esa actualización quedaron alineados los dos entornos con **Hugo 0.165.0 Extended y Congo 2.14.0**.

---

## Anexo: compartir, apariencia y búsqueda

El 07/09/2026 agregué las opciones **Facebook**, **Compartir** y **Copiar enlace**, junto con el selector claro/oscuro, debajo del encabezado de Notas, Labs y Escritos.

La implementación de esa etapa quedó centralizada en `layouts/partials/extend-footer.html`, limitada a las páginas de esas secciones:

```go-html-template
{{ if and .IsPage (in (slice "notas" "labs" "escritos") .Section) }}
```

**Facebook** abre el diálogo de esa red. **Compartir** usa la función nativa del navegador o del teléfono (`navigator.share`); las aplicaciones disponibles dependen del dispositivo. **Copiar enlace** guarda la dirección en el portapapeles y confirma la acción. El selector de apariencia aprovecha el de Congo.

Aunque el bloque se cargaba desde el pie de página, un fragmento de JavaScript lo ubicaba debajo del encabezado. Así podía aplicarlo a las tres secciones sin editar cada publicación.

### Búsqueda

Habilité la búsqueda interna de Congo en `hugo.toml`:

```toml
[params]
enableSearch = true
```

También agregué la salida JSON de la portada, *un archivo de datos que el buscador puede leer*:

```toml
[outputs]
home = ["HTML", "RSS", "JSON"]
```

La lupa quedó como una acción del menú principal, antes de **Acerca de**, con esta configuración:

```toml
[[menus.main]]
identifier = "search"
weight = 60

[menus.main.params]
action = "search"
icon = "search"
```

---

## Anexo: contador de lecturas con Cloudflare

El 07/09/2026 agregué el contador de lecturas a Notas, Labs y Escritos. Aparece junto a la fecha y el tiempo estimado de lectura:

```text
6 de septiembre de 2026 · 5 mins · 27 lecturas
```

Usé **Cloudflare D1**, *el servicio de base de datos de Cloudflare*, para guardar una cuenta por dirección. La base se llama `mirada-nerd-views` y contiene esta tabla:

```sql
CREATE TABLE page_views (
  path TEXT PRIMARY KEY,
  views INTEGER NOT NULL DEFAULT 0
);
```

Creé además `mirada-nerd-counter` como **Cloudflare Worker**, *un pequeño programa que se ejecuta en los servidores de Cloudflare*. Lo conecté a la base mediante un **binding** llamado `DB`, *el nombre con el que el programa accede a ese recurso*.

El Worker atiende las consultas en esta dirección:

```text
/api/views?path=/ruta/de/la/pagina/
```

Una petición `GET` consulta el total y una petición `POST` suma una lectura y devuelve el nuevo valor. La ruta configurada en Cloudflare es `www.marchiori.ar/api/views*`: solo las solicitudes que coinciden con ella pasan por el Worker; las demás páginas siguen servidas como antes.

### Integración y recargas

La integración inicial quedó en `layouts/partials/extend-footer.html`. El JavaScript toma la ruta de la página con `window.location.pathname`, consulta el contador y agrega el resultado a la línea de fecha y tiempo de lectura.

Para evitar que cada recarga sume una visita, guarda una marca por página y por día en `localStorage`, *un espacio de almacenamiento del navegador que persiste entre visitas*. La clave tiene este formato:

```text
mn-view-/notas/politica-de-marca-blanca/-2026-09-07
```

Si la marca ya existe, consulta el total con `GET`; de lo contrario, envía un `POST`. Cambiar de navegador o borrar sus datos permite que se vuelva a contar: es una cuenta práctica de lecturas, no una medición de personas únicas.

En las pruebas con `localhost` no se consulta Cloudflare. El contador muestra `· — lecturas`; en el sitio publicado obtiene el valor almacenado en D1.

---

## Anexo: estructura de artículos, imágenes y AGENTS.md

El 04/10/2026 normalicé la estructura de las publicaciones para mantener cada texto junto a sus imágenes y archivos. Hasta entonces, encontrar un recurso podía depender de recordar cómo había organizado esa nota.

### Una carpeta por publicación

Las publicaciones de Notas, Labs, Escritos, Site Log y las entradas del Manual usan **page bundles**, *carpetas que reúnen una página de Hugo y sus recursos*. Para los artículos uso la variante *leaf*: el archivo `index.md` contiene la publicación individual, con sus imágenes al lado.

```text
content/
  notas/
    slug-de-la-nota/
      index.md
      featured.png
      imagen-interna.jpg
```

El **slug** es *el nombre corto y legible que identifica la página dentro de su dirección*. En `/notas/mi-primera-nota/`, es `mi-primera-nota`; en esta organización también da nombre a la carpeta.

Las secciones conservan `_index.md`, *el archivo que define una sección capaz de contener otras páginas*. Por ejemplo, `content/notas/_index.md` corresponde a la sección Notas. Reemplazarlo por `index.md` cambiaría la forma en que Hugo interpreta esa carpeta.

Al principio de cada Markdown está el **front matter**, *el bloque entre separadores `---` que guarda el título, la fecha y otras opciones de la página*. La mudanza a carpetas conserva esos datos y las direcciones publicadas.

### Portadas e imágenes para compartir

La portada estándar se llama `featured.png`. Congo reconoce los archivos cuyo nombre contiene `feature` y los usa para la portada y las miniaturas. Dejo una sola imagen con ese patrón por publicación y no la repito en el cuerpo del texto, porque el tema ya la muestra arriba.

Al estar dentro del bundle, la imagen es un **page resource**, *un archivo asociado a esa página que Hugo puede localizar y, si el formato lo permite, procesar*. Las imágenes internas se referencian por su nombre:

```markdown
![Descripción](imagen-interna.jpg)
```

Para compartir enlaces, la implementación ya presente en la copia local genera una variante de **1200 × 630 píxeles en JPEG, con calidad 82**, a partir de la imagen destacada. Usa un recorte automático (`Fill "1200x630 Smart jpg q82"`) para completar esas dimensiones, por lo que puede dejar fuera parte de los bordes. El `featured.png` original se conserva y la portada y las miniaturas mantienen su procesamiento habitual.

Esa variante se indica en **Open Graph**, *los datos de la página que servicios como WhatsApp, Facebook o LinkedIn usan para armar la vista previa de un enlace*, y en las tarjetas de Twitter/X. Las etiquetas `og:image` y `twitter:image` apuntan al mismo JPEG generado, mediante una dirección absoluta.

La lógica está en `layouts/_partials/social-images.html`; `opengraph.html` y `twitter_cards.html`, en esa misma carpeta, la usan para completar las etiquetas. Se aplica a páginas individuales con una imagen destacada que Hugo pueda procesar, incluidas las portadas antiguas en otros formatos compatibles. Si no encuentra una, conserva la selección habitual de imágenes de Hugo. No requiere guardar una segunda portada a mano ni modificar `themes/congo`.

Al revisar esta actualización, los tres archivos estaban en el repositorio local, todavía sin incorporar a Git. La generación está implementada localmente; su publicación queda pendiente de incorporar esos cambios y desplegarlos.

### Qué va en `content` y qué va en `static`

Los artículos y sus recursos propios van en `content`; las aplicaciones y los recursos generales, en `static`.

Apollo y CoyspuNET son aplicaciones completas con sus propios archivos, así que permanecen en `static/`. También quedan allí los iconos del clima y los datos del Panel, los iconos del sitio, los estilos y otros archivos compartidos. Las portadas de sección y los banners tampoco necesitan pertenecer a un artículo.

El banner animado de Labs dio un motivo concreto para conservar esa distinción. Al moverlo de `static` a `content`, Hugo/Congo empezó a tratar ese WebP como un recurso procesable y cambió su presentación. Volvió a verse correctamente al devolverlo a `static`. Para ese banner, y para los recursos animados que necesiten conservar su comportamiento original, mantuve la ubicación que funcionaba.

### Las convenciones en AGENTS.md

Agregué `AGENTS.md` en la raíz del repositorio como guía para los asistentes que trabajen sobre el sitio. Hugo no lo publica como una página.

Ahí quedan la organización de artículos y recursos, el uso de `featured.png` y su variante social, la función de `_index.md` y los cuidados al migrar contenido. También pide revisar el estado de Git antes de editar, comprobar las imágenes y sus etiquetas en el HTML generado, y mantener las personalizaciones fuera de `themes/congo`. El envío de cambios a GitHub requiere que lo pida expresamente.

Cuando vuelva sobre el sitio desde otra conversación o con otro asistente, esas decisiones estarán junto a los archivos sobre los que vamos a trabajar.
