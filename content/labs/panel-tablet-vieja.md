---
title: "Rescate de una tablet vieja como panel fijo"
date: 2026-04-04T18:30:00-03:00
draft: false
description: "Cómo terminé reutilizando una CX Boreal II de 2013 como panel fijo para el sitio."
tags: ["android", "tablet", "hugo", "cloudflare", "firefox", "dashboard", "labs"]
---

Acomodando un poco el cajón de los aparatos viejos, ese intermedio entre lo que sirve y lo que se tira, encontré una tablet vieja: una **CX Boreal II de 9.7"**, con **Android 4.1.1**.

La usé un tiempo para leer PDFs, pero ya se tornaba tedioso pasarle archivos por SD. Tiene librerías y certificados raíz viejos, ya hay poco que funcione ahí, aunque sigue teniendo una linda pantalla y todavía le dura unas horas la batería. No estaba preparado para tirarla, pero tampoco tenía mucho uso práctico.

Entonces: **¿para qué se puede usar? ¿Todavía puede servir como terminal fija para mostrar algo útil?**

Vamos a reconvertirla en un panel de monitoreo para mostrar una página propia del sitio: [**`/panel/`**](https://www.marchiori.ar/panel).

<div style="display: flex; align-items: center; gap: 16px; margin: 1.2rem 0;">
  <img
    src="/images/homero-momento.png"
    alt="Homero pensando"
    style="width: 90px; height: auto; flex: 0 0 auto; margin: 0;"
  >
  <p style="margin: 0; font: inherit; line-height: inherit;">
    Un momento... ¿es algo útil esto? No demasiado. Pero bueno, es una nerdeada pintoresca. A todo nerd le interesa el clima y la fecha; bueno, eso en realidad le interesa a mucha gente. La parte nerd es la pantallita.
  </p>
</div>

## Ingredientes

El hardware era este:

- Tablet CX Boreal II 9.7" (2013 aprox.)
- Android 4.1.1 Jelly Bean
- API 16
- Equipo de 2013, con recursos claramente limitados para estándares actuales

La idea era usarla como una pantalla fija para ver:

- reloj grande
- fecha
- clima de Marcos Juárez
- calendario mensual
- feriados del mes

Nada más.

## El panel

En vez de depender de una app externa, preferí hacer una página específica dentro del sitio.

Eso resolvía varias cosas a la vez:

- no dependía de Play Store
- no quedaba atado a una app abandonada
- seguía dentro del mismo proyecto Hugo
- se podía ajustar exactamente a lo que necesitaba esa pantalla
- evitaba meterle a una tablet de 2013 más complejidad de la necesaria
- quedaba el camino abierto a nuevas ideas para algún panel similar

### Navegadores y certificados

Antes de seguir con el proyecto, había que verificar que la tablet pudiera abrir el sitio. Si no, era leña.

Con los navegadores nativos de Android 4.1 apareció enseguida el problema de errores de certificado y avisos de conexión no privada. La Play Store tampoco funciona ya en algo así.

En equipos tan viejos, eso no sorprende. El sistema operativo quedó congelado hace años y la confianza HTTPS moderna empieza a romperse por certificados raíz desactualizados, cambios en la cadena de validación y compatibilidad cada vez más pobre con sitios actuales.

Busqué en F-Droid algún navegador compatible. También insistí un poco más con alternativas tipo kiosk, pero las versiones para Android 4.1.1 ya no estaban disponibles. Chrome ya no funciona en esa versión, así que fui a algo seguro: el viejo y confiable **Firefox** (`fennec-68.11.0.multi.android-arm.apk`). Usa certificados raíz propios, así que no hizo falta depender de los del sistema.

### La limpieza mínima

Antes de seguir, hice una limpieza razonable para que el equipo quedara un poco más liviano. En términos prácticos, fue deshabilitar aplicaciones de fábrica que no aportaban nada y dejar el dispositivo lo más cerca posible de una función única.

## Qué se hizo del lado del sitio

Acá entró ChatGPT 5.4 Thinking. El código, en general, salió casi todo de ahí. Probamos un par de alternativas y me fue tirando los HTML rápido y bastante en línea con lo que quería.

Fui cambiando un par de layouts, pero sin mover la idea central: una sola pantalla, bien legible, con información útil y lo bastante liviana como para que incluso un equipo muy viejo pudiera visualizarla.

Probamos cuatro versiones: una light, una conectada a JSON, una por API y otra más moderna. Al final, con Firefox, la moderna funcionaba bien, así que eliminamos las otras.

Además, conectamos dos APIs públicas:

- clima desde `api.open-meteo.com`
- feriados desde `api.argentinadatos.com`

La página del panel terminó publicada como una ruta separada dentro del mismo sitio, con una versión más simple y visualmente limpia que el resto.

Hubo un solo “problema” al publicar: la información de las APIs se veía en local, pero en producción no. El hardening existente no dejaba consultar esas APIs hasta agregar los permisos puntuales que el panel necesitaba. Eso obligó a [tocar la política de seguridad del sitio (CSP) en Cloudflare](/site-log/hardening-del-sitio-en-cloudflare/) para permitir esas conexiones salientes mediante `connect-src` hacia las APIs del panel.

Sumé a Gemini al “equipo de desarrollo” para resolver la parte de pantalla completa en Firefox y armar un pequeño script. Ahora, al tocar la página una vez, pasa a pantalla completa. ChatGPT se había puesto un poco reticente con la idea del JavaScript, así que esa parte se la pedí a su colega.

El comportamiento final quedó limitado al primer toque, para que no intente entrar en fullscreen en cada interacción. Así, al abrir el panel y tocar una vez la pantalla, Firefox pasa a pantalla completa y aprovecha mejor el área visible.

## Lo que quedó funcionando

El resultado final fue bastante mejor de lo que parecía probable al principio.

La tablet hoy puede quedar como terminal fija mostrando:

- hora
- fecha
- clima
- calendario
- feriados

sin exigirle nada para lo que ya no está preparada.

[![Tablet CX Boreal II mostrando el panel](/images/labs/panel-tablet-cx-boreal-ii-thumb.jpg)](/images/labs/panel-tablet-cx-boreal-ii.jpg)

El experimento salió bien, pero con límites claros. Esta tablet ya no sirve para navegación general, correo, redes sociales ni nada parecido. Aunque el sitio funcione en Firefox, las apps ya no acompañan y el equipo queda, en la práctica, reducido a ese navegador y a una función muy puntual.

Su valor acá no está en “recuperarla por completo”, sino en asignarle una función mínima, visible y controlada.

## Lo interesante del proceso

La parte más entretenida no fue solo que funcionara, sino cómo se llegó.

Durante las pruebas fui usando **Gemini** para explorar ideas, compatibilidades posibles, alternativas de software y caminos de descarte: qué probar, qué probablemente no iba a instalar y qué enfoques tenían más sentido con Android 4.1.

**ChatGPT** aportó el código en general y los markdown de Hugo. Al final, entre uno y otro, salió algo funcional en tiempo récord.

## Reflexión final

De este trabajo quedan dudas profundas.

¿Esto va en Notas, en Site Log o se ganó directamente un lugar propio? ¿Un menú Labs? ¿Nerdeadas? ¿Cosas raras? 🤔

Y ahora queda la duda más importante de todas:

¿Dónde corno ubico este pisapeles con el clima y la hora? 😄