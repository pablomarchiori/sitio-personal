---
title: "Navegando Apollo 9 con el mouse"
date: 2026-04-13T19:10:00-03:00
draft: false
description: "Una recreación web del AGC y el DSKY de Apollo 9: tocar con el mouse algo que alguna vez fue hardware crítico de misión."
tags: ["apollo", "nasa", "agc", "simulación", "labs"]
---

*(o sintiéndose parte de la tripulación del Gumdrop.)*

![Command Module Apollo](/images/notas/luna/command-module-apollo-11.png)

*Command Module de Apollo 11. No es Gumdrop, pero tiene un aspecto visual muy similar al módulo de comando de Apollo 9.*

Hay algo genial en poder abrir una página web y encontrarte con una recreación funcional de una computadora del programa Apollo. No es una imagen estática, sino una emulación de un sistema real, con su consola, su lógica de operación y su software de vuelo. Hay gente que se tomó el trabajo de hacer esto y nos deja tocar, aunque sea desde el navegador, una forma de operar computadoras que hoy parece de otro planeta.

[Probar el emulador AGC/DSKY Castellano](/moonjs/agc_sp.html)  
[Probar el emulador AGC/DSKY Inglés](/moonjs/agc.html)

En este caso, se trata de una versión asociada al **módulo de comando de Apollo 9 (Gumdrop)**. Durante los diez días del vuelo fue el hogar principal de los tres astronautas: **James McDivitt**, **David Scott** y **Russell Schweickart**. Apollo 9 fue una misión en órbita terrestre, pensada para probar por primera vez el conjunto completo de hardware Apollo, incluido el **módulo lunar de Apollo 9 (Spider)**. Mientras Spider se usó para maniobras de separación, pruebas y acoplamiento, Gumdrop siguió siendo la pieza central de la misión y fue la única parte de la nave que volvió a la Tierra con la tripulación a bordo.

![Apollo 9: Gumdrop y Spider](/images/notas/luna/gumdrop-spider.png)

*Misión Apollo 9: módulo lunar Spider y módulo de comando Gumdrop.*

## Lo que aparece en pantalla

El emulador recrea el **Apollo Guidance Computer (AGC)** y el **DSKY**, la consola con la que los astronautas interactuaban con esa computadora. En esta versión está corriendo **Colossus 249**, el software de vuelo que voló en el **módulo de comando de Apollo 9 (Gumdrop)**, tal como indica la propia página del emulador. El AGC se encargaba del guiado, la navegación y el control; el DSKY era su cara visible, el lugar donde la tripulación metía datos, pedía acciones y leía estados del sistema. La propia página del emulador lo explica así: el DSKY simulado se comunica con un AGC simulado, que a su vez ejecuta una copia de **Colossus 249**, y la interfaz humana del DSKY estaba construida alrededor del concepto de **VERB / NOUN**. No había ventanas, menús ni ayudas visuales: había que saber qué pedirle a la máquina y cómo interpretar lo que devolvía.

![Apollo Guidance Computer](/images/notas/luna/apollo-Guidance-computer.jpg)

*Apollo Guidance Computer: el hardware real que hoy estamos viendo emulado desde una página web.*

Lo importante acá no es solo qué hacía, sino **cómo** se operaba. Apollo no era “apretá un botón y que la nave haga todo”. Había software de guiado muy serio, pero también una interacción humana mucho más visible que hoy. La documentación histórica del AGC y del DSKY muestra justamente esa interfaz austera, numérica y orientada a comandos. Vista desde ahora, parece una calculadora rara injertada en un panel industrial. En su momento era una pieza central de una nave tripulada.

## De hardware dedicado a una página web

Lo que en su momento necesitaba hardware dedicado de punta, hoy puede emularse dentro de una página web común.

Un emulador, dicho rápido, es una forma de reproducir el comportamiento de una máquina original dentro de otra máquina distinta. No es solo copiar la pantalla o rehacer el aspecto visual: la idea es imitar cómo funcionaba ese hardware para poder correr software que fue escrito para él. Virtual AGC existe justamente para preservar el software de vuelo original y las emulaciones de esas computadoras históricas (de modo que puedan ejecutarse hoy en máquinas comunes).

