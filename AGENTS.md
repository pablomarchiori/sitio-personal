# Mirada Nerd — convenciones del repositorio

Estas instrucciones se aplican a todo el sitio. Complementan el criterio editorial del proyecto: voz cercana y sobria, hechos antes que valoraciones, una idea por párrafo y revisión de frases artificiales antes de entregar una nota.

## Artículos y recursos en Hugo/Congo

Crear cada artículo como un leaf page bundle:

```text
content/
  notas/
    slug-de-la-nota/
      index.md
      featured.png
      imagen-interna.jpg
```

Aplicar la misma estructura a Labs, Escritos, Site Log y las entradas del Manual, respetando la sección y las subsecciones correspondientes. Las páginas de sección conservan `_index.md`: no convertirlas a `index.md`, porque eso altera la jerarquía de Hugo.

La portada de las notas nuevas se llama `featured.png` y debe ser un PNG real. Si un recurso existente es JPEG, WebP o GIF, conservar su formato y extensión reales; no cambiar solamente la extensión para simular PNG. Una nota que no necesita imágenes puede tener sólo `index.md`.

Congo reconoce por defecto las imágenes cuyo nombre contiene `feature`. La imagen destacada sirve como miniatura del listado, portada dentro del artículo y recurso para compartir en redes. Tener una sola imagen que coincida con ese patrón en cada bundle. Las variantes auxiliares deben usar nombres descriptivos sin `feature`.

No hace falta declarar `feature` para una portada estándar. Usar `featureAlt` para describirla. No usar `featureInBody` ni agregar la portada otra vez al cuerpo del Markdown: Congo ya la muestra arriba. `coverCaption` es opcional y sólo se agrega si aporta información. Las plantillas personalizadas deben respetar el patrón `*feature*` y los recursos de la página.

Guardar las imágenes internas propias junto a `index.md` y usar referencias relativas:

```markdown
![Descripción concreta](imagen-interna.jpg)

[![Vista pequeña](captura-thumb.jpg)](captura-completa.jpg)
```

También usar rutas relativas en `src` y `href` de HTML cuando correspondan a recursos del bundle. Conservar textos alternativos, epígrafes, estilos y enlaces externos.

### Criterio general para `content` y `static`

Usar esta regla como criterio principal:

**artículos con sus imágenes y recursos propios en `content`; aplicaciones y recursos generales en `static`.**

Los artículos deben ser page bundles dentro de `content/`, con su `index.md` y las imágenes o archivos que pertenecen específicamente a esa publicación.

Reservar `static/` para contenido que no pertenece a un artículo concreto o que funciona como aplicación, recurso compartido o archivo independiente del sistema de contenido de Hugo.

Ejemplos actuales:

1. **Apollo y CoyspuNET:** sitios o aplicaciones completas, con sus propios HTML, scripts, imágenes y demás recursos. Deben permanecer en `static/`.
2. **Panel:** iconos del clima, archivos de datos y otros recursos usados por la aplicación. Deben permanecer en `static/`.
3. **Recursos generales del sitio:** favicons, manifiesto, CSS, archivos descargables compartidos y otros recursos globales también corresponden a `static/`.

No mover automáticamente recursos entre `content/` y `static/`. Antes de mover un archivo existente, comprobar cómo se referencia y si lo usa más de una página o aplicación.

## Al modificar o migrar artículos existentes

1. Leer siempre el Markdown actual del disco antes de editar: puede contener cambios recientes del usuario. Revisar también el estado de Git y preservar cambios previos.
2. Mover `content/seccion/slug.md` a `content/seccion/slug/index.md`, conservando el nombre de la carpeta y la URL publicada `/seccion/slug/`.
3. Preservar front matter, fechas, aliases, slug, url, contenido editorial y ejemplos de código. Cambiar únicamente estructura y referencias necesarias, salvo pedido editorial explícito.
4. No alterar `_index.md`, plantillas especiales ni recursos globales por una normalización de artículos. Ajustar una plantilla sólo si es necesario para respetar la convención de Congo.
5. Evitar diferencias de mayúsculas entre carpeta y slug: el despliegue usa Linux. Al corregir sólo mayúsculas en Windows, usar un nombre intermedio y verificar el cambio en Git.
6. No editar `themes/congo`, `public/` ni los archivos generados de `resources/`. Hacer personalizaciones necesarias en `layouts/`.

## Verificación y entrega

- Compilar con la versión de Hugo indicada en `.github/workflows/hugo.yaml`.
- Para migraciones, comparar las URLs antes y después, incluyendo aliases y páginas especiales.
- Comprobar en el HTML generado la miniatura, la portada, las imágenes internas y sus enlaces; verificar que los archivos correspondientes existan.
- Si hay fechas futuras, incluirlas sólo en la compilación de prueba con `--buildFuture`, sin cambiar las fechas ni el comportamiento del despliegue.
- Verificar que no cambió el contenido editorial fuera de las rutas autorizadas.
- Reportar movimientos, copias, renombrados, referencias modificadas y límites de la verificación. No publicar ni hacer push salvo que el usuario lo pida.
