# Normalización de Hugo/Congo — 4 de octubre de 2026

Continuación de la prueba de Le Voyage dans la Lune. Se convirtieron otras 85 páginas a leaf page bundles; el sitio queda con 86 index.md y 13 _index.md de inicio/secciones. Se conservaron textos, front matter, fechas, aliases y URLs. Los cambios previos del usuario se tomaron del disco y se preservaron.

Se movieron 35 imágenes internas y se actualizaron sus 35 referencias. No hubo imágenes compartidas entre los archivos seleccionados: no hicieron falta copias. Los recursos generales y los ejemplos de código permanecen en su lugar.

## Verificación

- Hugo 0.167.0: compilación con --buildFuture correcta, sin advertencias de rutas duplicadas. No se modificaron las fechas ni la configuración del despliegue.
- Las 99 URLs del inventario de contenido de Hugo son idénticas antes y después; siguen existiendo todas las páginas HTML y aliases de la compilación anterior.
- Los 99 Markdown conservan el contenido editorial, excepto las referencias a imágenes enumeradas abajo.
- Se comprobaron 83 portadas y 83 miniaturas de 160 × 120 en el HTML generado, y 377 referencias locales a imágenes de las páginas individuales. Los archivos existen.
- Banco de guiños sigue siendo un borrador: su archivo y URL se verificaron; no se incluyó en la compilación pública de prueba.
- Los archivos de imagen conservan sus bytes originales. No se hizo commit, push ni despliegue.

## Plantillas y convenciones

- AGENTS.md, en la raíz del repositorio, contiene la convención para futuras notas.
- layouts/escritos/single.html ahora usa el patrón estándar *feature*, compatible con featured.png.
- layouts/single.html ya no consulta featureInBody; la portada se muestra con el comportamiento de Congo.
- Se renombraron 32 portadas feature.png a featured.png. La portada JPEG de Chat conserva featured.jpg y su formato real.
- instalacion-del-sitio/feature_large.png pasó a portada-grande.png; toc/featured.gif pasó a toc-animado.gif. Se conservan ambas variantes auxiliares; cada bundle tiene una sola portada reconocible por Congo.
- La carpeta content/site-log/como-armar-publicaciones-site-log-Hugo se normalizó a como-armar-publicaciones-site-log-hugo mediante un nombre intermedio para registrar correctamente las minúsculas en Windows/Linux.

## Archivos movidos o renombrados

Rutas relativas a la raíz del repositorio. La prueba previa de Le Voyage dans la Lune no está incluida en esta tabla.

| Origen | Destino |
|---|---|
| content/about.md | content/about/index.md |
| static/images/home/touched.png | content/about/touched.png |
| content/panel-modern.md | content/panel-modern/index.md |
| content/escritos/brisa-de-esperanza.md | content/escritos/brisa-de-esperanza/index.md |
| content/escritos/brisa-de-esperanza/feature.png | content/escritos/brisa-de-esperanza/featured.png |
| content/escritos/capullitos.md | content/escritos/capullitos/index.md |
| content/escritos/capullitos/feature.png | content/escritos/capullitos/featured.png |
| content/escritos/estrella-de-ojos-claros.md | content/escritos/estrella-de-ojos-claros/index.md |
| content/escritos/estrella-de-ojos-claros/feature.png | content/escritos/estrella-de-ojos-claros/featured.png |
| content/escritos/fabrica-de-heroes.md | content/escritos/fabrica-de-heroes/index.md |
| content/escritos/fabrica-de-heroes/feature.png | content/escritos/fabrica-de-heroes/featured.png |
| content/escritos/locura-invernal.md | content/escritos/locura-invernal/index.md |
| content/escritos/locura-invernal/feature.png | content/escritos/locura-invernal/featured.png |
| content/escritos/observador-117.md | content/escritos/observador-117/index.md |
| content/escritos/observador-117/feature.png | content/escritos/observador-117/featured.png |
| content/escritos/reconfortante.md | content/escritos/reconfortante/index.md |
| content/escritos/reconfortante/feature.png | content/escritos/reconfortante/featured.png |
| content/escritos/sigo-esperando-el-momento.md | content/escritos/sigo-esperando-el-momento/index.md |
| content/escritos/sigo-esperando-el-momento/feature.png | content/escritos/sigo-esperando-el-momento/featured.png |
| content/escritos/tomo-su-mano-y-la-cobijo.md | content/escritos/tomo-su-mano-y-la-cobijo/index.md |
| content/escritos/tomo-su-mano-y-la-cobijo/feature.png | content/escritos/tomo-su-mano-y-la-cobijo/featured.png |
| content/escritos/tu-rostro.md | content/escritos/tu-rostro/index.md |
| content/escritos/tu-rostro/feature.png | content/escritos/tu-rostro/featured.png |
| content/escritos/tu-sonrisa.md | content/escritos/tu-sonrisa/index.md |
| content/escritos/tu-sonrisa/feature.png | content/escritos/tu-sonrisa/featured.png |
| content/escritos/tus-fantasmas.md | content/escritos/tus-fantasmas/index.md |
| content/escritos/tus-fantasmas/feature.png | content/escritos/tus-fantasmas/featured.png |
| content/labs/coyspunet-asp-web-vieja.md | content/labs/coyspunet-asp-web-vieja/index.md |
| content/labs/coyspunet-asp-web-vieja/feature.png | content/labs/coyspunet-asp-web-vieja/featured.png |
| content/labs/navegando-apollo-con-el-mouse.md | content/labs/navegando-apollo-con-el-mouse/index.md |
| static/images/notas/luna/artemis-ii-cockpit.webp | content/labs/navegando-apollo-con-el-mouse/artemis-ii-cockpit.webp |
| static/images/notas/luna/star-trek-original-series-control.jpg | content/labs/navegando-apollo-con-el-mouse/star-trek-original-series-control.jpg |
| static/images/notas/luna/apollo-Guidance-computer.jpg | content/labs/navegando-apollo-con-el-mouse/apollo-Guidance-computer.jpg |
| static/images/notas/luna/gumdrop-spider.png | content/labs/navegando-apollo-con-el-mouse/gumdrop-spider.png |
| content/labs/navegando-apollo-con-el-mouse/feature.png | content/labs/navegando-apollo-con-el-mouse/featured.png |
| content/labs/panel-tablet-vieja.md | content/labs/panel-tablet-vieja/index.md |
| static/images/labs/panel-tablet-cx-boreal-ii.png | content/labs/panel-tablet-vieja/panel-tablet-cx-boreal-ii.png |
| static/images/labs/panel-tablet-cx-boreal-ii-thumb.png | content/labs/panel-tablet-vieja/panel-tablet-cx-boreal-ii-thumb.png |
| static/images/notas/homero-momento.png | content/labs/panel-tablet-vieja/homero-momento.png |
| content/labs/panel-tablet-vieja/feature.png | content/labs/panel-tablet-vieja/featured.png |
| content/labs/restaurar-fotos-viejas-con-ia-entre-mejorar-e-inventar.md | content/labs/restaurar-fotos-viejas-con-ia-entre-mejorar-e-inventar/index.md |
| static/images/labs/restaurar-fotos-viejas-gemini-familia-prompt2-thumb.jpg | content/labs/restaurar-fotos-viejas-con-ia-entre-mejorar-e-inventar/restaurar-fotos-viejas-gemini-familia-prompt2-thumb.jpg |
| static/images/labs/restaurar-fotos-viejas-gemini-familia-prompt2-full.png | content/labs/restaurar-fotos-viejas-con-ia-entre-mejorar-e-inventar/restaurar-fotos-viejas-gemini-familia-prompt2-full.png |
| static/images/labs/restaurar-fotos-viejas-gemini-familia-prompt1-thumb.jpg | content/labs/restaurar-fotos-viejas-con-ia-entre-mejorar-e-inventar/restaurar-fotos-viejas-gemini-familia-prompt1-thumb.jpg |
| static/images/labs/restaurar-fotos-viejas-gemini-familia-prompt1-full.png | content/labs/restaurar-fotos-viejas-con-ia-entre-mejorar-e-inventar/restaurar-fotos-viejas-gemini-familia-prompt1-full.png |
| static/images/labs/restaurar-fotos-viejas-gemini-familia-original-thumb.jpg | content/labs/restaurar-fotos-viejas-con-ia-entre-mejorar-e-inventar/restaurar-fotos-viejas-gemini-familia-original-thumb.jpg |
| static/images/labs/restaurar-fotos-viejas-gemini-familia-original-full.jpg | content/labs/restaurar-fotos-viejas-con-ia-entre-mejorar-e-inventar/restaurar-fotos-viejas-gemini-familia-original-full.jpg |
| static/images/labs/restaurar-fotos-viejas-gemini-abuelos-restaurada-thumb.jpg | content/labs/restaurar-fotos-viejas-con-ia-entre-mejorar-e-inventar/restaurar-fotos-viejas-gemini-abuelos-restaurada-thumb.jpg |
| static/images/labs/restaurar-fotos-viejas-gemini-abuelos-restaurada-full.png | content/labs/restaurar-fotos-viejas-con-ia-entre-mejorar-e-inventar/restaurar-fotos-viejas-gemini-abuelos-restaurada-full.png |
| static/images/labs/restaurar-fotos-viejas-gemini-abuelos-original-thumb.jpg | content/labs/restaurar-fotos-viejas-con-ia-entre-mejorar-e-inventar/restaurar-fotos-viejas-gemini-abuelos-original-thumb.jpg |
| static/images/labs/restaurar-fotos-viejas-gemini-abuelos-original-full.jpg | content/labs/restaurar-fotos-viejas-con-ia-entre-mejorar-e-inventar/restaurar-fotos-viejas-gemini-abuelos-original-full.jpg |
| content/labs/restaurar-fotos-viejas-con-ia-entre-mejorar-e-inventar/feature.png | content/labs/restaurar-fotos-viejas-con-ia-entre-mejorar-e-inventar/featured.png |
| content/labs/traductor-linkedin.md | content/labs/traductor-linkedin/index.md |
| content/labs/traductor-linkedin/feature.png | content/labs/traductor-linkedin/featured.png |
| content/manual-de-supervivencia-linguistica/banco-de-guiños.md | content/manual-de-supervivencia-linguistica/banco-de-guiños/index.md |
| content/manual-de-supervivencia-linguistica/anglicismos-y-calcos/alien.md | content/manual-de-supervivencia-linguistica/anglicismos-y-calcos/alien/index.md |
| content/manual-de-supervivencia-linguistica/anglicismos-y-calcos/aplicar.md | content/manual-de-supervivencia-linguistica/anglicismos-y-calcos/aplicar/index.md |
| content/manual-de-supervivencia-linguistica/anglicismos-y-calcos/bizarro.md | content/manual-de-supervivencia-linguistica/anglicismos-y-calcos/bizarro/index.md |
| content/manual-de-supervivencia-linguistica/anglicismos-y-calcos/call.md | content/manual-de-supervivencia-linguistica/anglicismos-y-calcos/call/index.md |
| content/manual-de-supervivencia-linguistica/anglicismos-y-calcos/chat.md | content/manual-de-supervivencia-linguistica/anglicismos-y-calcos/chat/index.md |
| content/manual-de-supervivencia-linguistica/anglicismos-y-calcos/empujar.md | content/manual-de-supervivencia-linguistica/anglicismos-y-calcos/empujar/index.md |
| content/manual-de-supervivencia-linguistica/anglicismos-y-calcos/empujar/feature.png | content/manual-de-supervivencia-linguistica/anglicismos-y-calcos/empujar/featured.png |
| content/manual-de-supervivencia-linguistica/anglicismos-y-calcos/eventualmente.md | content/manual-de-supervivencia-linguistica/anglicismos-y-calcos/eventualmente/index.md |
| content/manual-de-supervivencia-linguistica/anglicismos-y-calcos/induccion.md | content/manual-de-supervivencia-linguistica/anglicismos-y-calcos/induccion/index.md |
| content/manual-de-supervivencia-linguistica/anglicismos-y-calcos/masivo.md | content/manual-de-supervivencia-linguistica/anglicismos-y-calcos/masivo/index.md |
| content/manual-de-supervivencia-linguistica/anglicismos-y-calcos/masivo/feature.png | content/manual-de-supervivencia-linguistica/anglicismos-y-calcos/masivo/featured.png |
| content/manual-de-supervivencia-linguistica/comodines-morales-o-sociales/cancelar.md | content/manual-de-supervivencia-linguistica/comodines-morales-o-sociales/cancelar/index.md |
| content/manual-de-supervivencia-linguistica/comodines-morales-o-sociales/empatia.md | content/manual-de-supervivencia-linguistica/comodines-morales-o-sociales/empatia/index.md |
| content/manual-de-supervivencia-linguistica/comodines-morales-o-sociales/empoderar.md | content/manual-de-supervivencia-linguistica/comodines-morales-o-sociales/empoderar/index.md |
| content/manual-de-supervivencia-linguistica/comodines-morales-o-sociales/narrativa.md | content/manual-de-supervivencia-linguistica/comodines-morales-o-sociales/narrativa/index.md |
| content/manual-de-supervivencia-linguistica/comodines-morales-o-sociales/normalizar.md | content/manual-de-supervivencia-linguistica/comodines-morales-o-sociales/normalizar/index.md |
| content/manual-de-supervivencia-linguistica/comodines-morales-o-sociales/opresor.md | content/manual-de-supervivencia-linguistica/comodines-morales-o-sociales/opresor/index.md |
| content/manual-de-supervivencia-linguistica/comodines-morales-o-sociales/privilegio.md | content/manual-de-supervivencia-linguistica/comodines-morales-o-sociales/privilegio/index.md |
| content/manual-de-supervivencia-linguistica/comodines-morales-o-sociales/visibilizar.md | content/manual-de-supervivencia-linguistica/comodines-morales-o-sociales/visibilizar/index.md |
| content/manual-de-supervivencia-linguistica/hiperbole-y-vaciamiento/epico.md | content/manual-de-supervivencia-linguistica/hiperbole-y-vaciamiento/epico/index.md |
| content/manual-de-supervivencia-linguistica/hiperbole-y-vaciamiento/legendario.md | content/manual-de-supervivencia-linguistica/hiperbole-y-vaciamiento/legendario/index.md |
| content/manual-de-supervivencia-linguistica/hiperbole-y-vaciamiento/literalmente.md | content/manual-de-supervivencia-linguistica/hiperbole-y-vaciamiento/literalmente/index.md |
| content/manual-de-supervivencia-linguistica/jerga-digital-y-memetica/chad.md | content/manual-de-supervivencia-linguistica/jerga-digital-y-memetica/chad/index.md |
| content/manual-de-supervivencia-linguistica/jerga-digital-y-memetica/clickbait.md | content/manual-de-supervivencia-linguistica/jerga-digital-y-memetica/clickbait/index.md |
| content/manual-de-supervivencia-linguistica/jerga-digital-y-memetica/cringe.md | content/manual-de-supervivencia-linguistica/jerga-digital-y-memetica/cringe/index.md |
| content/manual-de-supervivencia-linguistica/jerga-digital-y-memetica/cringe/feature.png | content/manual-de-supervivencia-linguistica/jerga-digital-y-memetica/cringe/featured.png |
| content/manual-de-supervivencia-linguistica/jerga-digital-y-memetica/default.md | content/manual-de-supervivencia-linguistica/jerga-digital-y-memetica/default/index.md |
| content/manual-de-supervivencia-linguistica/jerga-digital-y-memetica/facto.md | content/manual-de-supervivencia-linguistica/jerga-digital-y-memetica/facto/index.md |
| content/manual-de-supervivencia-linguistica/jerga-digital-y-memetica/facto/feature.png | content/manual-de-supervivencia-linguistica/jerga-digital-y-memetica/facto/featured.png |
| content/manual-de-supervivencia-linguistica/jerga-digital-y-memetica/feed.md | content/manual-de-supervivencia-linguistica/jerga-digital-y-memetica/feed/index.md |
| content/manual-de-supervivencia-linguistica/jerga-digital-y-memetica/goat.md | content/manual-de-supervivencia-linguistica/jerga-digital-y-memetica/goat/index.md |
| content/manual-de-supervivencia-linguistica/jerga-digital-y-memetica/like.md | content/manual-de-supervivencia-linguistica/jerga-digital-y-memetica/like/index.md |
| content/manual-de-supervivencia-linguistica/jerga-digital-y-memetica/postear.md | content/manual-de-supervivencia-linguistica/jerga-digital-y-memetica/postear/index.md |
| content/manual-de-supervivencia-linguistica/jerga-digital-y-memetica/pov.md | content/manual-de-supervivencia-linguistica/jerga-digital-y-memetica/pov/index.md |
| content/manual-de-supervivencia-linguistica/jerga-digital-y-memetica/scrollear.md | content/manual-de-supervivencia-linguistica/jerga-digital-y-memetica/scrollear/index.md |
| content/manual-de-supervivencia-linguistica/otros-desvios/energia.md | content/manual-de-supervivencia-linguistica/otros-desvios/energia/index.md |
| content/manual-de-supervivencia-linguistica/otros-desvios/instantaneo.md | content/manual-de-supervivencia-linguistica/otros-desvios/instantaneo/index.md |
| content/manual-de-supervivencia-linguistica/otros-desvios/karma.md | content/manual-de-supervivencia-linguistica/otros-desvios/karma/index.md |
| content/manual-de-supervivencia-linguistica/otros-desvios/ocupar.md | content/manual-de-supervivencia-linguistica/otros-desvios/ocupar/index.md |
| content/manual-de-supervivencia-linguistica/patologizacion-de-lo-cotidiano/ansiedad.md | content/manual-de-supervivencia-linguistica/patologizacion-de-lo-cotidiano/ansiedad/index.md |
| content/manual-de-supervivencia-linguistica/patologizacion-de-lo-cotidiano/depresion.md | content/manual-de-supervivencia-linguistica/patologizacion-de-lo-cotidiano/depresion/index.md |
| content/manual-de-supervivencia-linguistica/patologizacion-de-lo-cotidiano/disociado.md | content/manual-de-supervivencia-linguistica/patologizacion-de-lo-cotidiano/disociado/index.md |
| content/manual-de-supervivencia-linguistica/patologizacion-de-lo-cotidiano/panico.md | content/manual-de-supervivencia-linguistica/patologizacion-de-lo-cotidiano/panico/index.md |
| content/manual-de-supervivencia-linguistica/patologizacion-de-lo-cotidiano/toc.md | content/manual-de-supervivencia-linguistica/patologizacion-de-lo-cotidiano/toc/index.md |
| content/manual-de-supervivencia-linguistica/patologizacion-de-lo-cotidiano/trauma.md | content/manual-de-supervivencia-linguistica/patologizacion-de-lo-cotidiano/trauma/index.md |
| content/manual-de-supervivencia-linguistica/tecnicismos-inflados/aplicativo.md | content/manual-de-supervivencia-linguistica/tecnicismos-inflados/aplicativo/index.md |
| content/manual-de-supervivencia-linguistica/tecnicismos-inflados/intervenir.md | content/manual-de-supervivencia-linguistica/tecnicismos-inflados/intervenir/index.md |
| content/notas/cronica-de-una-liberación-intelectual.md | content/notas/cronica-de-una-liberación-intelectual/index.md |
| content/notas/cronica-de-una-liberación-intelectual/feature.png | content/notas/cronica-de-una-liberación-intelectual/featured.png |
| content/notas/el-abanderado-desde-abajo-del-palco.md | content/notas/el-abanderado-desde-abajo-del-palco/index.md |
| content/notas/el-abanderado-desde-abajo-del-palco/feature.png | content/notas/el-abanderado-desde-abajo-del-palco/featured.png |
| content/notas/el-software-te-lo-regalo-con-chimi-y-otros-cuentos-de-hadas.md | content/notas/el-software-te-lo-regalo-con-chimi-y-otros-cuentos-de-hadas/index.md |
| static/images/notas/varias/windows-gratis-cuentos-de-hadas-backup.jpg | content/notas/el-software-te-lo-regalo-con-chimi-y-otros-cuentos-de-hadas/windows-gratis-cuentos-de-hadas-backup.jpg |
| static/images/notas/varias/windows-gratis-cuentos-de-hadas-actualizaciones.png | content/notas/el-software-te-lo-regalo-con-chimi-y-otros-cuentos-de-hadas/windows-gratis-cuentos-de-hadas-actualizaciones.png |
| static/images/notas/varias/windows-gratis-cuentos-de-hadas-herramientas.png | content/notas/el-software-te-lo-regalo-con-chimi-y-otros-cuentos-de-hadas/windows-gratis-cuentos-de-hadas-herramientas.png |
| static/images/notas/varias/windows-gratis-cuentos-de-hadas-copiando-al-disco.png | content/notas/el-software-te-lo-regalo-con-chimi-y-otros-cuentos-de-hadas/windows-gratis-cuentos-de-hadas-copiando-al-disco.png |
| content/notas/el-software-te-lo-regalo-con-chimi-y-otros-cuentos-de-hadas/feature.png | content/notas/el-software-te-lo-regalo-con-chimi-y-otros-cuentos-de-hadas/featured.png |
| content/notas/infraestructura-y-prejuicio.md | content/notas/infraestructura-y-prejuicio/index.md |
| static/images/notas/varias/richmond-avenal.jpg | content/notas/infraestructura-y-prejuicio/richmond-avenal.jpg |
| static/images/notas/varias/abraham-simpson.jpg | content/notas/infraestructura-y-prejuicio/abraham-simpson.jpg |
| content/notas/infraestructura-y-prejuicio/feature.png | content/notas/infraestructura-y-prejuicio/featured.png |
| content/notas/la-fisica-del-espacio-real-y-el-cine.md | content/notas/la-fisica-del-espacio-real-y-el-cine/index.md |
| static/images/notas/fisica/fisica-espacio-the-expanse.jpg | content/notas/la-fisica-del-espacio-real-y-el-cine/fisica-espacio-the-expanse.jpg |
| static/images/notas/fisica/fisica-espacio-warp-curvatura.jpg | content/notas/la-fisica-del-espacio-real-y-el-cine/fisica-espacio-warp-curvatura.jpg |
| static/images/notas/fisica/fisica-espacio-estacion-rotatoria.jpg | content/notas/la-fisica-del-espacio-real-y-el-cine/fisica-espacio-estacion-rotatoria.jpg |
| static/images/notas/fisica/fisica-espacio-tv-retro.jpg | content/notas/la-fisica-del-espacio-real-y-el-cine/fisica-espacio-tv-retro.jpg |
| content/notas/la-fisica-del-espacio-real-y-el-cine/feature.png | content/notas/la-fisica-del-espacio-real-y-el-cine/featured.png |
| content/notas/ordenando-mi-biblioteca-digital-con-codex.md | content/notas/ordenando-mi-biblioteca-digital-con-codex/index.md |
| static/images/notas/ordenando-mi-biblioteca-digital-con-codex-calibre.png | content/notas/ordenando-mi-biblioteca-digital-con-codex/ordenando-mi-biblioteca-digital-con-codex-calibre.png |
| content/notas/ordenando-mi-biblioteca-digital-con-codex/feature.png | content/notas/ordenando-mi-biblioteca-digital-con-codex/featured.png |
| content/notas/politica-de-marca-blanca.md | content/notas/politica-de-marca-blanca/index.md |
| static/images/notas/politica_de_marca_blanca_secundaria.png | content/notas/politica-de-marca-blanca/politica_de_marca_blanca_secundaria.png |
| static/images/notas/politica_de_marca_blanca_esquina_thumb.png | content/notas/politica-de-marca-blanca/politica_de_marca_blanca_esquina_thumb.png |
| static/images/notas/politica_de_marca_blanca_esquina.png | content/notas/politica-de-marca-blanca/politica_de_marca_blanca_esquina.png |
| content/notas/politica-de-marca-blanca/feature.png | content/notas/politica-de-marca-blanca/featured.png |
| content/notas/starlink-internet-satelital.md | content/notas/starlink-internet-satelital/index.md |
| static/images/notas/starlink/starlink_campo.jpg | content/notas/starlink-internet-satelital/starlink_campo.jpg |
| static/images/notas/starlink/falcon9_launch.webp | content/notas/starlink-internet-satelital/falcon9_launch.webp |
| static/images/notas/starlink/leo_meo_geo_orbits.png | content/notas/starlink-internet-satelital/leo_meo_geo_orbits.png |
| content/notas/starlink-internet-satelital/feature.png | content/notas/starlink-internet-satelital/featured.png |
| content/site-log/cloudflare-analytics-activacion.md | content/site-log/cloudflare-analytics-activacion/index.md |
| content/site-log/como-armar-publicaciones-site-log-hugo.md | content/site-log/como-armar-publicaciones-site-log-hugo/index.md |
| content/site-log/google-search-console.md | content/site-log/google-search-console/index.md |
| content/site-log/hardening-del-sitio-en-cloudflare.md | content/site-log/hardening-del-sitio-en-cloudflare/index.md |
| content/site-log/hugo-el-quisquilloso.md | content/site-log/hugo-el-quisquilloso/index.md |
| content/site-log/instalacion-del-sitio.md | content/site-log/instalacion-del-sitio/index.md |
| content/site-log/instalacion-del-sitio/feature.png | content/site-log/instalacion-del-sitio/featured.png |
| content/site-log/instalacion-dominio-dns.md | content/site-log/instalacion-dominio-dns/index.md |
| content/site-log/linkedin-translador.md | content/site-log/linkedin-translador/index.md |
| content/site-log/linkedin-translador/feature.png | content/site-log/linkedin-translador/featured.png |
| content/site-log/migracion-dns-cloudflare.md | content/site-log/migracion-dns-cloudflare/index.md |
| content/site-log/orden-alfabetico-secciones-listados-manuales.md | content/site-log/orden-alfabetico-secciones-listados-manuales/index.md |
| content/site-log/publicacion-y-mantenimiento-del-sitio.md | content/site-log/publicacion-y-mantenimiento-del-sitio/index.md |
| content/site-log/quince-anos-despues-de-blogger-a-github.md | content/site-log/quince-anos-despues-de-blogger-a-github/index.md |
| content/site-log/rescate-de-tablet-con-panel.md | content/site-log/rescate-de-tablet-con-panel/index.md |
| content/site-log/seccion-escritos.md | content/site-log/seccion-escritos/index.md |
| content/site-log/seccion-escritos/feature.png | content/site-log/seccion-escritos/featured.png |
| content/site-log/instalacion-del-sitio/feature_large.png | content/site-log/instalacion-del-sitio/portada-grande.png |
| content/manual-de-supervivencia-linguistica/patologizacion-de-lo-cotidiano/toc/featured.gif | content/manual-de-supervivencia-linguistica/patologizacion-de-lo-cotidiano/toc/toc-animado.gif |

