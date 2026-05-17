---
title: "Internet en (casi) todo el planeta: por qué Starlink cambió el internet satelital"
date: 2026-05-17T16:00:00-03:00
draft: false
description: "Starlink no inventó el internet por satélite. Cambió la arquitectura: órbita baja, miles de satélites, estaciones terrenas, lanzamientos frecuentes y antenas capaces de cambiar de enlace mientras los satélites se mueven todo el tiempo."
tags: ["starlink", "satélites", "internet", "spacex", "arsat"]
categories: ["Notas"]
---

![Tren de satélites Starlink recién lanzados](/images/notas/starlink/starlink_train.jpg)

*Tren de satélites Starlink recién lanzados, visible desde tierra antes de dispersarse en órbita.*

Durante años, decir “internet satelital” sonaba a solución de último recurso. Algo para el campo, para una escuela rural, para una empresa lejos de todo o para un lugar donde no había fibra, radioenlace ni una antena celular decente. Funcionaba, sí, pero servía para "conectarse", no para tener una experiencia parecida a una conexión terrestre moderna.

Con Starlink empezó a cambiar esa percepción. No porque haya inventado el internet por satélite. Eso ya existía. Lo distinto fue la arquitectura: una red baja, de gran escala y dinámica, donde los satélites no están quietos y la antena no apunta a un punto fijo del cielo.

La diferencia no es magia. Es física, escala industrial y red.

## No todo lo satelital es lo mismo

Desde tierra, muchas tecnologías parecen parecidas: una antena mirando al cielo y algo que baja desde un satélite. Pero técnicamente no es lo mismo una antena de DirecTV, una antena de internet satelital clásico, un GPS, un teléfono satelital o una antena Starlink.

Comparten el cielo, no la función.

Un satélite de televisión puede transmitir una señal hacia una zona enorme sin preocuparse demasiado por la latencia. Un sistema GPS no te da internet: te da posición y tiempo. Un teléfono satelital busca comunicación básica en lugares remotos. Un servicio de internet satelital geoestacionario conecta zonas alejadas, pero con una demora inevitable por la distancia. Starlink, en cambio, busca que una conexión satelital se parezca mucho más a una conexión terrestre común.

## El satélite como nodo de red

Un satélite de comunicaciones no es “internet flotando en el espacio”. Es un nodo dentro de una red.

Un repetidor WiFi no crea internet por sí solo: toma una señal, la reenvía y la integra a una red más grande. Un satélite hace algo parecido, en otra escala: recibe, transporta y entrega señal entre puntos que no están conectados directamente por cable, fibra o radioenlace terrestre.

Si ese nodo no tiene salida hacia otra red, queda aislado.

En una red satelital tradicional, el camino básico suele ser:

**usuario → antena → satélite → estación terrena → red terrestre → internet**

En una red más moderna, como Starlink, puede aparecer un tramo adicional:

**usuario → antena → satélite → enlace láser con otro satélite → estación terrena → internet**

Pero la idea de fondo no cambia: el satélite extiende la red. No la inventa de cero.

## Los geoestacionarios: DirecTV, ARSAT y el satelital clásico

Durante décadas, el modelo satelital más conocido fue el geoestacionario. Estos satélites están a unos **35.786 kilómetros** sobre el ecuador. A esa altura giran acompañando la rotación de la Tierra y, vistos desde el suelo, parecen quedarse fijos en el cielo.

Esa es su gran ventaja: la antena puede apuntar siempre al mismo lugar. Es la lógica de DirecTV. Se instala, se orienta al satélite correspondiente y queda ahí. Para televisión funciona muy bien, porque la latencia no importa demasiado: el usuario recibe una transmisión, no está esperando una respuesta interactiva.

Con internet cambia la historia. Ahí sí importa el ida y vuelta: abrir una página, usar una VPN, entrar por escritorio remoto, hacer una videollamada o esperar que un sistema valide una sesión. Una señal que sube hasta un satélite geoestacionario y vuelve a bajar tiene que recorrer decenas de miles de kilómetros. No es una falla del servicio. Es geometría.

Por eso el satelital geoestacionario puede ser muy útil para cobertura amplia, televisión, enlaces de datos, servicios mayoristas o conectividad donde no llega otra infraestructura. Pero arrastra una latencia propia de su altura.

