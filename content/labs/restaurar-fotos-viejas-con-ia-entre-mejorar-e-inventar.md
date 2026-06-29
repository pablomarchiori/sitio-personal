---
title: "Restaurar fotos viejas con IA: entre mejorar e inventar"
date: 2026-06-28T21:30:00-03:00
draft: false
description: "Una prueba de laboratorio restaurando fotos familiares antiguas con un Gem de Gemini, con buenos resultados visuales y algunos límites importantes para tener en cuenta."
tags: ["inteligencia artificial", "Gemini", "fotografía", "restauración", "Google", "Labs"]
categories: ["Labs"]
---

![Ilustración en blanco y negro para Inicio](/images/labs/restaurar-fotos-viejas-gemini-portada.png)
	*A veces la IA divaga...*

## Fotos viejas, frío y una excusa para probar IA

Hoy OneDrive me mostró en el teléfono uno de esos recuerdos de “por esta época, hace algunos años”. Entre esas imágenes aparecieron fotos de mis abuelos. Y parece que hace unos seis años, para esta época, también hacía frío y estaba haciendo lo mismo que ahora, acomodando fotos viejas. 😬

Hace tiempo venía experimentando con prompts de restauración digital, mejorándolos para Gemini, así que aproveché la excusa y me puse a personalizar un Gem pensado para restaurar fotos antiguas a partir de instrucciones bastante específicas.

Esto va más como prueba de laboratorio que como nota cerrada: armé dos versiones del prompt, las probé con fotos familiares y comparé dónde Gemini mejora la imagen y dónde empieza a inventar.

Los resultados visuales pueden ser muy buenos. Pero esto no es restauración fotográfica tradicional: es imagen generativa aplicada sobre una foto existente.

## Un par de términos

Uso algunas palabras propias de estas herramientas, así que las dejo aclaradas antes de meterme en las pruebas.

**Prompt** es la instrucción que se le da al modelo. En este caso no es una frase suelta, sino un bloque largo de reglas para decirle cómo restaurar, qué evitar y qué hacer cuando falta información.