## Referencias cambiadas

| Markdown | Antes | Después |
|---|---|---|
| content/about/index.md | /images/home/touched.png | touched.png |
| content/labs/navegando-apollo-con-el-mouse/index.md | /images/notas/luna/artemis-ii-cockpit.webp | artemis-ii-cockpit.webp |
| content/labs/navegando-apollo-con-el-mouse/index.md | /images/notas/luna/star-trek-original-series-control.jpg | star-trek-original-series-control.jpg |
| content/labs/navegando-apollo-con-el-mouse/index.md | /images/notas/luna/apollo-Guidance-computer.jpg | apollo-Guidance-computer.jpg |
| content/labs/navegando-apollo-con-el-mouse/index.md | /images/notas/luna/gumdrop-spider.png | gumdrop-spider.png |
| content/labs/panel-tablet-vieja/index.md | /images/labs/panel-tablet-cx-boreal-ii.png | panel-tablet-cx-boreal-ii.png |
| content/labs/panel-tablet-vieja/index.md | /images/labs/panel-tablet-cx-boreal-ii-thumb.png | panel-tablet-cx-boreal-ii-thumb.png |
| content/labs/panel-tablet-vieja/index.md | /images/notas/homero-momento.png | homero-momento.png |
| content/labs/restaurar-fotos-viejas-con-ia-entre-mejorar-e-inventar/index.md | /images/labs/restaurar-fotos-viejas-gemini-familia-prompt2-thumb.jpg | restaurar-fotos-viejas-gemini-familia-prompt2-thumb.jpg |
| content/labs/restaurar-fotos-viejas-con-ia-entre-mejorar-e-inventar/index.md | /images/labs/restaurar-fotos-viejas-gemini-familia-prompt2-full.png | restaurar-fotos-viejas-gemini-familia-prompt2-full.png |
| content/labs/restaurar-fotos-viejas-con-ia-entre-mejorar-e-inventar/index.md | /images/labs/restaurar-fotos-viejas-gemini-familia-prompt1-thumb.jpg | restaurar-fotos-viejas-gemini-familia-prompt1-thumb.jpg |
| content/labs/restaurar-fotos-viejas-con-ia-entre-mejorar-e-inventar/index.md | /images/labs/restaurar-fotos-viejas-gemini-familia-prompt1-full.png | restaurar-fotos-viejas-gemini-familia-prompt1-full.png |
| content/labs/restaurar-fotos-viejas-con-ia-entre-mejorar-e-inventar/index.md | /images/labs/restaurar-fotos-viejas-gemini-familia-original-thumb.jpg | restaurar-fotos-viejas-gemini-familia-original-thumb.jpg |
| content/labs/restaurar-fotos-viejas-con-ia-entre-mejorar-e-inventar/index.md | /images/labs/restaurar-fotos-viejas-gemini-familia-original-full.jpg | restaurar-fotos-viejas-gemini-familia-original-full.jpg |
| content/labs/restaurar-fotos-viejas-con-ia-entre-mejorar-e-inventar/index.md | /images/labs/restaurar-fotos-viejas-gemini-abuelos-restaurada-thumb.jpg | restaurar-fotos-viejas-gemini-abuelos-restaurada-thumb.jpg |
| content/labs/restaurar-fotos-viejas-con-ia-entre-mejorar-e-inventar/index.md | /images/labs/restaurar-fotos-viejas-gemini-abuelos-restaurada-full.png | restaurar-fotos-viejas-gemini-abuelos-restaurada-full.png |
| content/labs/restaurar-fotos-viejas-con-ia-entre-mejorar-e-inventar/index.md | /images/labs/restaurar-fotos-viejas-gemini-abuelos-original-thumb.jpg | restaurar-fotos-viejas-gemini-abuelos-original-thumb.jpg |
| content/labs/restaurar-fotos-viejas-con-ia-entre-mejorar-e-inventar/index.md | /images/labs/restaurar-fotos-viejas-gemini-abuelos-original-full.jpg | restaurar-fotos-viejas-gemini-abuelos-original-full.jpg |
| content/notas/el-software-te-lo-regalo-con-chimi-y-otros-cuentos-de-hadas/index.md | /images/notas/varias/windows-gratis-cuentos-de-hadas-backup.jpg | windows-gratis-cuentos-de-hadas-backup.jpg |
| content/notas/el-software-te-lo-regalo-con-chimi-y-otros-cuentos-de-hadas/index.md | /images/notas/varias/windows-gratis-cuentos-de-hadas-actualizaciones.png | windows-gratis-cuentos-de-hadas-actualizaciones.png |
| content/notas/el-software-te-lo-regalo-con-chimi-y-otros-cuentos-de-hadas/index.md | /images/notas/varias/windows-gratis-cuentos-de-hadas-herramientas.png | windows-gratis-cuentos-de-hadas-herramientas.png |
| content/notas/el-software-te-lo-regalo-con-chimi-y-otros-cuentos-de-hadas/index.md | /images/notas/varias/windows-gratis-cuentos-de-hadas-copiando-al-disco.png | windows-gratis-cuentos-de-hadas-copiando-al-disco.png |
| content/notas/infraestructura-y-prejuicio/index.md | /images/notas/varias/richmond-avenal.jpg | richmond-avenal.jpg |
| content/notas/infraestructura-y-prejuicio/index.md | /images/notas/varias/abraham-simpson.jpg | abraham-simpson.jpg |
| content/notas/la-fisica-del-espacio-real-y-el-cine/index.md | /images/notas/fisica/fisica-espacio-the-expanse.jpg | fisica-espacio-the-expanse.jpg |
| content/notas/la-fisica-del-espacio-real-y-el-cine/index.md | /images/notas/fisica/fisica-espacio-warp-curvatura.jpg | fisica-espacio-warp-curvatura.jpg |
| content/notas/la-fisica-del-espacio-real-y-el-cine/index.md | /images/notas/fisica/fisica-espacio-estacion-rotatoria.jpg | fisica-espacio-estacion-rotatoria.jpg |
| content/notas/la-fisica-del-espacio-real-y-el-cine/index.md | /images/notas/fisica/fisica-espacio-tv-retro.jpg | fisica-espacio-tv-retro.jpg |
| content/notas/ordenando-mi-biblioteca-digital-con-codex/index.md | /images/notas/ordenando-mi-biblioteca-digital-con-codex-calibre.png | ordenando-mi-biblioteca-digital-con-codex-calibre.png |
| content/notas/politica-de-marca-blanca/index.md | /images/notas/politica_de_marca_blanca_secundaria.png | politica_de_marca_blanca_secundaria.png |
| content/notas/politica-de-marca-blanca/index.md | /images/notas/politica_de_marca_blanca_esquina_thumb.png | politica_de_marca_blanca_esquina_thumb.png |
| content/notas/politica-de-marca-blanca/index.md | /images/notas/politica_de_marca_blanca_esquina.png | politica_de_marca_blanca_esquina.png |
| content/notas/starlink-internet-satelital/index.md | /images/notas/starlink/starlink_campo.jpg | starlink_campo.jpg |
| content/notas/starlink-internet-satelital/index.md | /images/notas/starlink/falcon9_launch.webp | falcon9_launch.webp |
| content/notas/starlink-internet-satelital/index.md | /images/notas/starlink/leo_meo_geo_orbits.png | leo_meo_geo_orbits.png |

## Limpieza posterior de duplicados

Se compararon imágenes por SHA-256 y se buscaron referencias por nombre en el código fuente. Se eliminaron sólo copias idénticas de static/images sin referencias; las versiones de content se conservaron.