ARSAT entra en ese mundo. [ARSAT informa que con ARSAT-1 y ARSAT-2 ofrece cobertura satelital geoestacionaria](https://www.arsat.com.ar/satelites-geoestacionarios-de-telecomunicaciones/) en Argentina y el continente americano. ARSAT-2 opera en la posición orbital **81° Oeste**, según documentación institucional de ARSAT.

Tiene valor. Pero no es comparable en forma directa con Starlink.

Tener un satélite geoestacionario propio es una cosa. Desplegar una constelación de miles de satélites bajos, fabricar antenas de usuario, operar estaciones terrenas, coordinar espectro, hacer handoff permanente entre satélites y sostener una red global de baja latencia es otra cosa.

## La altura cambia la experiencia

No es lo mismo estar a cientos de kilómetros que a casi 36.000. En satélites, esa distancia cambia la latencia, la cobertura, el tamaño de la red necesaria y hasta la forma de apuntar una antena.

| Sistema | Altura aproximada |
|---|---:|
| Avión comercial | 10 a 12 km |
| Starlink / LEO | alrededor de 550 km |
| GPS | alrededor de 20.200 km |
| GEO / ARSAT / DirecTV / satelital clásico | alrededor de 35.786 km |

![Comparación visual de órbitas LEO, MEO y GEO](/images/notas/starlink/leo_meo_geo_orbits.png)

*Comparación de órbitas: LEO (baja), MEO (media, GPS) y GEO (geoestacionaria). La distancia real entre LEO y GEO es mucho mayor de lo que suele sugerir un diagrama simple.*

Un avión comercial vuela a unos 10 o 12 kilómetros. Starlink está mucho más arriba, pero sigue estando muy abajo comparado con un geoestacionario. [Starlink describe su red como una constelación de satélites en órbita baja](https://www.starlink.com/technology), alrededor de los 550 km.

GPS está en otra categoría: órbita media, alrededor de los **20.200 km**. No da internet; da posicionamiento, navegación y tiempo. La documentación oficial de [GPS.gov](https://www.gps.gov/systems/gps/space/) explica que sus satélites vuelan en órbita media y dan dos vueltas a la Tierra por día.

Los geoestacionarios quedan mucho más lejos. Esa distancia les permite cubrir enormes regiones desde un punto fijo del cielo, pero también explica su latencia. En cambio, un satélite LEO está cerca y puede responder más rápido, pero cubre menos superficie y se mueve respecto del usuario.

No alcanza con poner un satélite bajo. Hacen falta muchos, pasando todo el tiempo, y una red capaz de cambiar de enlace sin que el usuario lo note.

Sitios como [satellitemap.space](https://satellitemap.space/), [N2YO](https://www.n2yo.com/), [Heavens-Above](https://www.heavens-above.com/) o [starlink.sx](https://starlink.sx/) sirven para ver esto en vivo. Los LEO no están quietos: pasan, desaparecen del horizonte y son reemplazados por otros.

## Por qué Starlink cambió el internet satelital

Starlink no cambió el satelital por poner un satélite en el espacio. Ya se hacía. Lo cambió por armar una red baja, de gran escala y dinámica, capaz de operar con satélites que se mueven todo el tiempo respecto del usuario.

La ventaja de estar más bajo es clara: menor distancia, menor latencia. La desventaja viene pegada: cada satélite cubre menos superficie y pasa rápido sobre una zona. Para que eso funcione como servicio continuo, hacen falta muchos satélites y una red que pueda cambiar de enlace constantemente.

La antena del usuario no queda apuntando a un satélite fijo como en DirecTV. Starlink usa antenas de matriz de fase, o *phased array*, que orientan electrónicamente el haz dentro de su campo de visión. La antena puede estar físicamente quieta, pero el enlace cambia por dentro: otro satélite, otra ruta, otro tramo hacia una estación terrena o hacia otro satélite.

Desde el lado del usuario parece simple: enchufar, orientar y esperar que tome servicio. Por detrás hay una red decidiendo qué satélite usar, cuándo cambiar al siguiente, cómo enrutar el tráfico y por dónde bajarlo a internet.

Pero la arquitectura sola no alcanza. Una constelación LEO necesita miles de satélites, y esos satélites no duran para siempre. Hay que lanzarlos, reponerlos, actualizar generaciones, mejorar capacidad y sostener el despliegue. Si cada lanzamiento fuera carísimo y poco frecuente, el modelo sería mucho más difícil de sostener.

![Lanzamiento de Falcon 9](/images/notas/starlink/falcon9_launch.webp)

*Lanzamiento de Falcon 9. Starlink no se entiende sin esa cadencia de lanzamientos: muchos satélites, muchas reposiciones y una logística espacial funcionando como parte del servicio.*

Starlink no se entiende separado de SpaceX. La misma empresa que fabrica y opera la red satelital también controla una parte central del acceso a órbita con Falcon 9 y, a futuro, Starship. Esa integración permite lanzar seguido, reponer satélites, actualizar generaciones y sostener una red de escala difícil de igualar: telecomunicaciones, cohetes reutilizables, producción en serie, antenas electrónicas, estaciones terrenas, enlaces láser y software de red.

Incluso el logo de SpaceX juega con esa idea: la curva de la X suele asociarse con una trayectoria de lanzamiento. No es para construir una teoría alrededor del dibujo, pero sirve como pista. Starlink no aparece aislado; nace dentro de una empresa obsesionada con llegar al espacio muchas veces, fabricar en serie y bajar el costo de poner hardware en órbita.

Es una red completa, no un satélite.

## Estaciones terrenas: dónde vuelve a tocar tierra

Hay una confusión habitual con Starlink: pensar que una vez que la señal sube al satélite, ya está “en internet”. No es así.

El satélite necesita una forma de conectar con la red terrestre. Para eso están las estaciones terrenas, también llamadas gateways. Son instalaciones con antenas que comunican con los satélites y conectan esa red espacial con fibra, proveedores, datacenters y puntos de intercambio.

Starlink puede enrutar tráfico mediante estaciones terrenas relativamente cercanas o, cuando hay enlaces láser entre satélites, mover tráfico por el espacio hasta bajarlo en otra estación. Pero siempre en algún momento tiene que bajar.

[Starlink informa puntos de presencia en distintos países](https://www.starlink.com/support/article/45d1d256-171e-0f67-4895-5d248fa63b66); para Argentina figura Buenos Aires como ubicación de punto de presencia. También se han mencionado públicamente posibles gateways o instalaciones asociadas a Starlink en distintas zonas de Argentina, como Chivilcoy, Campana, La Plata, Salta y Río Negro. Conviene tomar ese listado como dato operativo a verificar, no como inventario oficial cerrado.

Starlink reduce dependencia de infraestructura local en el último tramo, pero no elimina la infraestructura terrestre. Salta una parte del problema, no todo el problema. La red sigue necesitando cables, gateways, energía y puntos de salida a internet.

## Antena, margen y movimiento

Lo que necesita la antena es una buena ventana de cielo. En una instalación fija, la app indica hacia dónde conviene orientarla según la ubicación. En nuestra zona suele pedir orientación hacia el sur. No porque solo haya satélites al sur, sino porque ese sector suele dar mejor geometría, menos interferencia con la franja geoestacionaria y una secuencia más estable de enlaces.

Desde Argentina, los satélites geoestacionarios quedan hacia el norte, cerca del ecuador celeste. Starlink tiene que convivir con esos sistemas, así que no cualquier satélite visible en un mapa es necesariamente utilizable por la antena. Importan la elevación, las obstrucciones, la carga de red, la celda de servicio, las restricciones regulatorias y el próximo salto de enlace.

![Antena Starlink Performance instalada en la planta](/images/notas/starlink/starlink_campo.jpg)

*Antena Starlink Performance instalada en la planta. Orientación sur, cielo despejado.*

No todas las antenas Starlink tienen el mismo margen. La Standard alcanza para uso fijo o portátil común. La Mini prioriza bajo consumo y traslado fácil. La Performance tiene más sentido cuando la estabilidad importa, como en una planta de producción, porque ofrece más margen frente a lluvia, condiciones marginales u orientación menos ideal.

No transforma Starlink en fibra. Pero en un enlace satelital, tener más margen importa.

La lluvia también juega. Starlink trabaja en bandas de alta frecuencia, y a esas frecuencias el agua en la atmósfera absorbe y dispersa parte de la energía de radio. A eso se lo conoce como atenuación por lluvia o *rain fade*.

Con lluvia normal, el servicio puede seguir funcionando sin problemas visibles. Con lluvia fuerte, puede bajar la velocidad, subir la latencia o aparecer algún microcorte. Con tormentas muy intensas, incluso una antena Performance puede perder enlace temporalmente.

Una Performance no evita la lluvia; simplemente llega con más resto antes de quedarse sin margen.

También hay que separar lluvia de obstrucción. Una cosa es atenuación atmosférica. Otra es que un árbol, un techo, un galpón, un silo o una estructura metálica tape parte del cielo. La antena puede tolerar condiciones marginales, pero no puede ver a través de un obstáculo sólido como si no existiera.

En movimiento pasa lo mismo, pero con una dificultad extra: la antena cambia de orientación respecto del cielo junto con el vehículo. Si va en el techo, con cielo despejado, tiene mejor margen. Si va en el torpedo de un camión, mirando a través del parabrisas, puede funcionar, pero es una instalación de compromiso. El vidrio, el techo, los parantes, los árboles, los puentes y otros vehículos pueden afectar el enlace.

Por eso una antena Starlink no necesita “ver el sur” todo el tiempo. Necesita ver satélites útiles dentro de su campo de visión. Si el vehículo gira, usará los satélites válidos que queden dentro de esa nueva ventana. Si la geometría empeora, puede haber degradación o cortes breves.

## Celulares conectados al satélite

[Starlink Direct to Cell](https://www.starlink.com/business/direct-to-cell) busca que teléfonos LTE comunes puedan conectarse directamente a satélites, sin una antena Starlink tradicional. Starlink lo presenta como satélites que actúan como “torres celulares en el espacio”, con servicio sobre teléfonos LTE existentes donde haya cielo visible.

Pero esto no convierte al celular en una antena Starlink de bolsillo. El caso de uso es diferente. En las primeras etapas, este tipo de servicio apunta a mensajería, emergencia, baja capacidad, IoT, y luego datos o voz con limitaciones. En un documento público de febrero de 2025, Starlink informó disponibilidad comercial de Direct to Cell para mensajería satelital en Estados Unidos y Nueva Zelanda, con más países y servicios previstos.

El celular satelital directo no reemplaza de golpe a la red celular terrestre. La complementa donde no hay antenas. En una ciudad, una red 4G o 5G terrestre sigue teniendo mucha más capacidad. En una ruta, un campo o una zona remota, que el celular pueda mandar un mensaje por satélite puede ser enorme.

No es la misma experiencia que tener una antena Starlink en el techo. Es otra capa de conectividad.

## Competidores: Amazon, China y lo que viene

Starlink no va a estar solo.

Amazon viene desarrollando su propia constelación LEO, antes conocida como Project Kuiper y ahora presentada como [Amazon Leo](https://www.aboutamazon.com/news/amazon-leo/project-kuiper-becomes-amazon-leo). Amazon describe el proyecto como una constelación de más de **3.000 satélites en órbita baja**, conectados por enlaces ópticos y por una red global de gateways, fibra y puntos de conexión a internet.

La paradoja es que Amazon también contrató lanzamientos con SpaceX para desplegar parte de su red. [Amazon anunció en 2023 un contrato por tres lanzamientos Falcon 9](https://www.aboutamazon.com/news/innovation-at-amazon/amazon-project-kuiper-spacex-launch), explicando que usar múltiples proveedores reduce riesgo de calendario y acelera el despliegue.

Competir con Starlink no es solo fabricar satélites. Hay que lanzarlos. Y hoy SpaceX tiene una capacidad de lanzamiento difícil de ignorar, incluso para competidores.

También están OneWeb/Eutelsat, con un enfoque más empresarial, gubernamental y de backhaul, y China, que viene impulsando constelaciones propias por razones comerciales y estratégicas. La competencia futura no será solamente por vender antenas. Será por órbitas, espectro, lanzadores, estaciones terrenas, capacidad de fabricación, software de red y acuerdos con operadores terrestres.

Que Amazon haya tenido que contratar lanzamientos con SpaceX para desplegar su propia constelación dice bastante sobre dónde está la ventaja real.

## El límite que se movió

El mapa ya cambió.

El satelital clásico sigue teniendo lugar, ARSAT sigue teniendo sentido en su función y la fibra sigue siendo mejor cuando está disponible y bien hecha. Pero en lugares donde antes internet satelital era resignarse, ahora puede significar trabajar, hacer una videollamada, entrar por VPN, operar una planta o tener respaldo donde no había nada razonable.

No es internet en todo el planeta. No todavía, y no en cualquier condición.

Pero el “casi” ya alcanza.
