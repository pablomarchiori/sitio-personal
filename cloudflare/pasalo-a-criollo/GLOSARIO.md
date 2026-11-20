# Glosario de lunfardo — implementación

El modo **Lunfardo clásico** dejó de depender solamente del conocimiento general de Gemini. El Worker utiliza `src/glosario.js`, una selección manual inicial de **29 voces**, revisadas contra las fichas individuales del [Diccionario lunfardo de Todo Tango](https://www.todotango.com/comunidad/lunfardo/), recopilado por Adolfo Enrique Rodríguez.

**No es una copia, una descarga ni una réplica del diccionario.** El módulo guarda términos, paráfrasis propias breves, pistas para localizar conceptos, posibles advertencias de uso y un enlace a la ficha de origen. No se atribuyen a Todo Tango las frases que genera Gemini.

## Recorrido real

1. El navegador envía `texto`, `modo` y `region` al Worker.
2. El Worker valida la solicitud y reserva una consulta en D1, como antes.
3. Solo si `modo === "lunfardo"`, `seleccionarLunfardo(texto)` busca hasta seis referencias pertinentes en el glosario de código. La selección no llama a terceros ni consume tokens de IA.
4. Si hay coincidencias, agrega al prompt términos, significados resumidos y precauciones. Aclara a Gemini que **no debe insertarlos obligatoriamente** ni alterar el significado de la frase. Si no hay coincidencias, le indica que no invente lunfardismos.
5. Gemini genera la respuesta como antes. El Worker devuelve el JSON existente; la aplicación sigue mostrando únicamente el resultado de la traducción.

La búsqueda hace coincidencia por palabra o frase completa, sin distinguir tildes ni mayúsculas. Prioriza términos ya presentes en la frase y limita los candidatos por tema. Tiene protecciones mínimas contra ambigüedades (por ejemplo, el botón físico y el mango como fruta). No equivale a un análisis semántico de diccionario: eso sigue a cargo del modelo.

## Cómo ampliarlo

Editar `src/glosario.js`. Cada entrada incluye `termino`, `significado`, `pistas`, `tema`, `fuente` y, cuando corresponde, `precaucion`:

- `termino`: voz documentada.
- `significado`: paráfrasis breve propia de un sentido verificable.
- `pistas`: términos neutrales que permiten descubrir la voz cuando el usuario no la escribió.
- `tema`: evita que demasiados sinónimos de un concepto ocupen todo el contexto.
- `fuente`: parámetro `p` de la ficha individual `https://www.todotango.com/comunidad/lunfardo/termino.aspx?p=<fuente>`.
- `precaucion`: diferencia sentidos y evita sustituciones que inventen hechos.

Comprobar el significado en la ficha, agregar ejemplos de prueba cuando haya ambigüedad y ejecutar `npm test`. No incorporar masivamente las 12.500 definiciones de Todo Tango ni extraerlas automáticamente sin autorización y evaluación de derechos.

## Archivos y estado

- `src/glosario.js`: 29 entradas, selección y enlaces a las fuentes.
- `src/index.js`: aplica el contexto solo en `modo = lunfardo`.
- `tests/glosario.test.mjs`: comprobaciones de selección, acentos, falsos positivos y tamaño.
- `tests/worker.test.mjs`: comprueba que Gemini recibe referencias solo en el modo clásico, y que los otros modos siguen sin ellas.

No hay nueva tabla D1, configuración adicional ni cambios en la API pública. El frontend, los otros modos y la clave Gemini se mantienen intactos. **Después de sincronizar OneDrive con la PC, el cambio requiere `npx wrangler deploy` para llegar al Worker que ya está en Cloudflare.** Subir archivos a OneDrive no despliega el Worker.