- Eliminado: static/images/escritos/brisa-de-esperanza.png
- Eliminado: static/images/escritos/capullitos.png
- Eliminado: static/images/escritos/estrella-de-ojos-claros.png
- Eliminado: static/images/escritos/fabrica-de-heroes.png
- Conservado por referencias existentes: static/images/escritos/index.png
- Eliminado: static/images/escritos/locura-invernal.png
- Eliminado: static/images/escritos/observador_117_portada.png
- Eliminado: static/images/escritos/reconfortante.png
- Eliminado: static/images/escritos/sigo-esperando-el-momento.png
- Eliminado: static/images/escritos/tomo-su-mano-y-la-cobijo.png
- Eliminado: static/images/escritos/tu-rostro.png
- Eliminado: static/images/escritos/tu-sonrisa.png
- Eliminado: static/images/escritos/tus-fantasmas.png
- Eliminado: static/images/labs/restaurar-fotos-viejas-gemini-portada.png
- Eliminado: static/images/labs/traductor-linkedin-portada.png
- Eliminado: static/images/manual-de-supervivencia-linguistica/cringe_large.png
- Eliminado: static/images/manual-de-supervivencia-linguistica/massive_pushing_large.png
- Eliminado: static/images/notas/cronica-de-una-liberacion-intelectual-portada.png
- Eliminado: static/images/notas/el-abanderado-desde-abajo-del-palco.png
- Eliminado: static/images/notas/infraestructura-y-prejuicio-portada.png
- Eliminado: static/images/notas/ordenando-mi-biblioteca-digital-con-codex-portada.png
- Eliminado: static/images/notas/politica_de_marca_blanca_principal.png
- Eliminado: static/images/notas/windows-gratis-cuentos-de-hadas-directorios.png
- Eliminado: static/images/notas/luna/command-module-apollo-11.png

## Retiro de static por pedido del usuario

Se retiró la carpeta static del repositorio. Se movieron 626 archivos a content: 17 recursos a sus páginas o secciones y 609 recursos generales o de los micrositios a content/_recursos. Se conservaron íntegros Moonjs y CoyspuNET y sus rutas públicas. Se eliminaron las nueve imágenes sin referencias enumeradas abajo. Se actualizaron las rutas de las cinco imágenes de sección, tres descargas y los recursos del panel. Las notas históricas y sus ejemplos de código no se reescribieron.

### Imágenes sin uso eliminadas

- static/images/escritos/tomo-su-mano-y-la-cobijo2.png
- static/images/home/banner-nerd.webp
- static/images/labs/panel-tablet-cx-boreal-ii_old.jpg
- static/images/labs/panel-tablet-cx-boreal-ii-thumb_old.jpg
- static/images/manual-de-supervivencia-linguistica/featured_large.png
- static/images/notas/featured_large.png
- static/images/notas/fisica/fisica-espacio-portada.jpg
- static/images/notas/luna/le-voyage-dans-la-lune.jpg
- static/images/notas/starlink/starlink_train.jpg

### Movimientos desde static

