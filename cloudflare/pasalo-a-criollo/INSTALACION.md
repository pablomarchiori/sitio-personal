# Pasalo a criollo — primera versión

Entrega preparada para integrar en `pablomarchiori/sitio-personal`, sin cambiar ni publicar el sitio actual.

## Qué incluye

- `static/pasalo-a-criollo/`: aplicación independiente, responsive, con cuatro modos, regiones, ejemplos, copia y desglose de expresiones.
- `content/labs/pasalo-a-criollo/index.md`: entrada de Hugo para Labs. Queda como **borrador** (`draft: true`) hasta que el servicio esté listo.
- `cloudflare/pasalo-a-criollo/`: Cloudflare Worker nuevo, separado del traductor LinkedIn, con integración Gemini y límite global de 20 consultas diarias (hora de Argentina), guardado en D1.

El texto del visitante se transmite al Worker y a Gemini. No se almacena el texto en D1; sólo el contador diario agregado. No hay cuentas ni login. No se extrae ni distribuye contenido del diccionario de Todo Tango.

## Integración en Hugo

1. Revisá `git status --short` en tu copia local del sitio antes de copiar archivos.
2. Copiá las carpetas `static`, `content` y `cloudflare` de esta entrega **dentro de la raíz del repositorio**, conservando las rutas. No reemplazan archivos existentes de la aplicación LinkedIn.
3. La aplicación quedará publicada por Hugo en `/pasalo-a-criollo/`, pero la interfaz no puede traducir hasta que configures el Worker.
4. Para probar el borrador, usá `hugo server --buildDrafts` desde la raíz del sitio. No hace falta levantar Hugo para el Worker.

**Opcional: agregar un botón a la portada de Labs.** En el archivo actual `content/labs/_index.md`, junto al botón del Traductor LinkedIn, incorporá:

```html
<a class="lab-button" href="/labs/pasalo-a-criollo/">
  <span class="lab-button-icon">🧉</span>
  <span>Pasalo a criollo</span>
</a>
```

No incluimos una copia de `_index.md` porque podría pisar modificaciones locales. Una vez probado el traductor y publicado el Worker, cambiá `draft: true` por `draft: false`.

## Worker (CMD de Windows)

Entrá en `cloudflare\pasalo-a-criollo` dentro de la copia local del repositorio. Necesitás Node.js y una cuenta de Cloudflare con Workers y D1.

```cmd
npm install
npx wrangler login
npx wrangler d1 create pasalo-a-criollo-uso
```

Cloudflare devolverá el `database_id` real. Copiá `wrangler.toml.example` a `wrangler.toml` y completá el UUID real de la base D1. Recomendamos usar el subdominio de Workers de la cuenta ya configurada, sin asumir que será exactamente el del traductor LinkedIn.

```cmd
copy wrangler.toml.example wrangler.toml
notepad wrangler.toml
npx wrangler d1 migrations apply pasalo-a-criollo-uso --remote
npx wrangler secret put GEMINI_API_KEY
npx wrangler deploy
```

`wrangler secret put` **puede desplegar una versión del Worker**, y `wrangler deploy` publica el servicio. Ejecutalos sólo cuando quieras habilitarlo. No incluyas la API key en `wrangler.toml`, `config.js`, Hugo ni Git. La API key se configura exclusivamente como secret de Cloudflare.

Al completar la publicación, copiá la dirección del Worker que muestra Wrangler en `static/pasalo-a-criollo/config.js`:

```js
window.PASALO_CONFIG = {
  apiUrl: "https://TU-WORKER.TU-SUBDOMINIO.workers.dev"
};
```

Para entornos locales con Hugo, `http://localhost:1313` y `http://127.0.0.1:1313` están permitidos por `ALLOWED_ORIGINS`. En producción, el Worker acepta los dos dominios de Mirada Nerd indicados en el ejemplo. Si cambia el dominio, actualizá esa lista. CORS es una restricción de navegador, **no autentica a los clientes**: el cupo global limita el uso, pero un tercero puede agotar las consultas. Para difusión más amplia, conviene añadir Turnstile y controles de abuso.

El modelo sugerido es `gemini-3.5-flash-lite` (configurable por variable `GEMINI_MODEL`). Comprobá acceso y tarifas de tu cuenta antes de publicar. El cupo de 20 es un límite del Worker, **no garantiza un nivel gratuito de Gemini**.

## Pruebas

En `cloudflare\pasalo-a-criollo`:

```cmd
npm test
```

Las pruebas simulan Gemini y D1. Verifican CORS, validación, esquema esperado, cupo y devolución del cupo ante errores. No constituyen una prueba de conexión real a Gemini ni una compilación completa del sitio con Hugo.

## Criterios de implementación

- No se modificó el traductor LinkedIn ni su endpoint.
- No se modificó `themes/congo`, `public/` ni `resources/`.
- Aplicación en `static/` y entrada informativa como page bundle en `content/labs/` conforme a `AGENTS.md`.
- El resultado de IA se inserta con `textContent`, para no interpretar HTML recibido del modelo.
- La versión regional es orientativa. El prompt prioriza el sentido original y desalienta expresiones forzadas o falsas atribuciones geográficas.
- No hay fuentes ni definiciones copiadas del diccionario de Todo Tango.

## Pendientes antes de publicar

1. Crear y configurar D1 y el secret en Cloudflare.
2. Probar con una API key real y ajustar el modelo si fuera necesario.
3. Conectar la URL del Worker en `config.js`.
4. Revisar la apariencia en el sitio y en móvil, habilitar la nota (`draft: false`) y, si querés, añadir el botón de Labs.
5. Revisar `git diff` y decidir cuándo hacer commit, push o desplegar. **Esta entrega no publica nada.**
