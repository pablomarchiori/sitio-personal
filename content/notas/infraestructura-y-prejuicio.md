---
title: "Infraestructura y Prejuicio"
date: 2026-04-25T15:30:00-03:00
draft: false
description: "Cuando cada área mira solo su propia pantalla, cualquier error puede terminar pareciendo red."
tags: ["infraestructura", "desarrollo", "diagnóstico", "IA", "soporte"]
categories: ["Notas"]
---
*Cuando nadie mira más allá de su propio ombligo —o de su propia pantalla—.*
![Imagen de portada](/images/notas/infraestructura-y-prejuicio-portada.png)

Decime si no te pasó algo parecido alguna vez: un usuario avisa que una aplicación tiró un error, alguien de Infraestructura mira el mensaje y alcanza a decir “esto parece de la aplicación”, pero del otro lado ya apareció el diagnóstico express: “debe ser la red”.

No falla. La red es ese sospechoso universal que siempre estaba cerca de la escena del crimen.

```text
Usuario: —Tengo un error en CrapApp.exe.

Infra: —Eso parece un error de la aplicación.

Usuario: —PepeDios, el programador, Coder de la Tormenta
 y de la Casa Visual Studio, Primero de su Nombre,
 Rey de los métodos API y de los primeros EXE,
 Analista de los Siete Reinos, Protector de la Lógica,
 y el que no se equivoca,
 me dijo que era por el Wi-Fi.

Infra: —Dame un rato que le pregunto.

Infra: —Che, PepeDios, CrapApp.exe está dando este error.

PepeDios: —Imposible. Es la red. En mi máquina funciona.
```

Y después, suele venir una explicación digna de 7 temporadas, con la precisión técnica del abuelo Simpson contando lo de mil novecientos tijiri dos.
<img src="/images/notas/varias/abraham-simpson.jpg" alt="Abraham Simpson explicando algo con una precisión técnica discutible" style="float:right; width:120px; margin:0 0 1rem 1rem; border-radius:8px;">	

A partir de ahi, cuando dicen “es la red”, muchas veces Infraestructura queda obligada a demostrar que no lo era. Y ojo: la red falla. Los firewalls fallan. El DNS falla. Los switches fallan. Los enlaces fallan. No se trata de negar eso.

**El problema es otro: el diagnóstico automático, cómodo y sin evidencia. Ese reflejo de saltar directo a Infraestructura antes de leer el error completo, revisar logs, mirar qué operación estaba haciendo la aplicación o verificar si el problema ocurre en todos lados o solo en un ambiente específico.**

## El ciclo de vida de un bug “de infraestructura”

El ciclo suele tener etapas bastante reconocibles:

**Negación:** “En mi máquina funciona”.  
**Delegación:** “Debe ser un problema de red o latencia”.  
**Evidencia:** Infraestructura muestra conectividad, puertos, rutas, DNS, logs y todo eso que nadie pidió antes de culparla.  
**Aceptación forzada:** “Ah, entonces debe ser otra cosa”.  
**Resolución:** aparece un parche que casualmente corrige el problema que no era de la aplicación.

Ojo, no digo que haya mala fe explícita —o sí 🤨?—. A veces hay apuro, exceso de confianza, poca investigación o directamente desconocimiento. El problema aparece cuando esa falta de análisis se disfraza de certeza técnica.

> El “complejo de Dios” suele aplicar por acá —no como diagnóstico psicológico 😅—. Alcanza con verlo como una mezcla bastante humana de exceso de confianza, sesgo de confirmación y apego al propio código.
> Cuando alguien asume que su lógica es infalible, deja de investigar y empieza a defender territorio. Y ahí el problema ya no es técnico: es cultural.

## La red como éter místico

Infraestructura es como el backplane invisible del sistema: si anda bien, nadie lo nombra. Si algo falla, aparece como sospechoso antes de que alguien lea el mensaje de error.

Y la red, para ciertos diagnósticos apurados, es un éter místico y maligno que decide afectar justo a la parte del sistema que falla, mientras el ping responde, el puerto abre, el DNS resuelve y el resto de las aplicaciones siguen funcionando.

Ojo: también hay algo nuestro. Muchas veces Infraestructura se vende peor de lo que trabaja. No necesariamente porque falten argumentos, sino porque solemos tener perfiles más introvertidos, más orientados a resolver que a explicar.

Y explicar hacia “arriba” tampoco siempre es fácil. A veces hay que traducir logs, capturas, pruebas de conectividad y detalles técnicos para gente que cree que un senior de Infraestructura se fabrica con un cursito de seis meses y que las cosas andan por magia.

Es entendible —pero no justificable— que a veces se le crea más al que vende una hipótesis con seguridad escénica que a quienes aparecemos con cara de “esto ya lo revisé tres veces”.

, medio Richmond Avenal en *The IT Crowd*

![Infraestructura invisible](/images/notas/varias/richmond-avenal.jpg)
*Desde afuera, todavía nos imaginan encerrados en el cuarto de servidores como Richmond Avenal, el “Server Room Guy” de The IT Crowd.*

## No alcanza con que funcione en tu máquina

En análisis de sistemas uno puede imaginar el proceso ideal. Después, cuando toca implementarlo, aparecen las restricciones reales: red, base de datos, locks, timeouts, usuarios simultáneos, permisos, versiones, servidores, memoria, disco, latencia y errores que no aparecen en el equipo del desarrollador.