| Origen | Destino |
|---|---|
| static/images/site/inicio-banner.png | content/inicio-banner.png |
| static/images/home/banner-nerd3.webp | content/labs/banner-nerd3.webp |
| static/images/escritos/index.png | content/escritos/portada-seccion.png |
| static/images/notas/featured.png | content/notas/portada-seccion.png |
| static/images/manual-de-supervivencia-linguistica/featured.png | content/manual-de-supervivencia-linguistica/portada-seccion.png |
| static/images/weather/cloud.svg | content/panel-modern/weather/cloud.svg |
| static/images/weather/fog.svg | content/panel-modern/weather/fog.svg |
| static/images/weather/partly-cloudy.svg | content/panel-modern/weather/partly-cloudy.svg |
| static/images/weather/rain.svg | content/panel-modern/weather/rain.svg |
| static/images/weather/snow.svg | content/panel-modern/weather/snow.svg |
| static/images/weather/storm.svg | content/panel-modern/weather/storm.svg |
| static/images/weather/sun.svg | content/panel-modern/weather/sun.svg |
| static/images/weather/unknown.svg | content/panel-modern/weather/unknown.svg |
| static/data/feriados-2026.json | content/panel-modern/data/feriados-2026.json |
| static/files/labs/restaurar-fotos-viejas-gemini-prompt-v1-restauracion-por-capas.txt | content/labs/restaurar-fotos-viejas-con-ia-entre-mejorar-e-inventar/restaurar-fotos-viejas-gemini-prompt-v1-restauracion-por-capas.txt |
| static/files/labs/restaurar-fotos-viejas-gemini-prompt-v2-restauracion-conservadora.txt | content/labs/restaurar-fotos-viejas-con-ia-entre-mejorar-e-inventar/restaurar-fotos-viejas-gemini-prompt-v2-restauracion-conservadora.txt |
| static/downloads/panel-tablet-vieja/panel-tablet-vieja.zip | content/labs/panel-tablet-vieja/panel-tablet-vieja.zip |
| static/android-chrome-192x192.png | content/_recursos/android-chrome-192x192.png |
| static/android-chrome-512x512.png | content/_recursos/android-chrome-512x512.png |
| static/apple-touch-icon.png | content/_recursos/apple-touch-icon.png |
| static/favicon-16x16.png | content/_recursos/favicon-16x16.png |
| static/favicon-32x32.png | content/_recursos/favicon-32x32.png |
| static/favicon.ico | content/_recursos/favicon.ico |
| static/site.webmanifest | content/_recursos/site.webmanifest |
| static/coyspunet/conversion_dynamic_report.csv | content/_recursos/coyspunet/conversion_dynamic_report.csv |
| static/coyspunet/CONVERSION_NOTAS.txt | content/_recursos/coyspunet/CONVERSION_NOTAS.txt |
| static/coyspunet/default.html | content/_recursos/coyspunet/default.html |
| static/coyspunet/index.html | content/_recursos/coyspunet/index.html |
| static/coyspunet/style.css | content/_recursos/coyspunet/style.css |
| static/coyspunet/datos/efemerides.csv | content/_recursos/coyspunet/datos/efemerides.csv |
| static/coyspunet/datos/efemerides.json | content/_recursos/coyspunet/datos/efemerides.json |
| static/coyspunet/datos/encuesta_adsl.csv | content/_recursos/coyspunet/datos/encuesta_adsl.csv |
| static/coyspunet/datos/encuesta_adsl.json | content/_recursos/coyspunet/datos/encuesta_adsl.json |
| static/coyspunet/datos/encuestas_historicas.csv | content/_recursos/coyspunet/datos/encuestas_historicas.csv |
| static/coyspunet/datos/encuestas_historicas.json | content/_recursos/coyspunet/datos/encuestas_historicas.json |
| static/coyspunet/datos/links_categorias.csv | content/_recursos/coyspunet/datos/links_categorias.csv |
| static/coyspunet/datos/links_categorias.json | content/_recursos/coyspunet/datos/links_categorias.json |
| static/coyspunet/datos/links_lista.csv | content/_recursos/coyspunet/datos/links_lista.csv |
| static/coyspunet/datos/links_lista.json | content/_recursos/coyspunet/datos/links_lista.json |
| static/coyspunet/datos/noticias.csv | content/_recursos/coyspunet/datos/noticias.csv |
| static/coyspunet/datos/noticias.json | content/_recursos/coyspunet/datos/noticias.json |
| static/coyspunet/Home/Ayuda.html | content/_recursos/coyspunet/Home/Ayuda.html |
| static/coyspunet/Home/BarraSeparadora.gif | content/_recursos/coyspunet/Home/BarraSeparadora.gif |
| static/coyspunet/Home/Blanco.gif | content/_recursos/coyspunet/Home/Blanco.gif |
| static/coyspunet/Home/cabecera.asp.htm | content/_recursos/coyspunet/Home/cabecera.asp.htm |
| static/coyspunet/Home/cabecera.html | content/_recursos/coyspunet/Home/cabecera.html |
| static/coyspunet/Home/calendario.html | content/_recursos/coyspunet/Home/calendario.html |
| static/coyspunet/Home/Consumos_Derecha.html | content/_recursos/coyspunet/Home/Consumos_Derecha.html |
| static/coyspunet/Home/Consumos_Listado.html | content/_recursos/coyspunet/Home/Consumos_Listado.html |
| static/coyspunet/Home/Consumos.html | content/_recursos/coyspunet/Home/Consumos.html |
| static/coyspunet/Home/Contacto_Contenido.html | content/_recursos/coyspunet/Home/Contacto_Contenido.html |
| static/coyspunet/Home/Contacto.html | content/_recursos/coyspunet/Home/Contacto.html |
| static/coyspunet/Home/Contenido.html | content/_recursos/coyspunet/Home/Contenido.html |
| static/coyspunet/Home/CoyspuDigital_Contenido.htm | content/_recursos/coyspunet/Home/CoyspuDigital_Contenido.htm |
| static/coyspunet/Home/CoyspuDigital_Derecha.htm | content/_recursos/coyspunet/Home/CoyspuDigital_Derecha.htm |
| static/coyspunet/Home/CoyspuDigital.html | content/_recursos/coyspunet/Home/CoyspuDigital.html |
| static/coyspunet/Home/CoyspuLogo_navidad.gif | content/_recursos/coyspunet/Home/CoyspuLogo_navidad.gif |
| static/coyspunet/Home/CoyspuLogo_verde.gif | content/_recursos/coyspunet/Home/CoyspuLogo_verde.gif |
| static/coyspunet/Home/CoyspuLogo.gif | content/_recursos/coyspunet/Home/CoyspuLogo.gif |
| static/coyspunet/Home/Cuadradito.gif | content/_recursos/coyspunet/Home/Cuadradito.gif |
| static/coyspunet/Home/Cuadradito2.gif | content/_recursos/coyspunet/Home/Cuadradito2.gif |
| static/coyspunet/Home/Default_Derecha_contadorpropio.html | content/_recursos/coyspunet/Home/Default_Derecha_contadorpropio.html |
| static/coyspunet/Home/Default_Derecha_popup.html | content/_recursos/coyspunet/Home/Default_Derecha_popup.html |
| static/coyspunet/Home/Default_Derecha.html | content/_recursos/coyspunet/Home/Default_Derecha.html |
| static/coyspunet/Home/Default_old.html | content/_recursos/coyspunet/Home/Default_old.html |
| static/coyspunet/Home/Default.html | content/_recursos/coyspunet/Home/Default.html |
| static/coyspunet/Home/efemerides_todas.html | content/_recursos/coyspunet/Home/efemerides_todas.html |
| static/coyspunet/Home/efemerides.html | content/_recursos/coyspunet/Home/efemerides.html |
| static/coyspunet/Home/EncuestasEspecialesMail.html | content/_recursos/coyspunet/Home/EncuestasEspecialesMail.html |
| static/coyspunet/Home/Flechitas.gif | content/_recursos/coyspunet/Home/Flechitas.gif |
| static/coyspunet/Home/FlechitasArriba.gif | content/_recursos/coyspunet/Home/FlechitasArriba.gif |
| static/coyspunet/Home/Guiatelefonos_busqueda.html | content/_recursos/coyspunet/Home/Guiatelefonos_busqueda.html |
| static/coyspunet/Home/Guiatelefonos.html | content/_recursos/coyspunet/Home/Guiatelefonos.html |
| static/coyspunet/Home/Links_Derecha.html | content/_recursos/coyspunet/Home/Links_Derecha.html |
| static/coyspunet/Home/Links_Sugiera.html | content/_recursos/coyspunet/Home/Links_Sugiera.html |
| static/coyspunet/Home/links_todos.html | content/_recursos/coyspunet/Home/links_todos.html |
| static/coyspunet/Home/Links.html | content/_recursos/coyspunet/Home/Links.html |
| static/coyspunet/Home/LinksCategoria_01.html | content/_recursos/coyspunet/Home/LinksCategoria_01.html |
| static/coyspunet/Home/LinksCategoria_02.html | content/_recursos/coyspunet/Home/LinksCategoria_02.html |
| static/coyspunet/Home/LinksCategoria_03.html | content/_recursos/coyspunet/Home/LinksCategoria_03.html |
| static/coyspunet/Home/LinksCategoria_04.html | content/_recursos/coyspunet/Home/LinksCategoria_04.html |
| static/coyspunet/Home/LinksCategoria_05.html | content/_recursos/coyspunet/Home/LinksCategoria_05.html |
| static/coyspunet/Home/LinksCategoria_06.html | content/_recursos/coyspunet/Home/LinksCategoria_06.html |
| static/coyspunet/Home/LinksCategoria_07.html | content/_recursos/coyspunet/Home/LinksCategoria_07.html |
| static/coyspunet/Home/LinksCategoria_08.html | content/_recursos/coyspunet/Home/LinksCategoria_08.html |
| static/coyspunet/Home/LinksCategoria_09.html | content/_recursos/coyspunet/Home/LinksCategoria_09.html |
| static/coyspunet/Home/LinksCategoria_10.html | content/_recursos/coyspunet/Home/LinksCategoria_10.html |
| static/coyspunet/Home/LinksCategoria_11.html | content/_recursos/coyspunet/Home/LinksCategoria_11.html |
| static/coyspunet/Home/LinksCategoria_12.html | content/_recursos/coyspunet/Home/LinksCategoria_12.html |
| static/coyspunet/Home/LinksCategoria_13.html | content/_recursos/coyspunet/Home/LinksCategoria_13.html |
| static/coyspunet/Home/LinksCategoria_14.html | content/_recursos/coyspunet/Home/LinksCategoria_14.html |
| static/coyspunet/Home/LinksCategoria_15.html | content/_recursos/coyspunet/Home/LinksCategoria_15.html |
| static/coyspunet/Home/LinksCategoria_16.html | content/_recursos/coyspunet/Home/LinksCategoria_16.html |
| static/coyspunet/Home/LinksCategoria_17.html | content/_recursos/coyspunet/Home/LinksCategoria_17.html |
| static/coyspunet/Home/LinksCategoria_18.html | content/_recursos/coyspunet/Home/LinksCategoria_18.html |
| static/coyspunet/Home/LinksCategoria_19.html | content/_recursos/coyspunet/Home/LinksCategoria_19.html |
| static/coyspunet/Home/LinksCategoria_20.html | content/_recursos/coyspunet/Home/LinksCategoria_20.html |
| static/coyspunet/Home/LinksCategoria_21.html | content/_recursos/coyspunet/Home/LinksCategoria_21.html |
| static/coyspunet/Home/LinksCategoria_22.html | content/_recursos/coyspunet/Home/LinksCategoria_22.html |
| static/coyspunet/Home/LinksCategoria_23.html | content/_recursos/coyspunet/Home/LinksCategoria_23.html |
| static/coyspunet/Home/LinksCategoria_24.html | content/_recursos/coyspunet/Home/LinksCategoria_24.html |
| static/coyspunet/Home/LinksCategoria_25.html | content/_recursos/coyspunet/Home/LinksCategoria_25.html |
| static/coyspunet/Home/LinksCategoria_26.html | content/_recursos/coyspunet/Home/LinksCategoria_26.html |
| static/coyspunet/Home/LinksCategoria_27.html | content/_recursos/coyspunet/Home/LinksCategoria_27.html |
| static/coyspunet/Home/LinksCategoria_28.html | content/_recursos/coyspunet/Home/LinksCategoria_28.html |
| static/coyspunet/Home/LinksCategoria_29.html | content/_recursos/coyspunet/Home/LinksCategoria_29.html |
| static/coyspunet/Home/LinksCategoria_30.html | content/_recursos/coyspunet/Home/LinksCategoria_30.html |
| static/coyspunet/Home/LinksCategoria_31.html | content/_recursos/coyspunet/Home/LinksCategoria_31.html |
| static/coyspunet/Home/LinksCategoria_32.html | content/_recursos/coyspunet/Home/LinksCategoria_32.html |
| static/coyspunet/Home/LinksCategoria_33.html | content/_recursos/coyspunet/Home/LinksCategoria_33.html |
| static/coyspunet/Home/LinksLista.html | content/_recursos/coyspunet/Home/LinksLista.html |
| static/coyspunet/Home/Logo_Coyspu_Verde_escarapela.jpg | content/_recursos/coyspunet/Home/Logo_Coyspu_Verde_escarapela.jpg |
| static/coyspunet/Home/Menu.htm | content/_recursos/coyspunet/Home/Menu.htm |
| static/coyspunet/Home/Menu.html | content/_recursos/coyspunet/Home/Menu.html |
| static/coyspunet/Home/Noticias_Contenido.html | content/_recursos/coyspunet/Home/Noticias_Contenido.html |
| static/coyspunet/Home/Noticias_Derecha.html | content/_recursos/coyspunet/Home/Noticias_Derecha.html |
| static/coyspunet/Home/Noticias_Titulares.html | content/_recursos/coyspunet/Home/Noticias_Titulares.html |
| static/coyspunet/Home/noticias.html | content/_recursos/coyspunet/Home/noticias.html |
| static/coyspunet/Home/NuestraCooperativa_Contenido.htm | content/_recursos/coyspunet/Home/NuestraCooperativa_Contenido.htm |
| static/coyspunet/Home/NuestraCooperativa_derecha.htm | content/_recursos/coyspunet/Home/NuestraCooperativa_derecha.htm |
| static/coyspunet/Home/NuestraCooperativa.html | content/_recursos/coyspunet/Home/NuestraCooperativa.html |
| static/coyspunet/Home/pagina_nueva_1.htm | content/_recursos/coyspunet/Home/pagina_nueva_1.htm |
| static/coyspunet/Home/PlanesInternet_Contenido.html | content/_recursos/coyspunet/Home/PlanesInternet_Contenido.html |
| static/coyspunet/Home/PlanesInternet.html | content/_recursos/coyspunet/Home/PlanesInternet.html |
| static/coyspunet/Home/pspbrwse.jbf | content/_recursos/coyspunet/Home/pspbrwse.jbf |
| static/coyspunet/Home/RedMulticampus_Contenido.htm | content/_recursos/coyspunet/Home/RedMulticampus_Contenido.htm |
| static/coyspunet/Home/RedMulticampus_Derecha.htm | content/_recursos/coyspunet/Home/RedMulticampus_Derecha.htm |
| static/coyspunet/Home/RedMulticampus.html | content/_recursos/coyspunet/Home/RedMulticampus.html |
| static/coyspunet/Home/Servicios.html | content/_recursos/coyspunet/Home/Servicios.html |
| static/coyspunet/Home/style.css | content/_recursos/coyspunet/Home/style.css |
| static/coyspunet/Home/style.css.azul | content/_recursos/coyspunet/Home/style.css.azul |
| static/coyspunet/Home/style2.css | content/_recursos/coyspunet/Home/style2.css |
| static/coyspunet/Home/styleazul.css | content/_recursos/coyspunet/Home/styleazul.css |
| static/coyspunet/Home/Telefonia_Contenido.htm | content/_recursos/coyspunet/Home/Telefonia_Contenido.htm |
| static/coyspunet/Home/Telefonia_Derecha.htm | content/_recursos/coyspunet/Home/Telefonia_Derecha.htm |
| static/coyspunet/Home/Telefonia_Guia_busqueda_formulario.htm | content/_recursos/coyspunet/Home/Telefonia_Guia_busqueda_formulario.htm |
| static/coyspunet/Home/Telefonia_Guia_busqueda.html | content/_recursos/coyspunet/Home/Telefonia_Guia_busqueda.html |
| static/coyspunet/Home/Telefonia_Guia_Contenido.htm | content/_recursos/coyspunet/Home/Telefonia_Guia_Contenido.htm |
| static/coyspunet/Home/Telefonia_Guia_Muestra_listado.html | content/_recursos/coyspunet/Home/Telefonia_Guia_Muestra_listado.html |
| static/coyspunet/Home/Telefonia_Guia_Muestra.html | content/_recursos/coyspunet/Home/Telefonia_Guia_Muestra.html |
| static/coyspunet/Home/Telefonia_Guia.html | content/_recursos/coyspunet/Home/Telefonia_Guia.html |
| static/coyspunet/Home/Telefonia_Tarifas_Contenido.htm | content/_recursos/coyspunet/Home/Telefonia_Tarifas_Contenido.htm |
| static/coyspunet/Home/Telefonia_tarifas.html | content/_recursos/coyspunet/Home/Telefonia_tarifas.html |
| static/coyspunet/Home/Telefonia_ticoca_Contenido.htm | content/_recursos/coyspunet/Home/Telefonia_ticoca_Contenido.htm |
| static/coyspunet/Home/Telefonia_ticoca.html | content/_recursos/coyspunet/Home/Telefonia_ticoca.html |
| static/coyspunet/Home/Telefonia.html | content/_recursos/coyspunet/Home/Telefonia.html |
| static/coyspunet/Home/webmail_no_disponible.html | content/_recursos/coyspunet/Home/webmail_no_disponible.html |
| static/coyspunet/Home/1cnf/Ayuda.html | content/_recursos/coyspunet/Home/1cnf/Ayuda.html |
| static/coyspunet/Home/1cnf/BarraSeparadora.gif | content/_recursos/coyspunet/Home/1cnf/BarraSeparadora.gif |
| static/coyspunet/Home/1cnf/blanco.gif | content/_recursos/coyspunet/Home/1cnf/blanco.gif |
| static/coyspunet/Home/1cnf/consumos.html | content/_recursos/coyspunet/Home/1cnf/consumos.html |
| static/coyspunet/Home/1cnf/contacto.html | content/_recursos/coyspunet/Home/1cnf/contacto.html |
| static/coyspunet/Home/1cnf/Coyspudigital_contenido.htm | content/_recursos/coyspunet/Home/1cnf/Coyspudigital_contenido.htm |
| static/coyspunet/Home/1cnf/Coyspudigital.html | content/_recursos/coyspunet/Home/1cnf/Coyspudigital.html |
| static/coyspunet/Home/1cnf/CoyspuLogo_verde.gif | content/_recursos/coyspunet/Home/1cnf/CoyspuLogo_verde.gif |
| static/coyspunet/Home/1cnf/CoyspuLogo.gif | content/_recursos/coyspunet/Home/1cnf/CoyspuLogo.gif |
| static/coyspunet/Home/1cnf/Cuadradito.gif | content/_recursos/coyspunet/Home/1cnf/Cuadradito.gif |
| static/coyspunet/Home/1cnf/cuadradito2.gif | content/_recursos/coyspunet/Home/1cnf/cuadradito2.gif |
| static/coyspunet/Home/1cnf/default.html | content/_recursos/coyspunet/Home/1cnf/default.html |
| static/coyspunet/Home/1cnf/EncuestasEspecialesMail.html | content/_recursos/coyspunet/Home/1cnf/EncuestasEspecialesMail.html |
| static/coyspunet/Home/1cnf/Flechitas.gif | content/_recursos/coyspunet/Home/1cnf/Flechitas.gif |
| static/coyspunet/Home/1cnf/FlechitasArriba.gif | content/_recursos/coyspunet/Home/1cnf/FlechitasArriba.gif |
| static/coyspunet/Home/1cnf/guiatel.pdf | content/_recursos/coyspunet/Home/1cnf/guiatel.pdf |
| static/coyspunet/Home/1cnf/links_sugiera.html | content/_recursos/coyspunet/Home/1cnf/links_sugiera.html |
| static/coyspunet/Home/1cnf/Links.html | content/_recursos/coyspunet/Home/1cnf/Links.html |
| static/coyspunet/Home/1cnf/Logo_Coyspu_Verde_escarapela.jpg | content/_recursos/coyspunet/Home/1cnf/Logo_Coyspu_Verde_escarapela.jpg |
| static/coyspunet/Home/1cnf/noticias.html | content/_recursos/coyspunet/Home/1cnf/noticias.html |
| static/coyspunet/Home/1cnf/NuestraCooperativa.html | content/_recursos/coyspunet/Home/1cnf/NuestraCooperativa.html |
| static/coyspunet/Home/1cnf/PlanesInternet.html | content/_recursos/coyspunet/Home/1cnf/PlanesInternet.html |
| static/coyspunet/Home/1cnf/RedMulticampus.html | content/_recursos/coyspunet/Home/1cnf/RedMulticampus.html |
| static/coyspunet/Home/1cnf/Servicios.html | content/_recursos/coyspunet/Home/1cnf/Servicios.html |
| static/coyspunet/Home/1cnf/style.css | content/_recursos/coyspunet/Home/1cnf/style.css |
| static/coyspunet/Home/1cnf/Telefonia_Guia_busqueda.html | content/_recursos/coyspunet/Home/1cnf/Telefonia_Guia_busqueda.html |
| static/coyspunet/Home/1cnf/Telefonia_Guia_Muestra.html | content/_recursos/coyspunet/Home/1cnf/Telefonia_Guia_Muestra.html |
| static/coyspunet/Home/1cnf/Telefonia_Guia.html | content/_recursos/coyspunet/Home/1cnf/Telefonia_Guia.html |
| static/coyspunet/Home/1cnf/Telefonia_tarifas.html | content/_recursos/coyspunet/Home/1cnf/Telefonia_tarifas.html |
| static/coyspunet/Home/1cnf/Telefonia_ticoca.html | content/_recursos/coyspunet/Home/1cnf/Telefonia_ticoca.html |
| static/coyspunet/Home/1cnf/Telefonia.html | content/_recursos/coyspunet/Home/1cnf/Telefonia.html |
| static/coyspunet/Home/Ayuda/Ayuda-Eudora.htm | content/_recursos/coyspunet/Home/Ayuda/Ayuda-Eudora.htm |
| static/coyspunet/Home/Ayuda/Ayuda-HTML.htm | content/_recursos/coyspunet/Home/Ayuda/Ayuda-HTML.htm |
| static/coyspunet/Home/Ayuda/Ayuda-LaConexionSeCorta.htm | content/_recursos/coyspunet/Home/Ayuda/Ayuda-LaConexionSeCorta.htm |
| static/coyspunet/Home/Ayuda/Ayuda-LaConexionSeCortaCuandoAlguienLlama.htm | content/_recursos/coyspunet/Home/Ayuda/Ayuda-LaConexionSeCortaCuandoAlguienLlama.htm |
| static/coyspunet/Home/Ayuda/Ayuda-LaConexionTardaMucho.htm | content/_recursos/coyspunet/Home/Ayuda/Ayuda-LaConexionTardaMucho.htm |
| static/coyspunet/Home/Ayuda/Ayuda-NetScape.htm | content/_recursos/coyspunet/Home/Ayuda/Ayuda-NetScape.htm |
| static/coyspunet/Home/Ayuda/Ayuda-Numeros.htm | content/_recursos/coyspunet/Home/Ayuda/Ayuda-Numeros.htm |
| static/coyspunet/Home/Ayuda/Ayuda-Outlook.htm | content/_recursos/coyspunet/Home/Ayuda/Ayuda-Outlook.htm |
| static/coyspunet/Home/Ayuda/Ayuda-OutlookExpress.htm | content/_recursos/coyspunet/Home/Ayuda/Ayuda-OutlookExpress.htm |
| static/coyspunet/Home/Ayuda/Ayuda-Webmail.htm | content/_recursos/coyspunet/Home/Ayuda/Ayuda-Webmail.htm |
| static/coyspunet/Home/Ayuda/Contenido.html | content/_recursos/coyspunet/Home/Ayuda/Contenido.html |
| static/coyspunet/Home/Ayuda/creaMetaTags.htm | content/_recursos/coyspunet/Home/Ayuda/creaMetaTags.htm |
| static/coyspunet/Home/Ayuda/1cnf/Ayuda-Eudora.htm | content/_recursos/coyspunet/Home/Ayuda/1cnf/Ayuda-Eudora.htm |
| static/coyspunet/Home/Ayuda/1cnf/Ayuda-HTML.htm | content/_recursos/coyspunet/Home/Ayuda/1cnf/Ayuda-HTML.htm |
| static/coyspunet/Home/Ayuda/1cnf/Ayuda-LaConexionSeCorta.htm | content/_recursos/coyspunet/Home/Ayuda/1cnf/Ayuda-LaConexionSeCorta.htm |
| static/coyspunet/Home/Ayuda/1cnf/Ayuda-LaConexionSeCortaCuandoAlguienLlama.htm | content/_recursos/coyspunet/Home/Ayuda/1cnf/Ayuda-LaConexionSeCortaCuandoAlguienLlama.htm |
| static/coyspunet/Home/Ayuda/1cnf/Ayuda-LaConexionTardaMucho.htm | content/_recursos/coyspunet/Home/Ayuda/1cnf/Ayuda-LaConexionTardaMucho.htm |
| static/coyspunet/Home/Ayuda/1cnf/Ayuda-NetScape.htm | content/_recursos/coyspunet/Home/Ayuda/1cnf/Ayuda-NetScape.htm |
| static/coyspunet/Home/Ayuda/1cnf/Ayuda-Numeros.htm | content/_recursos/coyspunet/Home/Ayuda/1cnf/Ayuda-Numeros.htm |
| static/coyspunet/Home/Ayuda/1cnf/Ayuda-Outlook.htm | content/_recursos/coyspunet/Home/Ayuda/1cnf/Ayuda-Outlook.htm |
| static/coyspunet/Home/Ayuda/1cnf/Ayuda-OutlookExpress.htm | content/_recursos/coyspunet/Home/Ayuda/1cnf/Ayuda-OutlookExpress.htm |
| static/coyspunet/Home/Ayuda/1cnf/Ayuda-Webmail.htm | content/_recursos/coyspunet/Home/Ayuda/1cnf/Ayuda-Webmail.htm |
| static/coyspunet/Home/Banners/bannerCoysputel_2.gif | content/_recursos/coyspunet/Home/Banners/bannerCoysputel_2.gif |
| static/coyspunet/Home/Banners/bannerCoysputel_presuscripcion.gif | content/_recursos/coyspunet/Home/Banners/bannerCoysputel_presuscripcion.gif |
| static/coyspunet/Home/Banners/bannerCoysputel.gif | content/_recursos/coyspunet/Home/Banners/bannerCoysputel.gif |
| static/coyspunet/Home/Banners/bannerCoysputel1000gracias.gif | content/_recursos/coyspunet/Home/Banners/bannerCoysputel1000gracias.gif |
| static/coyspunet/Home/Banners/BannerGuiatelefonos.gif | content/_recursos/coyspunet/Home/Banners/BannerGuiatelefonos.gif |
| static/coyspunet/Home/Banners/dolarpeso.gif | content/_recursos/coyspunet/Home/Banners/dolarpeso.gif |
| static/coyspunet/Home/Banners/forecast_marcosjuarez.gif | content/_recursos/coyspunet/Home/Banners/forecast_marcosjuarez.gif |
| static/coyspunet/Home/Banners/pspbrwse.jbf | content/_recursos/coyspunet/Home/Banners/pspbrwse.jbf |
| static/coyspunet/Home/Banners/1cnf/bannerCoysputel.gif | content/_recursos/coyspunet/Home/Banners/1cnf/bannerCoysputel.gif |
| static/coyspunet/Home/Banners/1cnf/bannerCoysputel1000gracias.gif | content/_recursos/coyspunet/Home/Banners/1cnf/bannerCoysputel1000gracias.gif |
| static/coyspunet/Home/Banners/1cnf/BannerGuiatelefonos.gif | content/_recursos/coyspunet/Home/Banners/1cnf/BannerGuiatelefonos.gif |
| static/coyspunet/Home/Contador/0.gif | content/_recursos/coyspunet/Home/Contador/0.gif |
| static/coyspunet/Home/Contador/1.gif | content/_recursos/coyspunet/Home/Contador/1.gif |
| static/coyspunet/Home/Contador/2.gif | content/_recursos/coyspunet/Home/Contador/2.gif |
| static/coyspunet/Home/Contador/3.gif | content/_recursos/coyspunet/Home/Contador/3.gif |
| static/coyspunet/Home/Contador/4.gif | content/_recursos/coyspunet/Home/Contador/4.gif |
| static/coyspunet/Home/Contador/5.gif | content/_recursos/coyspunet/Home/Contador/5.gif |
| static/coyspunet/Home/Contador/6.gif | content/_recursos/coyspunet/Home/Contador/6.gif |
| static/coyspunet/Home/Contador/7.gif | content/_recursos/coyspunet/Home/Contador/7.gif |
| static/coyspunet/Home/Contador/8.gif | content/_recursos/coyspunet/Home/Contador/8.gif |
| static/coyspunet/Home/Contador/9.gif | content/_recursos/coyspunet/Home/Contador/9.gif |
| static/coyspunet/Home/Contador/asp_count.txt | content/_recursos/coyspunet/Home/Contador/asp_count.txt |
| static/coyspunet/Home/Contador/contador_completo.html | content/_recursos/coyspunet/Home/Contador/contador_completo.html |
| static/coyspunet/Home/Contador/contador_escribe.html | content/_recursos/coyspunet/Home/Contador/contador_escribe.html |
| static/coyspunet/Home/Contador/contador_lee.html | content/_recursos/coyspunet/Home/Contador/contador_lee.html |
| static/coyspunet/Home/Contador/contar.txt | content/_recursos/coyspunet/Home/Contador/contar.txt |
| static/coyspunet/Home/Contador/1cnf/0.gif | content/_recursos/coyspunet/Home/Contador/1cnf/0.gif |
| static/coyspunet/Home/Contador/1cnf/1.gif | content/_recursos/coyspunet/Home/Contador/1cnf/1.gif |
| static/coyspunet/Home/Contador/1cnf/2.gif | content/_recursos/coyspunet/Home/Contador/1cnf/2.gif |
| static/coyspunet/Home/Contador/1cnf/3.gif | content/_recursos/coyspunet/Home/Contador/1cnf/3.gif |
| static/coyspunet/Home/Contador/1cnf/4.gif | content/_recursos/coyspunet/Home/Contador/1cnf/4.gif |
| static/coyspunet/Home/Contador/1cnf/5.gif | content/_recursos/coyspunet/Home/Contador/1cnf/5.gif |
| static/coyspunet/Home/Contador/1cnf/6.gif | content/_recursos/coyspunet/Home/Contador/1cnf/6.gif |
| static/coyspunet/Home/Contador/1cnf/7.gif | content/_recursos/coyspunet/Home/Contador/1cnf/7.gif |
| static/coyspunet/Home/Contador/1cnf/8.gif | content/_recursos/coyspunet/Home/Contador/1cnf/8.gif |
| static/coyspunet/Home/Contador/1cnf/9.gif | content/_recursos/coyspunet/Home/Contador/1cnf/9.gif |
| static/coyspunet/Home/Coyspudigital/CoyspuDigital_Contenido_0308.htm | content/_recursos/coyspunet/Home/Coyspudigital/CoyspuDigital_Contenido_0308.htm |
| static/coyspunet/Home/Coyspudigital/EdicionesAnteriores/200310.htm | content/_recursos/coyspunet/Home/Coyspudigital/EdicionesAnteriores/200310.htm |
| static/coyspunet/Home/Coyspudigital/EdicionesAnteriores/200311.htm | content/_recursos/coyspunet/Home/Coyspudigital/EdicionesAnteriores/200311.htm |
| static/coyspunet/Home/Coyspudigital/EdicionesAnteriores/200312.htm | content/_recursos/coyspunet/Home/Coyspudigital/EdicionesAnteriores/200312.htm |
| static/coyspunet/Home/Coyspudigital/EdicionesAnteriores/200401.htm | content/_recursos/coyspunet/Home/Coyspudigital/EdicionesAnteriores/200401.htm |
| static/coyspunet/Home/Coyspudigital/EdicionesAnteriores/Telefonia_Tarifas_Contenido.htm | content/_recursos/coyspunet/Home/Coyspudigital/EdicionesAnteriores/Telefonia_Tarifas_Contenido.htm |
| static/coyspunet/Home/Encuesta/barraa.gif | content/_recursos/coyspunet/Home/Encuesta/barraa.gif |
| static/coyspunet/Home/Encuesta/barran.gif | content/_recursos/coyspunet/Home/Encuesta/barran.gif |
| static/coyspunet/Home/Encuesta/barrar.gif | content/_recursos/coyspunet/Home/Encuesta/barrar.gif |
| static/coyspunet/Home/Encuesta/barrav.gif | content/_recursos/coyspunet/Home/Encuesta/barrav.gif |
| static/coyspunet/Home/Encuesta/crearencuesta.htm | content/_recursos/coyspunet/Home/Encuesta/crearencuesta.htm |
| static/coyspunet/Home/Encuesta/crearencuesta.html | content/_recursos/coyspunet/Home/Encuesta/crearencuesta.html |
| static/coyspunet/Home/Encuesta/encuesta.html | content/_recursos/coyspunet/Home/Encuesta/encuesta.html |
| static/coyspunet/Home/Encuesta/historico.html | content/_recursos/coyspunet/Home/Encuesta/historico.html |
| static/coyspunet/Home/Encuesta/ir.gif | content/_recursos/coyspunet/Home/Encuesta/ir.gif |
| static/coyspunet/Home/Encuesta/opinar.gif | content/_recursos/coyspunet/Home/Encuesta/opinar.gif |
| static/coyspunet/Home/Encuesta/proyectocabecera.htm | content/_recursos/coyspunet/Home/Encuesta/proyectocabecera.htm |
| static/coyspunet/Home/Encuesta/resultados.html | content/_recursos/coyspunet/Home/Encuesta/resultados.html |
| static/coyspunet/Home/Encuesta/verencuesta_img.html | content/_recursos/coyspunet/Home/Encuesta/verencuesta_img.html |
| static/coyspunet/Home/Encuesta/verencuesta.html | content/_recursos/coyspunet/Home/Encuesta/verencuesta.html |
| static/coyspunet/Home/Encuesta/1cnf/barraa.gif | content/_recursos/coyspunet/Home/Encuesta/1cnf/barraa.gif |
| static/coyspunet/Home/Encuesta/1cnf/barran.gif | content/_recursos/coyspunet/Home/Encuesta/1cnf/barran.gif |
| static/coyspunet/Home/Encuesta/1cnf/barrar.gif | content/_recursos/coyspunet/Home/Encuesta/1cnf/barrar.gif |
| static/coyspunet/Home/Encuesta/1cnf/barrav.gif | content/_recursos/coyspunet/Home/Encuesta/1cnf/barrav.gif |
| static/coyspunet/Home/Encuesta/1cnf/crearencuesta.htm | content/_recursos/coyspunet/Home/Encuesta/1cnf/crearencuesta.htm |
| static/coyspunet/Home/Encuesta/1cnf/crearencuesta.html | content/_recursos/coyspunet/Home/Encuesta/1cnf/crearencuesta.html |
| static/coyspunet/Home/Encuesta/1cnf/encuesta.html | content/_recursos/coyspunet/Home/Encuesta/1cnf/encuesta.html |
| static/coyspunet/Home/Encuesta/1cnf/historico.html | content/_recursos/coyspunet/Home/Encuesta/1cnf/historico.html |
| static/coyspunet/Home/Encuesta/1cnf/ir.gif | content/_recursos/coyspunet/Home/Encuesta/1cnf/ir.gif |
| static/coyspunet/Home/Encuesta/1cnf/opinar.gif | content/_recursos/coyspunet/Home/Encuesta/1cnf/opinar.gif |
| static/coyspunet/Home/Encuesta/1cnf/verencuesta_img.html | content/_recursos/coyspunet/Home/Encuesta/1cnf/verencuesta_img.html |
| static/coyspunet/Home/Encuesta/1cnf/verencuesta.html | content/_recursos/coyspunet/Home/Encuesta/1cnf/verencuesta.html |
| static/coyspunet/Home/Encuesta/backs/barraa.gif | content/_recursos/coyspunet/Home/Encuesta/backs/barraa.gif |
| static/coyspunet/Home/Encuesta/backs/barran.gif | content/_recursos/coyspunet/Home/Encuesta/backs/barran.gif |
| static/coyspunet/Home/Encuesta/backs/barrar.gif | content/_recursos/coyspunet/Home/Encuesta/backs/barrar.gif |
| static/coyspunet/Home/Encuesta/backs/barrav.gif | content/_recursos/coyspunet/Home/Encuesta/backs/barrav.gif |
| static/coyspunet/Home/Encuesta/backs/crearencuesta.htm | content/_recursos/coyspunet/Home/Encuesta/backs/crearencuesta.htm |
| static/coyspunet/Home/Encuesta/backs/crearencuesta.html | content/_recursos/coyspunet/Home/Encuesta/backs/crearencuesta.html |
| static/coyspunet/Home/Encuesta/backs/encuesta.html | content/_recursos/coyspunet/Home/Encuesta/backs/encuesta.html |
| static/coyspunet/Home/Encuesta/backs/historico.html | content/_recursos/coyspunet/Home/Encuesta/backs/historico.html |
| static/coyspunet/Home/Encuesta/backs/ir.gif | content/_recursos/coyspunet/Home/Encuesta/backs/ir.gif |
| static/coyspunet/Home/Encuesta/backs/opinar.gif | content/_recursos/coyspunet/Home/Encuesta/backs/opinar.gif |
| static/coyspunet/Home/Encuesta/backs/verencuesta.html | content/_recursos/coyspunet/Home/Encuesta/backs/verencuesta.html |
| static/coyspunet/Home/Encuesta/backs/2/barraa.gif | content/_recursos/coyspunet/Home/Encuesta/backs/2/barraa.gif |
| static/coyspunet/Home/Encuesta/backs/2/barran.gif | content/_recursos/coyspunet/Home/Encuesta/backs/2/barran.gif |
| static/coyspunet/Home/Encuesta/backs/2/barrar.gif | content/_recursos/coyspunet/Home/Encuesta/backs/2/barrar.gif |
| static/coyspunet/Home/Encuesta/backs/2/barrav.gif | content/_recursos/coyspunet/Home/Encuesta/backs/2/barrav.gif |
| static/coyspunet/Home/Encuesta/backs/2/crearencuesta.htm | content/_recursos/coyspunet/Home/Encuesta/backs/2/crearencuesta.htm |
| static/coyspunet/Home/Encuesta/backs/2/crearencuesta.html | content/_recursos/coyspunet/Home/Encuesta/backs/2/crearencuesta.html |
| static/coyspunet/Home/Encuesta/backs/2/encuesta.html | content/_recursos/coyspunet/Home/Encuesta/backs/2/encuesta.html |
| static/coyspunet/Home/Encuesta/backs/2/historico.html | content/_recursos/coyspunet/Home/Encuesta/backs/2/historico.html |
| static/coyspunet/Home/Encuesta/backs/2/ir.gif | content/_recursos/coyspunet/Home/Encuesta/backs/2/ir.gif |
| static/coyspunet/Home/Encuesta/backs/2/opinar.gif | content/_recursos/coyspunet/Home/Encuesta/backs/2/opinar.gif |
| static/coyspunet/Home/Encuesta/backs/2/verencuesta.html | content/_recursos/coyspunet/Home/Encuesta/backs/2/verencuesta.html |
| static/coyspunet/Home/Encuesta/Docs/Articulos ProgramTuWeb_com - Un sistema de encuestas - ASP.htm | content/_recursos/coyspunet/Home/Encuesta/Docs/Articulos ProgramTuWeb_com - Un sistema de encuestas - ASP.htm |
| static/coyspunet/Home/Encuesta/Docs/Articulos ProgramTuWeb_com - Un sistema de encuestas - ASP_archivos/bdencuesta.gif | content/_recursos/coyspunet/Home/Encuesta/Docs/Articulos ProgramTuWeb_com - Un sistema de encuestas - ASP_archivos/bdencuesta.gif |
| static/coyspunet/Home/Encuesta/Docs/Articulos ProgramTuWeb_com - Un sistema de encuestas - ASP_archivos/bdencuesta2.gif | content/_recursos/coyspunet/Home/Encuesta/Docs/Articulos ProgramTuWeb_com - Un sistema de encuestas - ASP_archivos/bdencuesta2.gif |
| static/coyspunet/Home/Encuesta/Docs/Articulos ProgramTuWeb_com - Un sistema de encuestas - ASP_archivos/wm.css | content/_recursos/coyspunet/Home/Encuesta/Docs/Articulos ProgramTuWeb_com - Un sistema de encuestas - ASP_archivos/wm.css |
| static/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/Encuesta-mail.htm | content/_recursos/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/Encuesta-mail.htm |
| static/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/Encuesta-online.htm | content/_recursos/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/Encuesta-online.htm |
| static/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/EncuestaADSLConfirmar.html | content/_recursos/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/EncuestaADSLConfirmar.html |
| static/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/EncuestaADSLUpdate.html | content/_recursos/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/EncuestaADSLUpdate.html |
| static/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/mail_r1_c1.jpg | content/_recursos/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/mail_r1_c1.jpg |
| static/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/mail_r1_c4.jpg | content/_recursos/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/mail_r1_c4.jpg |
| static/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/mail_r1_c5.jpg | content/_recursos/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/mail_r1_c5.jpg |
| static/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/mail_r2_c1.jpg | content/_recursos/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/mail_r2_c1.jpg |
| static/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/mail_r3_c1.jpg | content/_recursos/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/mail_r3_c1.jpg |
| static/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/mail_r3_c2.jpg | content/_recursos/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/mail_r3_c2.jpg |
| static/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/mail_r3_c5.jpg | content/_recursos/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/mail_r3_c5.jpg |
| static/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/mail_r4_c1.jpg | content/_recursos/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/mail_r4_c1.jpg |
| static/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/mail_r4_c2.jpg | content/_recursos/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/mail_r4_c2.jpg |
| static/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/mail_r4_c3.jpg | content/_recursos/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/mail_r4_c3.jpg |
| static/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/mail_r4_c5.jpg | content/_recursos/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/mail_r4_c5.jpg |
| static/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/mail_r5_c1.jpg | content/_recursos/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/mail_r5_c1.jpg |
| static/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/mail_r6_c1.jpg | content/_recursos/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/mail_r6_c1.jpg |
| static/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/mail_r6_c2.jpg | content/_recursos/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/mail_r6_c2.jpg |
| static/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/mail_r6_c5.jpg | content/_recursos/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/mail_r6_c5.jpg |
| static/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/mail_r7_c1.jpg | content/_recursos/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/mail_r7_c1.jpg |
| static/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/mail_r7_c3.jpg | content/_recursos/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/mail_r7_c3.jpg |
| static/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/mail.htm | content/_recursos/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/mail.htm |
| static/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/mail.png | content/_recursos/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/mail.png |
| static/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/mail2.htm | content/_recursos/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/mail2.htm |
| static/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/moviefi.swf.swf | content/_recursos/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/moviefi.swf.swf |
| static/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/moviefi2.swf.swf | content/_recursos/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/moviefi2.swf.swf |
| static/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/resultados.html | content/_recursos/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/resultados.html |
| static/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/spacer.gif | content/_recursos/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/spacer.gif |
| static/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/1cnf/mail_r5_c1.jpg | content/_recursos/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/1cnf/mail_r5_c1.jpg |
| static/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/1cnf/mail2.htm | content/_recursos/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/1cnf/mail2.htm |
| static/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/1cnf/moviefi.swf.swf | content/_recursos/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/1cnf/moviefi.swf.swf |
| static/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/Encuesta/Especiales/EncuestaADSL/mail_r5_c1.jpg | content/_recursos/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/Encuesta/Especiales/EncuestaADSL/mail_r5_c1.jpg |
| static/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/imagenes/Boton_ContestarNuevamente.gif | content/_recursos/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/imagenes/Boton_ContestarNuevamente.gif |
| static/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/imagenes/Boton_EnviarEncuestav.gif | content/_recursos/coyspunet/Home/Encuesta/Especiales/EncuestaADSL/imagenes/Boton_EnviarEncuestav.gif |
| static/coyspunet/Home/EspecialesCdigital/2003mayo22.htm | content/_recursos/coyspunet/Home/EspecialesCdigital/2003mayo22.htm |
| static/coyspunet/Home/EspecialesCdigital/1cnf/2003mayo22.htm | content/_recursos/coyspunet/Home/EspecialesCdigital/1cnf/2003mayo22.htm |
| static/coyspunet/Home/Gestion/BarraSeparadora.gif | content/_recursos/coyspunet/Home/Gestion/BarraSeparadora.gif |
| static/coyspunet/Home/Gestion/Blanco.gif | content/_recursos/coyspunet/Home/Gestion/Blanco.gif |
| static/coyspunet/Home/Gestion/Contenido.htm | content/_recursos/coyspunet/Home/Gestion/Contenido.htm |
| static/coyspunet/Home/Gestion/CoyspuLogo.gif | content/_recursos/coyspunet/Home/Gestion/CoyspuLogo.gif |
| static/coyspunet/Home/Gestion/Cuadradito.gif | content/_recursos/coyspunet/Home/Gestion/Cuadradito.gif |
| static/coyspunet/Home/Gestion/Cuadradito2.gif | content/_recursos/coyspunet/Home/Gestion/Cuadradito2.gif |
| static/coyspunet/Home/Gestion/Default.htm | content/_recursos/coyspunet/Home/Gestion/Default.htm |
| static/coyspunet/Home/Gestion/Flechitas.gif | content/_recursos/coyspunet/Home/Gestion/Flechitas.gif |
| static/coyspunet/Home/Gestion/Menu.htm | content/_recursos/coyspunet/Home/Gestion/Menu.htm |
| static/coyspunet/Home/Gestion/titulo.htm | content/_recursos/coyspunet/Home/Gestion/titulo.htm |
| static/coyspunet/Home/Gestion/1cnf/BarraSeparadora.gif | content/_recursos/coyspunet/Home/Gestion/1cnf/BarraSeparadora.gif |
| static/coyspunet/Home/Gestion/1cnf/blanco.gif | content/_recursos/coyspunet/Home/Gestion/1cnf/blanco.gif |
| static/coyspunet/Home/Gestion/1cnf/Contenido.htm | content/_recursos/coyspunet/Home/Gestion/1cnf/Contenido.htm |
| static/coyspunet/Home/Gestion/1cnf/CoyspuLogo.gif | content/_recursos/coyspunet/Home/Gestion/1cnf/CoyspuLogo.gif |
| static/coyspunet/Home/Gestion/1cnf/Cuadradito.gif | content/_recursos/coyspunet/Home/Gestion/1cnf/Cuadradito.gif |
| static/coyspunet/Home/Gestion/1cnf/cuadradito2.gif | content/_recursos/coyspunet/Home/Gestion/1cnf/cuadradito2.gif |
| static/coyspunet/Home/Gestion/1cnf/default.htm | content/_recursos/coyspunet/Home/Gestion/1cnf/default.htm |
| static/coyspunet/Home/Gestion/1cnf/Flechitas.gif | content/_recursos/coyspunet/Home/Gestion/1cnf/Flechitas.gif |
| static/coyspunet/Home/Gestion/1cnf/Menu.htm | content/_recursos/coyspunet/Home/Gestion/1cnf/Menu.htm |
| static/coyspunet/Home/Gestion/1cnf/titulo.htm | content/_recursos/coyspunet/Home/Gestion/1cnf/titulo.htm |
| static/coyspunet/Home/Gestion/Enlaces/Agregar_enlace.html | content/_recursos/coyspunet/Home/Gestion/Enlaces/Agregar_enlace.html |
| static/coyspunet/Home/Gestion/Enlaces/Agregar.html | content/_recursos/coyspunet/Home/Gestion/Enlaces/Agregar.html |
| static/coyspunet/Home/Gestion/Enlaces/borrar_enlace.html | content/_recursos/coyspunet/Home/Gestion/Enlaces/borrar_enlace.html |
| static/coyspunet/Home/Gestion/Enlaces/borrar.html | content/_recursos/coyspunet/Home/Gestion/Enlaces/borrar.html |
| static/coyspunet/Home/Gestion/Enlaces/enlace.html | content/_recursos/coyspunet/Home/Gestion/Enlaces/enlace.html |
| static/coyspunet/Home/Gestion/Enlaces/listado.html | content/_recursos/coyspunet/Home/Gestion/Enlaces/listado.html |
| static/coyspunet/Home/Gestion/Enlaces/Modificar_enlace.html | content/_recursos/coyspunet/Home/Gestion/Enlaces/Modificar_enlace.html |
| static/coyspunet/Home/Gestion/Enlaces/Modificar_ingreso_cambios.html | content/_recursos/coyspunet/Home/Gestion/Enlaces/Modificar_ingreso_cambios.html |
| static/coyspunet/Home/Gestion/Enlaces/Modificar.html | content/_recursos/coyspunet/Home/Gestion/Enlaces/Modificar.html |
| static/coyspunet/Home/Gestion/Enlaces/test.html | content/_recursos/coyspunet/Home/Gestion/Enlaces/test.html |
| static/coyspunet/Home/Gestion/Enlaces/1cnf/Administracion_Menu.htm | content/_recursos/coyspunet/Home/Gestion/Enlaces/1cnf/Administracion_Menu.htm |
| static/coyspunet/Home/Gestion/Enlaces/1cnf/Administracion.htm | content/_recursos/coyspunet/Home/Gestion/Enlaces/1cnf/Administracion.htm |
| static/coyspunet/Home/Gestion/Enlaces/1cnf/agrega_noticia.html | content/_recursos/coyspunet/Home/Gestion/Enlaces/1cnf/agrega_noticia.html |
| static/coyspunet/Home/Gestion/Enlaces/1cnf/agregar_enlace.html | content/_recursos/coyspunet/Home/Gestion/Enlaces/1cnf/agregar_enlace.html |
| static/coyspunet/Home/Gestion/Enlaces/1cnf/Agregar.html | content/_recursos/coyspunet/Home/Gestion/Enlaces/1cnf/Agregar.html |
| static/coyspunet/Home/Gestion/Enlaces/1cnf/borrar_enlace.html | content/_recursos/coyspunet/Home/Gestion/Enlaces/1cnf/borrar_enlace.html |
| static/coyspunet/Home/Gestion/Enlaces/1cnf/borrar_noticia.html | content/_recursos/coyspunet/Home/Gestion/Enlaces/1cnf/borrar_noticia.html |
| static/coyspunet/Home/Gestion/Enlaces/1cnf/borrar.html | content/_recursos/coyspunet/Home/Gestion/Enlaces/1cnf/borrar.html |
| static/coyspunet/Home/Gestion/Enlaces/1cnf/formulario.htm | content/_recursos/coyspunet/Home/Gestion/Enlaces/1cnf/formulario.htm |
| static/coyspunet/Home/Gestion/Enlaces/1cnf/listado.html | content/_recursos/coyspunet/Home/Gestion/Enlaces/1cnf/listado.html |
| static/coyspunet/Home/Gestion/Enlaces/1cnf/Modificar_enlace.html | content/_recursos/coyspunet/Home/Gestion/Enlaces/1cnf/Modificar_enlace.html |
| static/coyspunet/Home/Gestion/Enlaces/1cnf/Modificar_ingreso_cambios.html | content/_recursos/coyspunet/Home/Gestion/Enlaces/1cnf/Modificar_ingreso_cambios.html |
| static/coyspunet/Home/Gestion/Enlaces/1cnf/Modificar_noticia.html | content/_recursos/coyspunet/Home/Gestion/Enlaces/1cnf/Modificar_noticia.html |
| static/coyspunet/Home/Gestion/Enlaces/1cnf/modificar.html | content/_recursos/coyspunet/Home/Gestion/Enlaces/1cnf/modificar.html |
| static/coyspunet/Home/Gestion/Enlaces/1cnf/noticia.html | content/_recursos/coyspunet/Home/Gestion/Enlaces/1cnf/noticia.html |
| static/coyspunet/Home/Gestion/Noticias/agrega_noticia.html | content/_recursos/coyspunet/Home/Gestion/Noticias/agrega_noticia.html |
| static/coyspunet/Home/Gestion/Noticias/borrar_noticia.html | content/_recursos/coyspunet/Home/Gestion/Noticias/borrar_noticia.html |
| static/coyspunet/Home/Gestion/Noticias/borrar.html | content/_recursos/coyspunet/Home/Gestion/Noticias/borrar.html |
| static/coyspunet/Home/Gestion/Noticias/formulario.htm | content/_recursos/coyspunet/Home/Gestion/Noticias/formulario.htm |
| static/coyspunet/Home/Gestion/Noticias/listado.html | content/_recursos/coyspunet/Home/Gestion/Noticias/listado.html |
| static/coyspunet/Home/Gestion/Noticias/Modificar_ingreso_cambios.html | content/_recursos/coyspunet/Home/Gestion/Noticias/Modificar_ingreso_cambios.html |
| static/coyspunet/Home/Gestion/Noticias/Modificar_noticia.html | content/_recursos/coyspunet/Home/Gestion/Noticias/Modificar_noticia.html |
| static/coyspunet/Home/Gestion/Noticias/Modificar.html | content/_recursos/coyspunet/Home/Gestion/Noticias/Modificar.html |
| static/coyspunet/Home/Gestion/Noticias/noticia.html | content/_recursos/coyspunet/Home/Gestion/Noticias/noticia.html |
| static/coyspunet/Home/Gestion/Noticias/1cnf/Administracion_Menu.htm | content/_recursos/coyspunet/Home/Gestion/Noticias/1cnf/Administracion_Menu.htm |
| static/coyspunet/Home/Gestion/Noticias/1cnf/Administracion.htm | content/_recursos/coyspunet/Home/Gestion/Noticias/1cnf/Administracion.htm |
| static/coyspunet/Home/Gestion/Noticias/1cnf/agrega_noticia.html | content/_recursos/coyspunet/Home/Gestion/Noticias/1cnf/agrega_noticia.html |
| static/coyspunet/Home/Gestion/Noticias/1cnf/borrar_noticia.html | content/_recursos/coyspunet/Home/Gestion/Noticias/1cnf/borrar_noticia.html |
| static/coyspunet/Home/Gestion/Noticias/1cnf/borrar.html | content/_recursos/coyspunet/Home/Gestion/Noticias/1cnf/borrar.html |
| static/coyspunet/Home/Gestion/Noticias/1cnf/formulario.htm | content/_recursos/coyspunet/Home/Gestion/Noticias/1cnf/formulario.htm |
| static/coyspunet/Home/Gestion/Noticias/1cnf/listado.html | content/_recursos/coyspunet/Home/Gestion/Noticias/1cnf/listado.html |
| static/coyspunet/Home/Gestion/Noticias/1cnf/Modificar_ingreso_cambios.html | content/_recursos/coyspunet/Home/Gestion/Noticias/1cnf/Modificar_ingreso_cambios.html |
| static/coyspunet/Home/Gestion/Noticias/1cnf/Modificar_noticia.html | content/_recursos/coyspunet/Home/Gestion/Noticias/1cnf/Modificar_noticia.html |
| static/coyspunet/Home/Gestion/Noticias/1cnf/modificar.html | content/_recursos/coyspunet/Home/Gestion/Noticias/1cnf/modificar.html |
| static/coyspunet/Home/Gestion/Noticias/1cnf/noticia.html | content/_recursos/coyspunet/Home/Gestion/Noticias/1cnf/noticia.html |
| static/coyspunet/Home/Guiatelefonos/GuiaCoyspuTel.htm | content/_recursos/coyspunet/Home/Guiatelefonos/GuiaCoyspuTel.htm |
| static/coyspunet/Home/Guiatelefonos/1cnf/GuiaCoyspuTel.htm | content/_recursos/coyspunet/Home/Guiatelefonos/1cnf/GuiaCoyspuTel.htm |
| static/coyspunet/Home/Guiatelefonos/1cnf/guiatel.htm | content/_recursos/coyspunet/Home/Guiatelefonos/1cnf/guiatel.htm |
| static/coyspunet/Home/Guiatelefonos/GuiaCoyspuTel_archivos/filelist.xml | content/_recursos/coyspunet/Home/Guiatelefonos/GuiaCoyspuTel_archivos/filelist.xml |
| static/coyspunet/Home/Guiatelefonos/GuiaCoyspuTel_archivos/guia1_9029_image001.gif | content/_recursos/coyspunet/Home/Guiatelefonos/GuiaCoyspuTel_archivos/guia1_9029_image001.gif |
| static/coyspunet/Home/Guiatelefonos/GuiaCoyspuTel_archivos/1cnf/filelist.xml | content/_recursos/coyspunet/Home/Guiatelefonos/GuiaCoyspuTel_archivos/1cnf/filelist.xml |
| static/coyspunet/Home/Guiatelefonos/GuiaCoyspuTel_archivos/1cnf/guia1_9029_image001.gif | content/_recursos/coyspunet/Home/Guiatelefonos/GuiaCoyspuTel_archivos/1cnf/guia1_9029_image001.gif |
| static/coyspunet/Home/Imagenes/Ambulancia_small.jpg | content/_recursos/coyspunet/Home/Imagenes/Ambulancia_small.jpg |
| static/coyspunet/Home/Imagenes/Ambulancia.htm | content/_recursos/coyspunet/Home/Imagenes/Ambulancia.htm |
| static/coyspunet/Home/Imagenes/Boton_buscar_verde.gif | content/_recursos/coyspunet/Home/Imagenes/Boton_buscar_verde.gif |
| static/coyspunet/Home/Imagenes/Boton_Buscar.gif | content/_recursos/coyspunet/Home/Imagenes/Boton_Buscar.gif |
| static/coyspunet/Home/Imagenes/Boton_cerrar.gif | content/_recursos/coyspunet/Home/Imagenes/Boton_cerrar.gif |
| static/coyspunet/Home/Imagenes/Boton_ConfirmarEncuesta.gif | content/_recursos/coyspunet/Home/Imagenes/Boton_ConfirmarEncuesta.gif |
| static/coyspunet/Home/Imagenes/Boton_ContestarNuevamente.gif | content/_recursos/coyspunet/Home/Imagenes/Boton_ContestarNuevamente.gif |
| static/coyspunet/Home/Imagenes/Boton_EnviarEncuesta.gif | content/_recursos/coyspunet/Home/Imagenes/Boton_EnviarEncuesta.gif |
| static/coyspunet/Home/Imagenes/Boton_EnviarEncuestav.gif | content/_recursos/coyspunet/Home/Imagenes/Boton_EnviarEncuestav.gif |
| static/coyspunet/Home/Imagenes/Bullet.gif | content/_recursos/coyspunet/Home/Imagenes/Bullet.gif |
| static/coyspunet/Home/Imagenes/Cajon_ab.gif | content/_recursos/coyspunet/Home/Imagenes/Cajon_ab.gif |
| static/coyspunet/Home/Imagenes/Cajon_ar_der.gif | content/_recursos/coyspunet/Home/Imagenes/Cajon_ar_der.gif |
| static/coyspunet/Home/Imagenes/Cajon_ar_izq.gif | content/_recursos/coyspunet/Home/Imagenes/Cajon_ar_izq.gif |
| static/coyspunet/Home/Imagenes/Cajon_ar.gif | content/_recursos/coyspunet/Home/Imagenes/Cajon_ar.gif |
| static/coyspunet/Home/Imagenes/Cajon_der_ab.gif | content/_recursos/coyspunet/Home/Imagenes/Cajon_der_ab.gif |
| static/coyspunet/Home/Imagenes/Cajon_der_med.gif | content/_recursos/coyspunet/Home/Imagenes/Cajon_der_med.gif |
| static/coyspunet/Home/Imagenes/Cajon_der.gif | content/_recursos/coyspunet/Home/Imagenes/Cajon_der.gif |
| static/coyspunet/Home/Imagenes/Cajon_izq_ab.gif | content/_recursos/coyspunet/Home/Imagenes/Cajon_izq_ab.gif |
| static/coyspunet/Home/Imagenes/Cajon_izq_med.gif | content/_recursos/coyspunet/Home/Imagenes/Cajon_izq_med.gif |
| static/coyspunet/Home/Imagenes/Cajon_izq.gif | content/_recursos/coyspunet/Home/Imagenes/Cajon_izq.gif |
| static/coyspunet/Home/Imagenes/Cajon_med.gif | content/_recursos/coyspunet/Home/Imagenes/Cajon_med.gif |
| static/coyspunet/Home/Imagenes/Consultorios_small.jpg | content/_recursos/coyspunet/Home/Imagenes/Consultorios_small.jpg |
| static/coyspunet/Home/Imagenes/Consultorios.htm | content/_recursos/coyspunet/Home/Imagenes/Consultorios.htm |
| static/coyspunet/Home/Imagenes/Consultorios.jpg | content/_recursos/coyspunet/Home/Imagenes/Consultorios.jpg |
| static/coyspunet/Home/Imagenes/FondoTextbuttonAzul.jpg | content/_recursos/coyspunet/Home/Imagenes/FondoTextbuttonAzul.jpg |
| static/coyspunet/Home/Imagenes/frentecooperativa_small.jpg | content/_recursos/coyspunet/Home/Imagenes/frentecooperativa_small.jpg |
| static/coyspunet/Home/Imagenes/frentecooperativa.htm | content/_recursos/coyspunet/Home/Imagenes/frentecooperativa.htm |
| static/coyspunet/Home/Imagenes/frentecooperativa.jpg | content/_recursos/coyspunet/Home/Imagenes/frentecooperativa.jpg |
| static/coyspunet/Home/Imagenes/frentecooperativavieja_small.jpg | content/_recursos/coyspunet/Home/Imagenes/frentecooperativavieja_small.jpg |
| static/coyspunet/Home/Imagenes/frentecooperativavieja.htm | content/_recursos/coyspunet/Home/Imagenes/frentecooperativavieja.htm |
| static/coyspunet/Home/Imagenes/frentecooperativavieja.jpg | content/_recursos/coyspunet/Home/Imagenes/frentecooperativavieja.jpg |
| static/coyspunet/Home/Imagenes/GT_enviar.gif | content/_recursos/coyspunet/Home/Imagenes/GT_enviar.gif |
| static/coyspunet/Home/Imagenes/home.css | content/_recursos/coyspunet/Home/Imagenes/home.css |
| static/coyspunet/Home/Imagenes/laboratoriofrente_small.jpg | content/_recursos/coyspunet/Home/Imagenes/laboratoriofrente_small.jpg |
| static/coyspunet/Home/Imagenes/laboratoriofrente.htm | content/_recursos/coyspunet/Home/Imagenes/laboratoriofrente.htm |
| static/coyspunet/Home/Imagenes/laboratoriofrente.jpg | content/_recursos/coyspunet/Home/Imagenes/laboratoriofrente.jpg |
| static/coyspunet/Home/Imagenes/Lateral_Derecho.gif | content/_recursos/coyspunet/Home/Imagenes/Lateral_Derecho.gif |
| static/coyspunet/Home/Imagenes/Lateral_Inferior.gif | content/_recursos/coyspunet/Home/Imagenes/Lateral_Inferior.gif |
| static/coyspunet/Home/Imagenes/Lateral_Inferior2.gif | content/_recursos/coyspunet/Home/Imagenes/Lateral_Inferior2.gif |
| static/coyspunet/Home/Imagenes/Lateral_izquierdo.gif | content/_recursos/coyspunet/Home/Imagenes/Lateral_izquierdo.gif |
| static/coyspunet/Home/Imagenes/Lateral_Superior_tit.gif | content/_recursos/coyspunet/Home/Imagenes/Lateral_Superior_tit.gif |
| static/coyspunet/Home/Imagenes/LogoCoyspuDigital_chico.gif | content/_recursos/coyspunet/Home/Imagenes/LogoCoyspuDigital_chico.gif |
| static/coyspunet/Home/Imagenes/LogoCoyspuDigital_icono.gif | content/_recursos/coyspunet/Home/Imagenes/LogoCoyspuDigital_icono.gif |
| static/coyspunet/Home/Imagenes/LogoCoyspuDigital.gif | content/_recursos/coyspunet/Home/Imagenes/LogoCoyspuDigital.gif |
| static/coyspunet/Home/Imagenes/LogoCoysputel.gif | content/_recursos/coyspunet/Home/Imagenes/LogoCoysputel.gif |
| static/coyspunet/Home/Imagenes/PlantaAgua_small.jpg | content/_recursos/coyspunet/Home/Imagenes/PlantaAgua_small.jpg |
| static/coyspunet/Home/Imagenes/PlantaAgua.htm | content/_recursos/coyspunet/Home/Imagenes/PlantaAgua.htm |
| static/coyspunet/Home/Imagenes/PlantaAgua.jpg | content/_recursos/coyspunet/Home/Imagenes/PlantaAgua.jpg |
| static/coyspunet/Home/Imagenes/PlantaCloacas_small.jpg | content/_recursos/coyspunet/Home/Imagenes/PlantaCloacas_small.jpg |
| static/coyspunet/Home/Imagenes/PlantaCloacas.htm | content/_recursos/coyspunet/Home/Imagenes/PlantaCloacas.htm |
| static/coyspunet/Home/Imagenes/PlantaCloacas.jpg | content/_recursos/coyspunet/Home/Imagenes/PlantaCloacas.jpg |
| static/coyspunet/Home/Imagenes/recorte_inf_dcha.gif | content/_recursos/coyspunet/Home/Imagenes/recorte_inf_dcha.gif |
| static/coyspunet/Home/Imagenes/recorte_inf_izda.gif | content/_recursos/coyspunet/Home/Imagenes/recorte_inf_izda.gif |
| static/coyspunet/Home/Imagenes/recorte_sup_dcha_tit.gif | content/_recursos/coyspunet/Home/Imagenes/recorte_sup_dcha_tit.gif |
| static/coyspunet/Home/Imagenes/recorte_sup_dcha.gif | content/_recursos/coyspunet/Home/Imagenes/recorte_sup_dcha.gif |
| static/coyspunet/Home/Imagenes/recorte_sup_izda_tit.gif | content/_recursos/coyspunet/Home/Imagenes/recorte_sup_izda_tit.gif |
| static/coyspunet/Home/Imagenes/recorte_sup_izda.gif | content/_recursos/coyspunet/Home/Imagenes/recorte_sup_izda.gif |
| static/coyspunet/Home/Imagenes/Tit.gif | content/_recursos/coyspunet/Home/Imagenes/Tit.gif |
| static/coyspunet/Home/Imagenes/1cnf/Ambulancia_small.jpg | content/_recursos/coyspunet/Home/Imagenes/1cnf/Ambulancia_small.jpg |
| static/coyspunet/Home/Imagenes/1cnf/Ambulancia.htm | content/_recursos/coyspunet/Home/Imagenes/1cnf/Ambulancia.htm |
| static/coyspunet/Home/Imagenes/1cnf/ambulancia.jpg | content/_recursos/coyspunet/Home/Imagenes/1cnf/ambulancia.jpg |
| static/coyspunet/Home/Imagenes/1cnf/Boton_buscar_verde.gif | content/_recursos/coyspunet/Home/Imagenes/1cnf/Boton_buscar_verde.gif |
| static/coyspunet/Home/Imagenes/1cnf/Boton_cerrar.gif | content/_recursos/coyspunet/Home/Imagenes/1cnf/Boton_cerrar.gif |
| static/coyspunet/Home/Imagenes/1cnf/Boton_ConfirmarEncuesta.gif | content/_recursos/coyspunet/Home/Imagenes/1cnf/Boton_ConfirmarEncuesta.gif |
| static/coyspunet/Home/Imagenes/1cnf/Boton_ContestarNuevamente.gif | content/_recursos/coyspunet/Home/Imagenes/1cnf/Boton_ContestarNuevamente.gif |
| static/coyspunet/Home/Imagenes/1cnf/Boton_EnviarEncuestav.gif | content/_recursos/coyspunet/Home/Imagenes/1cnf/Boton_EnviarEncuestav.gif |
| static/coyspunet/Home/Imagenes/1cnf/Bullet.gif | content/_recursos/coyspunet/Home/Imagenes/1cnf/Bullet.gif |
| static/coyspunet/Home/Imagenes/1cnf/Cajon_ab.gif | content/_recursos/coyspunet/Home/Imagenes/1cnf/Cajon_ab.gif |
| static/coyspunet/Home/Imagenes/1cnf/Cajon_ar_der.gif | content/_recursos/coyspunet/Home/Imagenes/1cnf/Cajon_ar_der.gif |
| static/coyspunet/Home/Imagenes/1cnf/Cajon_ar_izq.gif | content/_recursos/coyspunet/Home/Imagenes/1cnf/Cajon_ar_izq.gif |
| static/coyspunet/Home/Imagenes/1cnf/Cajon_ar.gif | content/_recursos/coyspunet/Home/Imagenes/1cnf/Cajon_ar.gif |
| static/coyspunet/Home/Imagenes/1cnf/Cajon_der_ab.gif | content/_recursos/coyspunet/Home/Imagenes/1cnf/Cajon_der_ab.gif |
| static/coyspunet/Home/Imagenes/1cnf/Cajon_der_med.gif | content/_recursos/coyspunet/Home/Imagenes/1cnf/Cajon_der_med.gif |
| static/coyspunet/Home/Imagenes/1cnf/Cajon_der.gif | content/_recursos/coyspunet/Home/Imagenes/1cnf/Cajon_der.gif |
| static/coyspunet/Home/Imagenes/1cnf/Cajon_izq_ab.gif | content/_recursos/coyspunet/Home/Imagenes/1cnf/Cajon_izq_ab.gif |
| static/coyspunet/Home/Imagenes/1cnf/Cajon_izq_med.gif | content/_recursos/coyspunet/Home/Imagenes/1cnf/Cajon_izq_med.gif |
| static/coyspunet/Home/Imagenes/1cnf/Cajon_izq.gif | content/_recursos/coyspunet/Home/Imagenes/1cnf/Cajon_izq.gif |
| static/coyspunet/Home/Imagenes/1cnf/Cajon_med.gif | content/_recursos/coyspunet/Home/Imagenes/1cnf/Cajon_med.gif |
| static/coyspunet/Home/Imagenes/1cnf/Consultorios_small.jpg | content/_recursos/coyspunet/Home/Imagenes/1cnf/Consultorios_small.jpg |
| static/coyspunet/Home/Imagenes/1cnf/Consultorios.htm | content/_recursos/coyspunet/Home/Imagenes/1cnf/Consultorios.htm |
| static/coyspunet/Home/Imagenes/1cnf/consultorios.jpg | content/_recursos/coyspunet/Home/Imagenes/1cnf/consultorios.jpg |
| static/coyspunet/Home/Imagenes/1cnf/FondoTextbuttonAzul.jpg | content/_recursos/coyspunet/Home/Imagenes/1cnf/FondoTextbuttonAzul.jpg |
| static/coyspunet/Home/Imagenes/1cnf/frentecooperativa_small.jpg | content/_recursos/coyspunet/Home/Imagenes/1cnf/frentecooperativa_small.jpg |
| static/coyspunet/Home/Imagenes/1cnf/frentecooperativa.htm | content/_recursos/coyspunet/Home/Imagenes/1cnf/frentecooperativa.htm |
| static/coyspunet/Home/Imagenes/1cnf/frentecooperativa.jpg | content/_recursos/coyspunet/Home/Imagenes/1cnf/frentecooperativa.jpg |
| static/coyspunet/Home/Imagenes/1cnf/frentecooperativavieja_small.jpg | content/_recursos/coyspunet/Home/Imagenes/1cnf/frentecooperativavieja_small.jpg |
| static/coyspunet/Home/Imagenes/1cnf/frentecooperativavieja.htm | content/_recursos/coyspunet/Home/Imagenes/1cnf/frentecooperativavieja.htm |
| static/coyspunet/Home/Imagenes/1cnf/frentecooperativavieja.jpg | content/_recursos/coyspunet/Home/Imagenes/1cnf/frentecooperativavieja.jpg |
| static/coyspunet/Home/Imagenes/1cnf/laboratoriofrente_small.jpg | content/_recursos/coyspunet/Home/Imagenes/1cnf/laboratoriofrente_small.jpg |
| static/coyspunet/Home/Imagenes/1cnf/laboratoriofrente.htm | content/_recursos/coyspunet/Home/Imagenes/1cnf/laboratoriofrente.htm |
| static/coyspunet/Home/Imagenes/1cnf/laboratoriofrente.jpg | content/_recursos/coyspunet/Home/Imagenes/1cnf/laboratoriofrente.jpg |
| static/coyspunet/Home/Imagenes/1cnf/Lateral_Derecho.gif | content/_recursos/coyspunet/Home/Imagenes/1cnf/Lateral_Derecho.gif |
| static/coyspunet/Home/Imagenes/1cnf/Lateral_Inferior.gif | content/_recursos/coyspunet/Home/Imagenes/1cnf/Lateral_Inferior.gif |
| static/coyspunet/Home/Imagenes/1cnf/Lateral_izquierdo.gif | content/_recursos/coyspunet/Home/Imagenes/1cnf/Lateral_izquierdo.gif |
| static/coyspunet/Home/Imagenes/1cnf/Lateral_Superior_tit.gif | content/_recursos/coyspunet/Home/Imagenes/1cnf/Lateral_Superior_tit.gif |
| static/coyspunet/Home/Imagenes/1cnf/LogoCoyspuDigital_chico.gif | content/_recursos/coyspunet/Home/Imagenes/1cnf/LogoCoyspuDigital_chico.gif |
| static/coyspunet/Home/Imagenes/1cnf/LogoCoysputel.gif | content/_recursos/coyspunet/Home/Imagenes/1cnf/LogoCoysputel.gif |
| static/coyspunet/Home/Imagenes/1cnf/PlantaAgua_small.jpg | content/_recursos/coyspunet/Home/Imagenes/1cnf/PlantaAgua_small.jpg |
| static/coyspunet/Home/Imagenes/1cnf/PlantaAgua.htm | content/_recursos/coyspunet/Home/Imagenes/1cnf/PlantaAgua.htm |
| static/coyspunet/Home/Imagenes/1cnf/PlantaAgua.jpg | content/_recursos/coyspunet/Home/Imagenes/1cnf/PlantaAgua.jpg |
| static/coyspunet/Home/Imagenes/1cnf/PlantaCloacas_small.jpg | content/_recursos/coyspunet/Home/Imagenes/1cnf/PlantaCloacas_small.jpg |
| static/coyspunet/Home/Imagenes/1cnf/PlantaCloacas.htm | content/_recursos/coyspunet/Home/Imagenes/1cnf/PlantaCloacas.htm |
| static/coyspunet/Home/Imagenes/1cnf/plantacloacas.jpg | content/_recursos/coyspunet/Home/Imagenes/1cnf/plantacloacas.jpg |
| static/coyspunet/Home/Imagenes/1cnf/recorte_inf_dcha.gif | content/_recursos/coyspunet/Home/Imagenes/1cnf/recorte_inf_dcha.gif |
| static/coyspunet/Home/Imagenes/1cnf/recorte_inf_izda.gif | content/_recursos/coyspunet/Home/Imagenes/1cnf/recorte_inf_izda.gif |
| static/coyspunet/Home/Imagenes/1cnf/recorte_sup_dcha_tit.gif | content/_recursos/coyspunet/Home/Imagenes/1cnf/recorte_sup_dcha_tit.gif |
| static/coyspunet/Home/Imagenes/1cnf/recorte_sup_izda_tit.gif | content/_recursos/coyspunet/Home/Imagenes/1cnf/recorte_sup_izda_tit.gif |
| static/coyspunet/Home/Imagenes/Coysputel/AreaImplementacionEtapa1_small.gif | content/_recursos/coyspunet/Home/Imagenes/Coysputel/AreaImplementacionEtapa1_small.gif |
| static/coyspunet/Home/Imagenes/Coysputel/AreaImplementacionEtapa1.gif | content/_recursos/coyspunet/Home/Imagenes/Coysputel/AreaImplementacionEtapa1.gif |
| static/coyspunet/Home/Imagenes/Coysputel/AreaImplementacionEtapa1.htm | content/_recursos/coyspunet/Home/Imagenes/Coysputel/AreaImplementacionEtapa1.htm |
| static/coyspunet/Home/Imagenes/Coysputel/central1_small.gif | content/_recursos/coyspunet/Home/Imagenes/Coysputel/central1_small.gif |
| static/coyspunet/Home/Imagenes/Coysputel/central1.gif | content/_recursos/coyspunet/Home/Imagenes/Coysputel/central1.gif |
| static/coyspunet/Home/Imagenes/Coysputel/Central1.htm | content/_recursos/coyspunet/Home/Imagenes/Coysputel/Central1.htm |
| static/coyspunet/Home/Imagenes/Coysputel/central2_small.gif | content/_recursos/coyspunet/Home/Imagenes/Coysputel/central2_small.gif |
| static/coyspunet/Home/Imagenes/Coysputel/central2.gif | content/_recursos/coyspunet/Home/Imagenes/Coysputel/central2.gif |
| static/coyspunet/Home/Imagenes/Coysputel/Central2.htm | content/_recursos/coyspunet/Home/Imagenes/Coysputel/Central2.htm |
| static/coyspunet/Home/Imagenes/Coysputel/central3_small.gif | content/_recursos/coyspunet/Home/Imagenes/Coysputel/central3_small.gif |
| static/coyspunet/Home/Imagenes/Coysputel/Central3.htm | content/_recursos/coyspunet/Home/Imagenes/Coysputel/Central3.htm |
| static/coyspunet/Home/Imagenes/Coysputel/central3.jpg | content/_recursos/coyspunet/Home/Imagenes/Coysputel/central3.jpg |
| static/coyspunet/Home/Imagenes/Coysputel/frenteobra_small.gif | content/_recursos/coyspunet/Home/Imagenes/Coysputel/frenteobra_small.gif |
| static/coyspunet/Home/Imagenes/Coysputel/frenteobra.gif | content/_recursos/coyspunet/Home/Imagenes/Coysputel/frenteobra.gif |
| static/coyspunet/Home/Imagenes/Coysputel/frenteobra.htm | content/_recursos/coyspunet/Home/Imagenes/Coysputel/frenteobra.htm |
| static/coyspunet/Home/Imagenes/Coysputel/Logo.gif | content/_recursos/coyspunet/Home/Imagenes/Coysputel/Logo.gif |
| static/coyspunet/Home/Imagenes/Coysputel/1cnf/AreaImplementacionEtapa1_small.gif | content/_recursos/coyspunet/Home/Imagenes/Coysputel/1cnf/AreaImplementacionEtapa1_small.gif |
| static/coyspunet/Home/Imagenes/Coysputel/1cnf/AreaImplementacionEtapa1.gif | content/_recursos/coyspunet/Home/Imagenes/Coysputel/1cnf/AreaImplementacionEtapa1.gif |
| static/coyspunet/Home/Imagenes/Coysputel/1cnf/AreaImplementacionEtapa1.htm | content/_recursos/coyspunet/Home/Imagenes/Coysputel/1cnf/AreaImplementacionEtapa1.htm |
| static/coyspunet/Home/Imagenes/Coysputel/1cnf/central1_small.gif | content/_recursos/coyspunet/Home/Imagenes/Coysputel/1cnf/central1_small.gif |
| static/coyspunet/Home/Imagenes/Coysputel/1cnf/central1.gif | content/_recursos/coyspunet/Home/Imagenes/Coysputel/1cnf/central1.gif |
| static/coyspunet/Home/Imagenes/Coysputel/1cnf/central1.htm | content/_recursos/coyspunet/Home/Imagenes/Coysputel/1cnf/central1.htm |
| static/coyspunet/Home/Imagenes/Coysputel/1cnf/central2_small.gif | content/_recursos/coyspunet/Home/Imagenes/Coysputel/1cnf/central2_small.gif |
| static/coyspunet/Home/Imagenes/Coysputel/1cnf/central2.gif | content/_recursos/coyspunet/Home/Imagenes/Coysputel/1cnf/central2.gif |
| static/coyspunet/Home/Imagenes/Coysputel/1cnf/central2.htm | content/_recursos/coyspunet/Home/Imagenes/Coysputel/1cnf/central2.htm |
| static/coyspunet/Home/Imagenes/Coysputel/1cnf/central3_small.gif | content/_recursos/coyspunet/Home/Imagenes/Coysputel/1cnf/central3_small.gif |
| static/coyspunet/Home/Imagenes/Coysputel/1cnf/central3.htm | content/_recursos/coyspunet/Home/Imagenes/Coysputel/1cnf/central3.htm |
| static/coyspunet/Home/Imagenes/Coysputel/1cnf/central3.jpg | content/_recursos/coyspunet/Home/Imagenes/Coysputel/1cnf/central3.jpg |
| static/coyspunet/Home/Imagenes/Coysputel/1cnf/frenteobra_small.gif | content/_recursos/coyspunet/Home/Imagenes/Coysputel/1cnf/frenteobra_small.gif |
| static/coyspunet/Home/Imagenes/Coysputel/1cnf/frenteobra.gif | content/_recursos/coyspunet/Home/Imagenes/Coysputel/1cnf/frenteobra.gif |
| static/coyspunet/Home/Imagenes/Coysputel/1cnf/frenteobra.htm | content/_recursos/coyspunet/Home/Imagenes/Coysputel/1cnf/frenteobra.htm |
| static/coyspunet/Home/Imagenes/Coysputel/1cnf/Logo.gif | content/_recursos/coyspunet/Home/Imagenes/Coysputel/1cnf/Logo.gif |
| static/coyspunet/Home/Imagenes/Guia/Bullet.gif | content/_recursos/coyspunet/Home/Imagenes/Guia/Bullet.gif |
| static/coyspunet/Home/Imagenes/Guia/Cajon_ab.gif | content/_recursos/coyspunet/Home/Imagenes/Guia/Cajon_ab.gif |
| static/coyspunet/Home/Imagenes/Guia/Cajon_ar_der.gif | content/_recursos/coyspunet/Home/Imagenes/Guia/Cajon_ar_der.gif |
| static/coyspunet/Home/Imagenes/Guia/Cajon_ar_izq.gif | content/_recursos/coyspunet/Home/Imagenes/Guia/Cajon_ar_izq.gif |
| static/coyspunet/Home/Imagenes/Guia/Cajon_ar.gif | content/_recursos/coyspunet/Home/Imagenes/Guia/Cajon_ar.gif |
| static/coyspunet/Home/Imagenes/Guia/Cajon_der_ab.gif | content/_recursos/coyspunet/Home/Imagenes/Guia/Cajon_der_ab.gif |
| static/coyspunet/Home/Imagenes/Guia/Cajon_der_med.gif | content/_recursos/coyspunet/Home/Imagenes/Guia/Cajon_der_med.gif |
| static/coyspunet/Home/Imagenes/Guia/Cajon_der.gif | content/_recursos/coyspunet/Home/Imagenes/Guia/Cajon_der.gif |
| static/coyspunet/Home/Imagenes/Guia/Cajon_izq_ab.gif | content/_recursos/coyspunet/Home/Imagenes/Guia/Cajon_izq_ab.gif |
| static/coyspunet/Home/Imagenes/Guia/Cajon_izq_med.gif | content/_recursos/coyspunet/Home/Imagenes/Guia/Cajon_izq_med.gif |
| static/coyspunet/Home/Imagenes/Guia/Cajon_izq.gif | content/_recursos/coyspunet/Home/Imagenes/Guia/Cajon_izq.gif |
| static/coyspunet/Home/Imagenes/Guia/Cajon_med.gif | content/_recursos/coyspunet/Home/Imagenes/Guia/Cajon_med.gif |
| static/coyspunet/Home/Imagenes/Guia/GT_enviar.gif | content/_recursos/coyspunet/Home/Imagenes/Guia/GT_enviar.gif |
| static/coyspunet/Home/Imagenes/Guia/home.css | content/_recursos/coyspunet/Home/Imagenes/Guia/home.css |
| static/coyspunet/Home/Imagenes/Guia/Tit.gif | content/_recursos/coyspunet/Home/Imagenes/Guia/Tit.gif |
| static/coyspunet/Home/Imagenes/Guia/1cnf/Bullet.gif | content/_recursos/coyspunet/Home/Imagenes/Guia/1cnf/Bullet.gif |
| static/coyspunet/Home/Imagenes/Guia/1cnf/Cajon_ab.gif | content/_recursos/coyspunet/Home/Imagenes/Guia/1cnf/Cajon_ab.gif |
| static/coyspunet/Home/Imagenes/Guia/1cnf/Cajon_ar_der.gif | content/_recursos/coyspunet/Home/Imagenes/Guia/1cnf/Cajon_ar_der.gif |
| static/coyspunet/Home/Imagenes/Guia/1cnf/Cajon_ar_izq.gif | content/_recursos/coyspunet/Home/Imagenes/Guia/1cnf/Cajon_ar_izq.gif |
| static/coyspunet/Home/Imagenes/Guia/1cnf/Cajon_ar.gif | content/_recursos/coyspunet/Home/Imagenes/Guia/1cnf/Cajon_ar.gif |
| static/coyspunet/Home/Imagenes/Guia/1cnf/Cajon_der_ab.gif | content/_recursos/coyspunet/Home/Imagenes/Guia/1cnf/Cajon_der_ab.gif |
| static/coyspunet/Home/Imagenes/Guia/1cnf/Cajon_der_med.gif | content/_recursos/coyspunet/Home/Imagenes/Guia/1cnf/Cajon_der_med.gif |
| static/coyspunet/Home/Imagenes/Guia/1cnf/Cajon_der.gif | content/_recursos/coyspunet/Home/Imagenes/Guia/1cnf/Cajon_der.gif |
| static/coyspunet/Home/Imagenes/Guia/1cnf/Cajon_izq_ab.gif | content/_recursos/coyspunet/Home/Imagenes/Guia/1cnf/Cajon_izq_ab.gif |
| static/coyspunet/Home/Imagenes/Guia/1cnf/Cajon_izq_med.gif | content/_recursos/coyspunet/Home/Imagenes/Guia/1cnf/Cajon_izq_med.gif |
| static/coyspunet/Home/Imagenes/Guia/1cnf/Cajon_izq.gif | content/_recursos/coyspunet/Home/Imagenes/Guia/1cnf/Cajon_izq.gif |
| static/coyspunet/Home/Imagenes/Guia/1cnf/Cajon_med.gif | content/_recursos/coyspunet/Home/Imagenes/Guia/1cnf/Cajon_med.gif |
| static/coyspunet/Home/Imagenes/Guia/1cnf/GT_enviar.gif | content/_recursos/coyspunet/Home/Imagenes/Guia/1cnf/GT_enviar.gif |
| static/coyspunet/Home/Imagenes/Guia/1cnf/home.css | content/_recursos/coyspunet/Home/Imagenes/Guia/1cnf/home.css |
| static/coyspunet/Home/Imagenes/Guia/1cnf/Tit.gif | content/_recursos/coyspunet/Home/Imagenes/Guia/1cnf/Tit.gif |
| static/coyspunet/Home/Imagenes/_ee/Lateral_Inferior2.gif | content/_recursos/coyspunet/Home/Imagenes/_ee/Lateral_Inferior2.gif |
| static/coyspunet/Home/Noticias/20030804a.htm | content/_recursos/coyspunet/Home/Noticias/20030804a.htm |
| static/coyspunet/Home/RedMulticampus/Aprovechamiento de Medios Digitales.htm | content/_recursos/coyspunet/Home/RedMulticampus/Aprovechamiento de Medios Digitales.htm |
| static/coyspunet/Home/RedMulticampus/Aspectos fundamentales en la Protección del Patrimonio Cultural.htm | content/_recursos/coyspunet/Home/RedMulticampus/Aspectos fundamentales en la Protección del Patrimonio Cultural.htm |
| static/coyspunet/Home/RedMulticampus/Auxiliar en Refrigeración.htm | content/_recursos/coyspunet/Home/RedMulticampus/Auxiliar en Refrigeración.htm |
| static/coyspunet/Home/RedMulticampus/Ceremonial y Protocolo Su importancia en la Organización de Eventos.htm | content/_recursos/coyspunet/Home/RedMulticampus/Ceremonial y Protocolo Su importancia en la Organización de Eventos.htm |
| static/coyspunet/Home/RedMulticampus/Diseño de jardines.htm | content/_recursos/coyspunet/Home/RedMulticampus/Diseño de jardines.htm |
| static/coyspunet/Home/RedMulticampus/El Conflicto en las Instituciones Escolares.htm | content/_recursos/coyspunet/Home/RedMulticampus/El Conflicto en las Instituciones Escolares.htm |
| static/coyspunet/Home/RedMulticampus/Estadística Descriptiva Aplicada.htm | content/_recursos/coyspunet/Home/RedMulticampus/Estadística Descriptiva Aplicada.htm |
| static/coyspunet/Home/RedMulticampus/Estrategias para enseñar a aprender.htm | content/_recursos/coyspunet/Home/RedMulticampus/Estrategias para enseñar a aprender.htm |
| static/coyspunet/Home/RedMulticampus/Estrategias para la solución de problemas en ciencias naturales.htm | content/_recursos/coyspunet/Home/RedMulticampus/Estrategias para la solución de problemas en ciencias naturales.htm |
| static/coyspunet/Home/RedMulticampus/Introducción a Autocad 2D.htm | content/_recursos/coyspunet/Home/RedMulticampus/Introducción a Autocad 2D.htm |
| static/coyspunet/Home/RedMulticampus/Lectura, escritura  y gramática hacia la construcción de una gramática pedagógica.htm | content/_recursos/coyspunet/Home/RedMulticampus/Lectura, escritura  y gramática hacia la construcción de una gramática pedagógica.htm |
| static/coyspunet/Home/RedMulticampus/Matemática y computación aplicadas al aula en EGB1.htm | content/_recursos/coyspunet/Home/RedMulticampus/Matemática y computación aplicadas al aula en EGB1.htm |
| static/coyspunet/Home/RedMulticampus/Programa Aprov. Medios Digitales.htm | content/_recursos/coyspunet/Home/RedMulticampus/Programa Aprov. Medios Digitales.htm |
| static/coyspunet/Home/RedMulticampus/1cnf/Aprovechamiento de Medios Digitales.htm | content/_recursos/coyspunet/Home/RedMulticampus/1cnf/Aprovechamiento de Medios Digitales.htm |
| static/coyspunet/Home/RedMulticampus/1cnf/Aspectos fundamentales en la Protección del Patrimonio Cultural.htm | content/_recursos/coyspunet/Home/RedMulticampus/1cnf/Aspectos fundamentales en la Protección del Patrimonio Cultural.htm |
| static/coyspunet/Home/RedMulticampus/1cnf/Auxiliar en Refrigeración.htm | content/_recursos/coyspunet/Home/RedMulticampus/1cnf/Auxiliar en Refrigeración.htm |
| static/coyspunet/Home/RedMulticampus/1cnf/Ceremonial y Protocolo Su importancia en la Organización de Eventos.htm | content/_recursos/coyspunet/Home/RedMulticampus/1cnf/Ceremonial y Protocolo Su importancia en la Organización de Eventos.htm |
| static/coyspunet/Home/RedMulticampus/1cnf/Diseño de jardines.htm | content/_recursos/coyspunet/Home/RedMulticampus/1cnf/Diseño de jardines.htm |
| static/coyspunet/Home/RedMulticampus/1cnf/El Conflicto en las Instituciones Escolares.htm | content/_recursos/coyspunet/Home/RedMulticampus/1cnf/El Conflicto en las Instituciones Escolares.htm |
| static/coyspunet/Home/RedMulticampus/1cnf/Estadística Descriptiva Aplicada.htm | content/_recursos/coyspunet/Home/RedMulticampus/1cnf/Estadística Descriptiva Aplicada.htm |
| static/coyspunet/Home/RedMulticampus/1cnf/Estrategias para enseñar a aprender.htm | content/_recursos/coyspunet/Home/RedMulticampus/1cnf/Estrategias para enseñar a aprender.htm |
| static/coyspunet/Home/RedMulticampus/1cnf/Estrategias para la solución de problemas en ciencias naturales.htm | content/_recursos/coyspunet/Home/RedMulticampus/1cnf/Estrategias para la solución de problemas en ciencias naturales.htm |
| static/coyspunet/Home/RedMulticampus/1cnf/Introducción a Autocad 2D.htm | content/_recursos/coyspunet/Home/RedMulticampus/1cnf/Introducción a Autocad 2D.htm |
| static/coyspunet/Home/RedMulticampus/1cnf/Matemática y computación aplicadas al aula en EGB1.htm | content/_recursos/coyspunet/Home/RedMulticampus/1cnf/Matemática y computación aplicadas al aula en EGB1.htm |
| static/coyspunet/Home/RedMulticampus/1cnf/ProgramaInteligenciaEmocional.htm | content/_recursos/coyspunet/Home/RedMulticampus/1cnf/ProgramaInteligenciaEmocional.htm |
| static/coyspunet/Home/RedMulticampus/1cnf/Programainternet.htm | content/_recursos/coyspunet/Home/RedMulticampus/1cnf/Programainternet.htm |
| static/coyspunet/Home/RedMulticampus/1cnf/ProgramaPeriodDigital.htm | content/_recursos/coyspunet/Home/RedMulticampus/1cnf/ProgramaPeriodDigital.htm |
| static/coyspunet/Home/RedMulticampus/2004marzo/ProgramaInteligenciaEmocional.htm | content/_recursos/coyspunet/Home/RedMulticampus/2004marzo/ProgramaInteligenciaEmocional.htm |
| static/coyspunet/Home/RedMulticampus/2004marzo/Programainternet.htm | content/_recursos/coyspunet/Home/RedMulticampus/2004marzo/Programainternet.htm |
| static/coyspunet/Home/RedMulticampus/2004marzo/ProgramaPeriodDigital.htm | content/_recursos/coyspunet/Home/RedMulticampus/2004marzo/ProgramaPeriodDigital.htm |
| static/coyspunet/Home/RedMulticampus/Auxiliar en Refrigeración_archivos/filelist.xml | content/_recursos/coyspunet/Home/RedMulticampus/Auxiliar en Refrigeración_archivos/filelist.xml |
| static/coyspunet/Home/RedMulticampus/Auxiliar en Refrigeración_archivos/header.htm | content/_recursos/coyspunet/Home/RedMulticampus/Auxiliar en Refrigeración_archivos/header.htm |
| static/coyspunet/Home/RedMulticampus/Auxiliar en Refrigeración_archivos/image001.png | content/_recursos/coyspunet/Home/RedMulticampus/Auxiliar en Refrigeración_archivos/image001.png |
| static/coyspunet/Home/RedMulticampus/Auxiliar en Refrigeración_archivos/image002.jpg | content/_recursos/coyspunet/Home/RedMulticampus/Auxiliar en Refrigeración_archivos/image002.jpg |
| static/coyspunet/Home/RedMulticampus/Auxiliar en Refrigeración_archivos/image003.jpg | content/_recursos/coyspunet/Home/RedMulticampus/Auxiliar en Refrigeración_archivos/image003.jpg |
| static/coyspunet/Home/RedMulticampus/Auxiliar en Refrigeración_archivos/1cnf/image001.png | content/_recursos/coyspunet/Home/RedMulticampus/Auxiliar en Refrigeración_archivos/1cnf/image001.png |
| static/coyspunet/Home/RedMulticampus/Diseño de jardines_archivos/filelist.xml | content/_recursos/coyspunet/Home/RedMulticampus/Diseño de jardines_archivos/filelist.xml |
| static/coyspunet/Home/RedMulticampus/Diseño de jardines_archivos/header.htm | content/_recursos/coyspunet/Home/RedMulticampus/Diseño de jardines_archivos/header.htm |
| static/coyspunet/Home/RedMulticampus/Diseño de jardines_archivos/image001.jpg | content/_recursos/coyspunet/Home/RedMulticampus/Diseño de jardines_archivos/image001.jpg |
| static/coyspunet/Home/RedMulticampus/Imagenes/Boton_cerrar.gif | content/_recursos/coyspunet/Home/RedMulticampus/Imagenes/Boton_cerrar.gif |
| static/coyspunet/Home/RedMulticampus/Introducción a Autocad 2D_archivos/image001.jpg | content/_recursos/coyspunet/Home/RedMulticampus/Introducción a Autocad 2D_archivos/image001.jpg |
| static/coyspunet/Home/RedMulticampus/Introducción a Autocad 2D_archivos/1cnf/image001.jpg | content/_recursos/coyspunet/Home/RedMulticampus/Introducción a Autocad 2D_archivos/1cnf/image001.jpg |
| static/css/custom.css | content/_recursos/css/custom.css |
| static/moonjs/agc_sp.html | content/_recursos/moonjs/agc_sp.html |
| static/moonjs/agc.data | content/_recursos/moonjs/agc.data |
| static/moonjs/agc.html | content/_recursos/moonjs/agc.html |
| static/moonjs/agc.js | content/_recursos/moonjs/agc.js |
| static/moonjs/agc11.js | content/_recursos/moonjs/agc11.js |
| static/moonjs/Apollo_DSKY_interface.svg.png | content/_recursos/moonjs/Apollo_DSKY_interface.svg.png |
| static/moonjs/checklist_en.html | content/_recursos/moonjs/checklist_en.html |
| static/moonjs/checklist.html | content/_recursos/moonjs/checklist.html |
| static/moonjs/digital-7-mono-italic.ttf | content/_recursos/moonjs/digital-7-mono-italic.ttf |
| static/moonjs/jquery-3.7.1.min.js | content/_recursos/moonjs/jquery-3.7.1.min.js |

## Corrección final: micrositios y panel en static

Por aclaración expresa del usuario, Apollo/Moonjs, CoyspuNET y los recursos del panel vuelven a static. Este estado reemplaza el retiro total de static descrito en la sección anterior.

- static/moonjs/: emulador Apollo íntegro.
- static/coyspunet/: sitio recuperado íntegro.
- static/images/weather/: ocho iconos meteorológicos.
- static/data/feriados-2026.json: datos del panel.

Las imágenes de artículos, imágenes de secciones y descargas siguen en content. Los favicons, manifiesto y CSS global permanecen en content/_recursos. Se actualizaron los mounts de Hugo, las plantillas del panel y AGENTS.md para reflejar esta distinción.

## Organización definitiva

Artículos, imágenes de páginas/secciones y descargas propias en content. Aplicaciones y recursos generales en static. Los ocho archivos generales restantes (seis iconos, site.webmanifest y css/custom.css) volvieron de content/_recursos a static, conservando sus URLs y bytes. Se eliminó content/_recursos y la configuración de mounts personalizados: Hugo vuelve a utilizar sus directorios predeterminados. AGENTS.md refleja esta organización. Este apartado reemplaza las decisiones intermedias de ubicación de recursos generales.