**Gem** es una configuración personalizada de Gemini: nombre, descripción e instrucciones propias. Google las llama [Gems](https://support.google.com/gemini/answer/15235603).

**Motor de imagen** es la parte que genera o edita la imagen. En mis pruebas usé lo disponible en ese momento dentro de Gemini: Imagen 3.

**Orquestador** es la palabra más rara del grupo, pero sirve para explicar una parte importante del problema. No es el editor de imagen en sí, sino la capa de Gemini que interpreta el pedido y decide cómo mandarlo al motor de imagen. Si esa capa entiende “restaurar” como “generar una versión corregida”, puede completar zonas dañadas aunque el prompt pida ser conservador.

## Dos prompts para Gemini

Armé dos versiones de un prompt con instrucciones para restauración fotográfica: limpiar ruido, mejorar contraste, recuperar detalle, corregir deterioros visibles y mantener la imagen lo más fiel posible a la original.

Gemini no funciona como un editor clásico que modifica píxeles de forma controlada, capa por capa, como haríamos en Photoshop. Cuando se le pide restaurar u optimizar una imagen, interviene un motor generativo de imagen integrado en el ecosistema de Gemini.

El modelo no sabe cómo era la foto original antes de estar dañada. Usa la imagen como referencia y genera una versión plausible, más limpia y visualmente coherente.

La primera versión estructura el proceso de restauración en capas y ya incluye límites importantes: no agregar personas u objetos nuevos, no cambiar poses ni expresiones, no inventar fondos sin evidencia visual, conservar el espacio de color original y evitar comparativas tipo “antes y después” dentro de la imagen final.

El problema es que esas restricciones son reglas de comportamiento, no instrucciones para el orquestador. Gemini actúa como orquestador antes de invocar el motor de imagen. Si el sistema interpreta “restaurar” como “generar una versión corregida”, puede completar zonas dañadas aunque el prompt pida ser conservador.

Por eso armé una segunda versión más estricta: ya no alcanza con pedir “no inventes rostros”; el prompt le indica explícitamente al orquestador que está trabajando en modo restauración conservadora, no en modo generación creativa.

En esa segunda versión, las zonas anatómicas —caras, manos, extremidades— quedan mucho más protegidas. Si una cara está muy dañada o falta información suficiente, la instrucción no es reconstruirla de forma probable, sino aplicar desenfoque, mezcla ambiental o una reparación ambigua antes que inventar rasgos nuevos. Si la cara de esa persona no se puede recuperar sin inventarla, mejor que quede borrosa.

También se refuerzan otras reglas: si la imagen original es blanco y negro, no debe colorearse; si el resultado sale como panel comparativo, debe descartarse; si aparece un objeto o una estructura que no existía en la foto original, se considera una violación del criterio de restauración.

La primera versión busca ordenar el proceso de mejora. La segunda intenta ponerle freno al impulso generativo del sistema.

## El criterio

No alcanza con decir “restaurá esta foto antigua”. Esa instrucción suele empujar al modelo a embellecer, reconstruir y completar demasiado.

El criterio es conservador:

- limpiar sin plastificar;
- mejorar contraste sin convertir la foto en una imagen moderna;
- conservar textura fotográfica;
- evitar cambios agresivos en rostros;
- no inventar rasgos faciales cuando la información original no alcanza;
- priorizar una restauración sobria antes que una imagen espectacular.

Incluso así, no hay garantía total. El prompt ayuda, pero no cambia la naturaleza del motor. Gemini puede obedecer mejor o peor según la foto, el nivel de daño, la iluminación, el tipo de rostro y los objetos que aparecen en la escena.

Esto es una etapa de experimentación, no una solución definitiva. Sirve para probar, comparar resultados y rescatar imágenes deterioradas o fuera de circulación. Pero si la foto tiene valor documental o familiar fuerte, conviene mirar el resultado con atención antes de darlo por bueno.

## Cuando restaura y cuando inventa

La primera prueba fue con una foto antigua en blanco y negro. La imagen original tenía manchas, zonas quemadas o lavadas, pérdida de detalle y una parte importante afectada en el margen izquierdo.

Gemini limpió la imagen, recuperó contraste, estabilizó la escena y mantuvo el aspecto general de fotografía antigua. También reconstruyó partes dañadas del fondo y de la zona inferior sin que el resultado se volviera demasiado artificial.

<div class="galeria-comparativa galeria-doble">
  <a href="/images/labs/restaurar-fotos-viejas-gemini-abuelos-original-full.jpg" target="_blank" rel="noopener">
    <img src="/images/labs/restaurar-fotos-viejas-gemini-abuelos-original-thumb.jpg" alt="Foto antigua original en blanco y negro antes de la restauración con Gemini">
  </a>

  <a href="/images/labs/restaurar-fotos-viejas-gemini-abuelos-restaurada-full.png" target="_blank" rel="noopener">
    <img src="/images/labs/restaurar-fotos-viejas-gemini-abuelos-restaurada-thumb.jpg" alt="Foto antigua restaurada con Gemini">
  </a>
</div>

*Primer ejemplo: la restauración mejora mucho la lectura visual y conserva bastante bien el clima de la foto original.*

La segunda prueba fue con una foto familiar a color, con poca luz, mucho grano, zonas oscuras y un flash bastante duro.

Con el primer prompt, Gemini limpió ruido, levantó detalle, ordenó la iluminación y reconstruyó las caras con mucha más definición — pero también empezó a inventar.

El cambio más evidente está en la martineta colorada (o simplemente "colorada" ☺️)que aparece en la foto original. En la primera restauración ya no se reconoce como ave: Gemini la transforma en una especie de objeto con alas de madera, como si hubiera reinterpretado las plumas y la forma general sin entender del todo qué estaba mirando.

Cuando la IA divaga, el resultado puede quedar más cerca del [Ecce Homo de Borja](https://www.infobae.com/cultura/2022/08/08/10-anos-del-ecce-homo-de-borja-la-peor-restauracion-de-la-historia-icono-pop-o-arte/) que de una recuperación fiel. No siempre tan extremo, pero la lógica es parecida.

También cambia ropa y detalles personales. La bufanda de mi hermana aparece reinterpretada: ya no conserva exactamente el patrón original, sino que se vuelve una prenda distinta, más prolija y coherente con la imagen nueva. El fondo también cambia mucho: donde la foto original tenía una zona oscura con poca información, la primera restauración genera una pared de piedra y un ambiente mucho más definido.

Con el segundo prompt, el resultado es más coherente. La imagen sigue estando reconstruida, pero la martineta se conserva como objeto reconocible y el fondo se mantiene más cerca de lo que sugiere la foto original: un espacio oscuro, con paredes irregulares, sin tanta invención escenográfica. La bufanda también queda bastante más fiel al patrón visible en la imagen de partida.

<div class="galeria-comparativa galeria-triple">
  <a href="/images/labs/restaurar-fotos-viejas-gemini-familia-original-full.jpg" target="_blank" rel="noopener">
    <img src="/images/labs/restaurar-fotos-viejas-gemini-familia-original-thumb.jpg" alt="Foto familiar original antes de la restauración con Gemini">
  </a>

  <a href="/images/labs/restaurar-fotos-viejas-gemini-familia-prompt1-full.png" target="_blank" rel="noopener">
    <img src="/images/labs/restaurar-fotos-viejas-gemini-familia-prompt1-thumb.jpg" alt="Foto familiar restaurada con Gemini usando el prompt 1">
  </a>

  <a href="/images/labs/restaurar-fotos-viejas-gemini-familia-prompt2-full.png" target="_blank" rel="noopener">
    <img src="/images/labs/restaurar-fotos-viejas-gemini-familia-prompt2-thumb.jpg" alt="Foto familiar restaurada con Gemini usando el prompt 2">
  </a>
</div>

*Segundo ejemplo: original, restauración con prompt 1 y restauración con prompt 2. La primera mejora mucho la imagen, pero inventa más. La segunda es menos espectacular, aunque más coherente con la escena original.*

En una foto, Gemini parece restaurar. En la otra, restaura y además completa con imaginación estadística. Al comparar los dos prompts sobre la misma imagen, se ve mejor el efecto de las restricciones: el segundo no elimina la reconstrucción generativa, pero reduce algunos desvíos visibles.

El resultado puede ser más lindo, más nítido y más fácil de mirar, pero no necesariamente más fiel.

## Cómo crear un Gem para este uso

Desde Gemini, se entra a la sección **Gems**, se crea uno nuevo, se le asigna un nombre —por ejemplo, “Restaurador Fotográfico”— y se pegan las instrucciones base en el campo principal.

A partir de ahí, cada vez que se abre ese Gem, Gemini inicia la conversación bajo esas reglas. En vez de copiar y pegar el prompt completo cada vez, uno sube la foto y trabaja dentro de ese marco ya preparado.

Para acceder más rápido, se puede invocar el Gem con `@` desde el chat principal, fijarlo en el panel lateral o guardar su URL como marcador del navegador. Si alguien prefiere no depender de Gems, puede guardar el prompt en un `.txt` o `.json` y pegarlo manualmente.

Si el Gem está pensado para restaurar directamente, las instrucciones tienen que apuntar al resultado visual. Si en cambio se quiere usar solo para escribir o mejorar prompts, conviene aclararlo explícitamente para que no intente procesar la imagen.

## Prompts utilizados

Las dos versiones están disponibles para probar o adaptar:

- [Prompt de restauración fotográfica — versión 1: restauración por capas](/files/labs/restaurar-fotos-viejas-gemini-prompt-v1-restauracion-por-capas.txt)
- [Prompt de restauración fotográfica — versión 2: restauración conservadora](/files/labs/restaurar-fotos-viejas-gemini-prompt-v2-restauracion-conservadora.txt)

Cada foto tiene problemas distintos; estos prompts son un marco, no una receta. Una foto en blanco y negro, con daño físico y fondo vegetal, no se comporta igual que una foto familiar a color, oscura, con objetos poco comunes y poca información visual.

La versión 1 es más general y ordena el flujo de restauración por capas. La versión 2 es más restrictiva: intenta controlar mejor cuándo Gemini debe restaurar y cuándo debe aceptar que no hay información suficiente para reconstruir sin inventar.

## Google AI Pro gratuito para estudiantes en Argentina, Chile y Perú

Un detalle práctico: Google anunció acceso gratuito por un año a Google AI Pro para estudiantes universitarios mayores de 18 años en Argentina, Chile y Perú.

No es un dato menor, porque muchas de estas funciones avanzadas dependen del plan, de la región y de la disponibilidad de modelos en cada momento.

Vale la pena revisar si todavía se puede acceder a ese beneficio desde [la página oficial de Google](https://blog.google/intl/es-419/actualizaciones-de-producto/informacion/la-ia-de-google-al-alcance-de-todos-llega-a-hispanoamerica-ai-plus-y-el-gemini-gratuito-para-estudiantes/).

## Mejorar no es conservar

Restaurar fotos con IA tiene un atractivo claro: permite ver mejor imágenes dañadas o muy envejecidas. Pero introduce una capa de interpretación que no siempre es evidente.

No se trata solo de “mirá qué bien quedó”. También hay que preguntarse qué parte de la imagen fue recuperada y qué parte fue reconstruida.

Para jugar, experimentar y rescatar fotos olvidadas, Gemini puede ser una herramienta muy útil. Para preservar recuerdos familiares importantes, todavía hace falta una mirada humana: comparar, revisar, desconfiar un poco y decidir cuándo una mejora visual sigue siendo fiel al recuerdo original.

Ahí probablemente esté el equilibrio: usar la IA para acercarnos a esas fotos, no para reemplazarlas.
