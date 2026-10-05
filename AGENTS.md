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

Congo reconoce por defecto las imágenes cuyo nombre contiene `feature`. La imagen destacada sirve como miniatura del listado y portada dentro del artículo; también es la fuente de la variante optimizada para compartir en redes. Tener una sola imagen que coincida con ese patrón en cada bundle. Las variantes auxiliares guardadas manualmente en el bundle deben usar nombres descriptivos sin `feature`; esta regla no exige renombrar los derivados generados por Hugo.

No hace falta declarar `feature` para una portada estándar. Usar `featureAlt` para describirla. No usar `featureInBody` ni agregar la portada otra vez al cuerpo del Markdown: Congo ya la muestra arriba. `coverCaption` es opcional y sólo se agrega si aporta información. Las plantillas personalizadas deben respetar el patrón `*feature*` y los recursos de la página.

Guardar las imágenes internas propias junto a `index.md` y usar referencias relativas:

```markdown
![Descripción concreta](imagen-interna.jpg)

[![Vista pequeña](captura-thumb.jpg)](captura-completa.jpg)
```

También usar rutas relativas en `src` y `href` de HTML cuando correspondan a recursos del bundle. Conservar textos alternativos, epígrafes, estilos y enlaces externos.

### Page resources e imágenes sociales

Los archivos propios de un bundle son page resources: recursos asociados a esa página que las plantillas pueden localizar con `.Resources`. Hugo puede procesar los formatos de imagen compatibles; los archivos de `static/` se copian sin ese procesamiento. No trasladar un recurso compartido o animado sólo para hacerlo procesable sin comprobar antes sus usos y su comportamiento.

La implementación local en `layouts/_partials/social-images.html` obtiene `*feature*` en páginas individuales y genera una variante con `.Fill "1200x630 Smart jpg q82"`: JPEG de 1200 × 630 px, calidad 82 y recorte automático. Preservar el original y el procesamiento de portadas y miniaturas. Revisar el encuadre de la variante. No crear una segunda portada manual para este fin.

Los partials `layouts/_partials/opengraph.html` y `layouts/_partials/twitter_cards.html` deben usar esa misma variante en `og:image` y `twitter:image`, con URL absoluta. Sin una portada procesable, conservar la selección habitual mediante `_funcs/get-page-images`. Mantener estas personalizaciones en `layouts/`, sin editar Congo.

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
- Para páginas con portada procesable, verificar que `og:image` y `twitter:image` coincidan y apunten al JPEG generado, que el archivo exista y mida 1200 × 630 px, y que el original siga intacto. Comprobar también una página sin portada para verificar la selección alternativa. Distinguir implementación local de publicación efectiva.
- Si hay fechas futuras, incluirlas sólo en la compilación de prueba con `--buildFuture`, sin cambiar las fechas ni el comportamiento del despliegue.
- Verificar que no cambió el contenido editorial fuera de las rutas autorizadas.
- Reportar movimientos, copias, renombrados, referencias modificadas y límites de la verificación. No publicar ni hacer push salvo que el usuario lo pida.