Se parece un poco a lo que pasó con los arcades: antes necesitabas la máquina específica; hoy corrés algo muy parecido en una PC o en un teléfono. La diferencia es que acá no se trata de un juego. Esto emula hardware real, no solo software suelto.

Esto no le saca mérito a Apollo. Al contrario: ayuda a dimensionar lo que significaba operar una nave con una computadora mucho más limitada y bastante más dura de operar que cualquier interfaz moderna.

## Más duro de operar, más exigente para el operador

Hay una comparación que ayuda bastante a aterrizar la idea.

Un **Ford Falcon** viejo era más tosco, más directo y bastante más entendible desde afuera. Un auto moderno hace muchísimo más: te da asistencia, información y prestaciones que antes no existían, pero también es bastante más complejo por dentro y mucho menos transparente para quien lo usa.

Con Apollo y los sistemas modernos pasa algo parecido.

Lo viejo no era “mejor”. Era más duro de operar, más limitado y más exigente para el operador.  
Lo nuevo no es “peor”. Es más capaz, más asistido y muchísimo más complejo.

Y eso se nota en detalles concretos: secuencias de comandos largas, indicadores fijos, displays numéricos y una lógica de operación mucho menos interpretativa que la de cualquier cabina moderna. Nada de interfaces llenas de contexto, gráficos y ayudas. Acá había que saber qué pedir, cómo pedirlo y qué significaba lo que la máquina devolvía.

## Entre la ingeniería real y la ciencia ficción de época

![Panel de control USS Enterprise](/images/notas/luna/star-trek-original-series-control.jpg)

*[Foto: Star Trek Prop, costume & Auction Authority](http://www.startrekpropauthority.com/2008/05/star-trek-original-series-control.html)*

Visualmente, me hace pensar en la **Enterprise** original de los 60 en *Star Trek*. No porque una cosa venga de la otra de forma directa, sino porque comparten una idea muy de época sobre cómo debía verse la tecnología avanzada: tableros visibles, funciones atadas a botones concretos, indicadores físicos, pantallas austeras.

Por supuesto, en la ficción había más lucecitas de colores y más espectáculo. Pero visto hoy, Apollo también tiene algo de ese retrofuturismo serio, de esa mezcla rara entre ingeniería real y ciencia ficción clásica.

Y del otro lado, si uno mira una cabina moderna como la de **Orion**, o incluso ciertas interfaces de la **Rocinante** en *The Expanse*, ya la sensación es otra. Más integración, más pantallas, más software, más información disponible para el operador. Menos consola dura. Más sistema. NASA describe a Orion como una cabina tipo **glass cockpit** (con displays redundantes, interfaces gráficas y procedimientos electrónicos interactivos).

![Artemis II Cockpit](/images/notas/luna/artemis-ii-cockpit.webp)

*Cockpit de Orion para Artemis II: menos consola física dedicada, más pantallas e integración por software.*

## Para seguir viendo

Es una locura que esto hoy entre en una pestaña del navegador. Y también que, a fines de los años 60, una máquina de esta familia formara parte del entorno técnico de una misión espacial tripulada. La emulación no lo vuelve menos impresionante: lo vuelve un poco más cercano.

Aprecio que haya gente dedicando tiempo a hacer estos emuladores, y no es solo nostalgia, hay preservación técnica, curiosidad histórica y ganas de volver tocable algo que, de otro modo, quedaría encerrado en documentación vieja, manuales y fotos de museo.

El punto de partida más directo es el emulador publicado acá: [AGC/DSKY en castellano](/moonjs/agc_sp.html). El resto sirve para seguir el rastro técnico del proyecto y entender mejor qué clase de tecnología era, cómo se operaba y por qué sigue fascinando.

Si querés seguir curioseando, acá dejo algunos links:

- [Emulador AGC/DSKY Inglés](/moonjs/agc.html)
- [Proyecto Moonjs en GitHub](https://github.com/siravan/moonjs)
- [Virtual AGC](https://www.ibiblio.org/apollo/)
- [Apollo 9 en NASA](https://www.nasa.gov/mission/apollo-9/)
- [Command Module, Apollo 11 Projection](https://www.si.edu/object/command-module-apollo-11:nasm_A19700102000)



