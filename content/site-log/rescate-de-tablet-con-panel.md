---
title: "Rescate de una tablet vieja como panel fijo"
date: 2026-04-04T18:30:00-03:00
draft: false
description: "Cómo terminé reutilizando una CX Boreal II de 2013 como panel fijo para el sitio."
tags: ["android", "tablet", "hugo", "cloudflare", "firefox", "dashboard", "site log"]
---

No fue un proyecto planeado desde el principio.

La idea apareció viendo una tablet vieja guardada, una **CX Boreal II de 9.7"**, con **Android 4.1.1**, de esas que ya quedaron demasiado atrás para un uso normal pero que todavía tienen pantalla, Wi-Fi y una batería que, con algo de paciencia, siguen sirviendo.

La pregunta era simple: si ya no sirve como tablet, ¿todavía puede servir como terminal fija para mostrar algo útil?

En vez de tirarla o dejarla juntando polvo, probé reconvertirla en un panel de monitoreo para mostrar una página propia del sitio: [**`/panel/`**](https://www.marchiori.ar/panel).

## El punto de partida

El hardware era este:

- Tablet CX Boreal II 9.7"
- Android 4.1.1 Jelly Bean
- API 16
- Equipo de 2013, con recursos claramente limitados para estándares actuales

No tenía sentido intentar devolverla a un uso general.  
La idea fue mucho más acotada: usarla como una pantalla fija para ver:

- reloj
- fecha
- calendario mensual
- feriados
- clima de Marcos Juárez

Nada más.

## La primera intuición

La parte curiosa de este experimento es que la idea inicial no nació del código sino del descarte.

Primero pensé en usos obvios para una tablet vieja: lector de PDFs, reloj, marco digital, navegador secundario. Pero como para lectura ya tenía otras opciones, empecé a mirar la posibilidad de dejarla como [**panel fijo**](https://www.marchiori.ar/panel).

Ahí apareció una ventaja inesperada: para ese uso no hacía falta que la tablet “sirviera” en el sentido moderno. No necesitaba productividad, ni apps pesadas, ni Play Store, ni sincronización completa. Solo tenía que abrir una pantalla y sostenerla.

## Lo que no funcionó

Antes de llegar a la solución final, hubo bastante descarte.

### Navegadores y certificados

Con los navegadores nativos de Android 4.1 apareció enseguida el problema clásico de este tipo de equipos: errores de certificado y avisos de conexión no privada.

En equipos tan viejos, eso ya no sorprende. El sistema operativo quedó congelado hace años y la confianza HTTPS moderna empieza a romperse por certificados raíz desactualizados, cambios en la cadena de validación y compatibilidad cada vez más pobre con sitios actuales.

Eso dejaba a la tablet en una situación bastante limitada para cualquier navegación más o menos normal.

### Apps modernas

También probé el camino de “usar una app para esto” en lugar de una página propia.

Ahí el resultado fue el esperable:

- muchas apps directamente no instalaban
- otras fallaban con error de análisis del paquete
- varias ya exigen versiones mínimas de Android bastante más nuevas
- el equipo se arrastraba incluso antes de abrir nada útil

Se probaron alternativas tipo kiosk, repositorios alternativos y herramientas livianas, pero el patrón era siempre el mismo: el hardware todavía encendía, pero el ecosistema de software ya lo había dejado atrás.

## La limpieza mínima

Antes de seguir, hice algo básico pero necesario: sacar ruido.

No fue una “optimización milagrosa”, pero sí una limpieza razonable para que el equipo dejara de pelearse solo con procesos inútiles.

En términos prácticos, la intervención fue:

- deshabilitar aplicaciones de fábrica que no aportaban nada
- reducir procesos en segundo plano
- evitar que servicios pesados consumieran memoria de forma constante
- dejar el dispositivo lo más cerca posible de una función única

En equipos de esta época, eso no los convierte en rápidos.  
Solo evita que sean inutilizables.

## El giro que destrabó todo

La solución real apareció cuando dejé de insistir con el navegador stock y probé **Firefox ESR para Android viejo**.

Ese fue el cambio importante.

Con Firefox, la tablet pudo abrir correctamente el sitio y mostrar el panel. No hizo falta “revivir Android”. No hizo falta modificar el sistema. No hizo falta convertirla en otra cosa. Alcanzó con encontrar un navegador que todavía pudiera manejar mejor ese contexto.

Ahí el proyecto dejó de ser una prueba vaga y pasó a ser algo concreto: la tablet podía cumplir una sola tarea, pero podía cumplirla bien.

## El panel

En vez de depender de una app externa, preferí hacer una página específica dentro del sitio.

Eso resolvía varias cosas a la vez:

- no dependía de Play Store
- no quedaba atado a una app abandonada
- seguía dentro del mismo proyecto Hugo
- se podía ajustar exactamente a lo que necesitaba esa pantalla
- evitaba meterle a una tablet de 2013 más complejidad de la necesaria

El panel final quedó como una página simple con:

- reloj grande
- fecha
- clima de Marcos Juárez
- calendario mensual
- lista de feriados del mes

La idea no era hacer una app disfrazada de página.  
Era justamente lo contrario: una página lo bastante liviana como para que incluso un equipo muy viejo pudiera sostenerla.

## Qué se hizo del lado del sitio

La página del panel terminó publicada como una ruta separada dentro del mismo sitio, con una versión más simple y visualmente limpia que el resto.

Además, se conectó a dos APIs públicas:

- clima desde `api.open-meteo.com`
- feriados desde `api.argentinadatos.com`

Ese detalle no era visible en local, pero en producción obligó a tocar la política de seguridad del sitio en Cloudflare para permitir esas conexiones salientes mediante `connect-src`.

En otras palabras: el panel funcionaba, pero el hardening existente no dejaba consultar esas APIs hasta agregar los permisos puntuales que necesitaba.

## Lo que sí quedó funcionando

El resultado final fue bastante mejor de lo que parecía probable al principio.

La tablet hoy puede quedar como terminal fija mostrando:

- hora
- fecha
- clima
- calendario
- feriados

sin exigirle nada para lo que ya no está preparada.

No volvió a ser una tablet útil en sentido general.  
Volvió a ser útil para una sola cosa.

Y en este caso, eso alcanza.

## Lo que no haría con un equipo así

El experimento salió bien, pero con límites claros.

No usaría una tablet de este tipo para:

- navegación general
- cuentas personales
- correo
- banca
- redes sociales
- nada sensible

Su valor acá no está en “recuperarla por completo”, sino en asignarle una función mínima, visible y controlada.

## Lo interesante del proceso

La parte más entretenida no fue solo que funcionara, sino cómo se llegó.

Durante las pruebas fui usando **Gemini** para explorar ideas, compatibilidades posibles, alternativas de software y caminos de descarte. No para reemplazar la validación real, sino para acelerar la parte más tediosa del recorrido: qué probar, qué probablemente no iba a instalar, qué enfoques tenían más sentido con Android 4.1 y qué había que dejar de insistir.

La solución final no salió de una receta única ni de una sola herramienta. Salió de mezclar prueba real, descarte técnico y una implementación propia bastante más simple que cualquier “solución completa” que al principio parecía necesaria.

## Lugar para foto

![Tablet CX Boreal II mostrando el panel](../images/panel-tablet-cx-boreal-ii.jpg)

*Acá iría una foto de la tablet funcionando con el panel abierto.*

## Estado final

No quedó convertida en una tablet moderna.  
Quedó convertida en algo mejor para su edad: una terminal fija con una única función útil.

Y para un equipo de 2013, eso ya es bastante.

---

## Nota técnica: intento de pantalla completa

También quedó pendiente probar un pequeño script para pedir fullscreen desde el navegador mediante interacción del usuario:

```html
<script>
document.addEventListener("click", function() {
    var doc = window.document;
    var docEl = doc.documentElement;
    var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
    if (requestFullScreen) {
        requestFullScreen.call(docEl);
    }
});
</script>