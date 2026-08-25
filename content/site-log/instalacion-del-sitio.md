---
title: "Instalación del sitio personal con Hugo en Windows"
date: 2026-03-27T21:55:00-03:00
draft: false
description: "Primera nota del sitio: instalación de Hugo, Git, Congo y puesta en marcha local."
tags: ["hugo", "windows", "github", "sitio-personal"]
categories: ["Notas"]
---

**Actualización: 24/08/2026 — Hugo 0.165.0 y Congo 2.14.0**  
Meses después de la instalación original actualicé Hugo y Congo. [Ver anexo](#anexo-actualización-de-hugo-y-congo).

# Objetivo

Dejar funcionando un sitio personal con **Hugo en Windows**, usando **Git**, el tema **Congo** y publicación en **GitHub Pages**, dejando además el camino preparado para usar dominio propio más adelante.

## Punto de partida

El proceso empezó con estos objetivos:

- usar una plataforma abierta
- evitar servicios cerrados tipo Blogger
- mantener costo cero (o casi)
- escribir en Markdown
- tener un sitio limpio, legible y fácil de mantener
- dejar abierta la posibilidad de conectar dominio propio más adelante
- renegar un poco con casos prácticos para aprender la tecnología de verdad

## Entorno usado

- Windows
- Hugo Extended
- Git for Windows
- tema Congo
- asistencia de ChatGPT 5.4 Thinking, y algo de Gemini

## Proceso realizado

### 1. Instalación de Hugo

Primero descargué Hugo para Windows, dejé el ejecutable en una carpeta local y lo agregué al `PATH`.  
La verificación inicial fue con: `hugo version`  
Ese paso confirmó que Hugo ya estaba disponible desde la consola.

### 2. Instalación de Git

Después instalé **Git for Windows** y verifiqué la instalación con:  
`git --version`

Al principio usé Git Bash, pero para este trabajo terminé pasando a **CMD**, simplemente porque me resultó más cómodo para copiar y pegar comandos en Windows.

### 3. Creación del proyecto

Con Hugo funcionando, creé el proyecto inicial con:  
`hugo new project sitio-personal`

Después inicialicé Git dentro de la carpeta del proyecto con:  
`git init`

A partir de ahí ya tenía una base local sobre la cual empezar a trabajar.

### 4. Elección del tema

La elección del tema llevó más vueltas de las que parecía. Hubo discusión entre Gemini, ChatGPT y yo haciendo de árbitro, y la decisión final fue usar **Congo**.

Terminé eligiendo Congo por cuatro cosas que me cerraban bastante bien:  
- sobriedad
- flexibilidad
- soporte para notas, imágenes y esquemas
- mantenimiento razonable

No era el tema más básico, pero tampoco uno exageradamente cargado ni orientado a algo corporativo.

### 5. Instalación del tema

Una vez elegido, agregué Congo como submódulo del proyecto con:  
`git submodule add https://github.com/jpanther/congo.git themes/congo`

Con eso el tema quedó incorporado al repositorio sin mezclar su código directamente con el del sitio.

### 6. Cambio a Hugo Extended

La primera contrariedad apareció enseguida: **Congo requiere Hugo Extended**.

Yo había arrancado con la edición estándar de Hugo, así que tuve que reemplazarla por la versión **Extended** para que el tema pudiera compilar correctamente.

### 7. Configuración inicial

Después armé un `hugo.toml` mínimo para que el sitio arrancara con una configuración básica y usable.  
En esta etapa armé apenas una base funcional y dejé los ajustes finos para después.

### 8. Corrección de compatibilidad

La segunda contrariedad fue más concreta: apareció un error de compatibilidad entre la versión actual de Hugo y un **partial** (una plantilla reutilizable del tema) de Congo.

La solución aplicada fue anular localmente ese partial creando el archivo:  
`layouts/partials/functions/warnings.html`

vacío, para que el sitio pudiera renderizar sin romper. Fue la primera vez que tuve que sobrescribir localmente un partial para seguir adelante.

### 9. Prueba local

Una vez resueltos esos puntos, el sitio quedó levantado localmente con:  
`hugo server -D`

y accesible en:  
`http://localhost:1313/`

Ese `-D` fue importante porque permite ver también los contenidos que siguen marcados como borrador.

### 10. Publicación en GitHub

Con el sitio funcionando localmente, el paso siguiente fue inicializar el repositorio correctamente, hacer el primer commit y subir el proyecto a GitHub.

Después se configuró el despliegue con **GitHub Pages** usando **GitHub Actions**, de forma que cada `push` a la rama principal vuelva a compilar y publicar el sitio automáticamente.

### 11. Primera publicación visible en línea

Finalmente, el sitio quedó visible en línea en:  
`https://pablomarchiori.github.io/sitio-personal/`

El sitio ya estaba publicado y accesible desde Internet.

## 12. Ajuste visual final

Ya con el sitio funcionando, apareció un detalle menor pero molesto: el espaciado entre bullets dentro de las notas quedaba demasiado abierto.

Primero intenté resolverlo con un archivo `assets/css/custom.css`, pero en este caso no estaba siendo tomado por el tema como esperaba.

La solución que sí funcionó fue otra:  
- crear `static/css/custom.css`
- cargarlo explícitamente desde `layouts/partials/extend-head.html`

Con eso pude ajustar el espaciado de listas sin tocar el tema Congo directamente. También quedó resuelto así el primer ajuste visual del sitio sin modificar archivos propios del tema.

## Estado actual

En este punto, el sitio ya quedó:

- funcionando localmente
- publicado en GitHub Pages
- con una portada básica
- con la sección `Notas` visible
- con la primera nota publicada
- y con una base lista para seguir creciendo

## Qué sigue después

Quedaron pendientes:

- conectar el sitio con dominio propio
- ordenar mejor las secciones reales del sitio
- documentar cómo mantenerlo y publicar nuevas notas
- definir una estructura más estable para categorías y contenido

## Cierre

El sitio quedó funcionando, publicado y documentado.

Entre instalación, errores y correcciones ya había material suficiente como para empezar a dejar registro de cómo estaba armado.

Ahora hay que aprenderse esto! 😅  
`git add content\site-log\instalacion-del-sitio.md`  
`git commit -m "Actualizar nota de instalación del sitio"`  
`git push`

---

## Anexo: actualización de Hugo y Congo

El 24/08/2026 actualicé **Hugo Extended de 0.159.1 a 0.165.0**.

En Windows fue suficiente con reemplazar `hugo.exe` por la nueva versión Extended y verificarla con: `hugo version`

Al levantar nuevamente el sitio aparecieron varios warnings por parámetros `deprecated` (obsoletos y pendientes de retirada) desde Hugo 0.158.

El primero correspondía a la configuración del sitio. En `hugo.toml` cambié: `languageCode = "es-ar"` por: `locale = "es-AR"`

Los restantes venían de la versión de Congo que estaba usando. Como el tema está instalado como submódulo Git, entré en su carpeta: `cd themes\congo`

y después actualicé las referencias y lo llevé a **Congo v2.14.0**:  
`git fetch --tags`  
`git checkout v2.14.0`

Git mostró un aviso de `detached HEAD`, algo que parece normal en este caso porque el submódulo queda apuntando directamente al commit asociado al tag.

Congo v2.14.0 ya incorpora los cambios necesarios para las nuevas propiedades de idioma de Hugo. Después de actualizarlo, el sitio volvió a compilar sin warnings.

### GitHub Pages

Una vez actualizado Hugo en mi instalación local Actualizar de Windows, toca hacerlo en GitHub Actions.

La versión estaba definida en: `.github/workflows/hugo.yaml` con: `HUGO_VERSION: 0.159.1`  
y la cambié por: `HUGO_VERSION: 0.165.0`

En el primer intento escribí por error: `HUGO_VERSION: 0.165.1`

Y como esa versión no existía, GitHub Actions intentó descargar igualmente el archivo correspondiente y la instalación terminó con:  
`tar: This does not look like a tar archive`  
`gzip: stdin: not in gzip format`

El problema no estaba en `tar`: la URL apuntaba a una versión inexistente y `curl` había descargado una respuesta de error en lugar del `.tar.gz`.
Entonces corrigiendo solo: `0.165.1` por: `0.165.0`, el workflow volvió a ejecutar normalmente.

Y listo!, quedaron alineados los dos entornos: **Hugo 0.165.0 Extended + Congo 2.14.0**