Una aplicación no debería estar pensada solo para “mi equipo”. Tiene que estar pensada para sobrevivir al ambiente donde realmente va a correr.

Tenés que capturar errores, papá. Tenés que loguear. Tenés que pensar que tu aplicación va a ir a la guerra, no a una demo con café y aire acondicionado.

Y esto no es una defensa corporativa de Infraestructura. Si el problema es de red, se corrige la red. Si es de firewall, se corrige el firewall. Si es de DNS, se corrige el DNS. Pero si el problema está en una consulta SQL bloqueada, una transacción mal manejada, una excepción sin capturar o una aplicación que no tolera un timeout, también hay que decirlo.

El punto no es ganar una discusión. El punto es encontrar el problema.

## Mean Time to Innocence

No es algo aislado, ni pasa solamente en sistemas. En muchos equipos existe una métrica no oficial: el **Mean Time to Innocence**, o tiempo medio hasta demostrar inocencia.

No mide cuánto se tarda en resolver el problema. Mide cuánto tarda un área en demostrar que el problema no era suyo. En el caso de Infraestructura: que no era la red, no era el firewall, no era el DNS, no era el servidor, no era el storage y no era “algo de comunicaciones”.

Es una métrica absurda, pero bastante real. Porque cuando el diagnóstico empieza con prejuicio, el primer esfuerzo no se invierte en encontrar la causa, sino en despejar sospechas. Y eso es tiempo perdido para todos.

> **La ley de gravedad de los tickets**
>
> Un error siempre tiende a caer hacia abajo en las capas del modelo OSI.
>
> Empieza en capa 7, aplicación, pero por comodidad baja hasta capa 3, capa 2 o directamente capa 1. Ahí queda esperando que Infraestructura lo suba de nuevo, con evidencia, logs, capturas y pruebas de conectividad.

## El giro: ahora tenemos más herramientas

Pero esta nota no es solo para quejarme. Acá viene el giro: apareció la IA para darnos una mano.

Con IA no desaparece la necesidad de saber. Tampoco convierte a cualquiera en desarrollador, DBA o especialista en redes. Pero agrega una herramienta más para leer un error, ordenar indicios y orientar el diagnóstico con algún sustento.

No reemplaza el criterio técnico. No tiene magia. Pero ayuda a separar un timeout de conexión de un timeout de ejecución, una caída de red de un bloqueo SQL, una sospecha razonable de una excusa cómoda.

Antes, cuando alguien decía “es la red”, muchas veces Infraestructura quedaba obligada a demostrar que no lo era. Si del otro lado no se revisaban logs, no se analizaba la excepción o directamente no se sabía qué estaba pasando, la discusión quedaba apoyada en autoridad, costumbre o prejuicio.

La IA no resuelve el problema por nosotros, pero puede ayudar a formular mejores preguntas. Y a veces eso ya cambia bastante la conversación.

## Un prompt antes de repartir diagnósticos

No hace falta empezar con una investigación digna de la NASA. A veces alcanza con copiar el error completo, pegarlo en una IA y pedirle que ayude a separar indicios.

Algo así:

```text
Analizá este error de una aplicación conectada a una base de datos.

Indicame si corresponde a error de red, error de conexión, timeout de ejecución, bloqueo de base de datos o problema de código.

Explicá qué operación estaba intentando hacer la aplicación y qué componente conviene revisar primero.

Error:
[pegar acá el texto completo del error]

Además, sugerime qué pruebas mínimas harías para orientar el análisis hacia el componente correcto.
```

No es magia. No reemplaza al desarrollador, al DBA ni a Infraestructura. Pero puede servir como primer filtro para no convertir una sospecha en diagnóstico.

Y acá aparece otro detalle interesant: ¿probaste alguna vez analizar un ejecutable con herramientas actuales? Te sorprendería cuánto puede quedar adentro de un `.exe`: cadenas de conexión, nombres de servidores, rutas internas, nombres de desarrolladores, configuraciones, endpoints, tokens mal guardados o datos que nunca deberían haber viajado dentro del binario.

Eso no significa que haya que subir alegremente una aplicación interna a ChatGPT, Gemini o Claude. Justamente al revés: significa que hay que tomar conciencia de lo que se está compilando, distribuyendo y dejando expuesto. Un ejecutable no siempre es una caja negra. Muchas veces es más parecido a una valija mal cerrada.

## Mirar el cuadro completo

Amo —mentira 😜— cierta palabrería moderna del “trabajemos en equipo”. Se repite mucho, pero después cada uno mira su tamagotchi y dice: “el mío está vivo”, la versión corporativa de: “en mi máquina anda”.

Pero un sistema no funciona por islas. Funciona por integración. Cliente, aplicación, API, base de datos, red, DNS, firewall, permisos, storage, usuarios, horarios pico, versiones, logs y todas esas cosas incómodas que no entran en la frase “yo no toqué nada”.

El objetivo no es que Infraestructura gane una discusión. El objetivo es que el diagnóstico empiece donde corresponde: en la evidencia.

Porque si cada uno mira solo su ombligo —o su propia pantalla— nadie ve el cuadro completo.

Y cuando nadie ve el cuadro completo, cualquier error termina pareciendo red.



(Por si después de todo esto te dieron ganas de ver [*The IT Crowd* hace clic acá](https://www.youtube.com/show/VLPLQxUFrtzYaUlfC1e_wcoaUGC02HPVHSW4?sbp=KgtOTlJRYURrUTdGOEAB)).