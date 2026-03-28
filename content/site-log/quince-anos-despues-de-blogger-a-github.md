---
title: "Quince años después: de Blogger a GitHub"
date: 2026-03-26T19:30:00-03:00
draft: false
description: "Una nivelación mínima antes de instalar el sitio: qué tuve que entender de Git y GitHub viniendo desde otro palo."
tags: ["git", "github", "aprendizaje", "infraestructura", "site-log"]
categories: ["Site Log"]
---

# La idea

Quince años pasaron desde mi sitio en Blogger, cuando me peleaba con XML y trataba de acomodar todo más por insistencia que por método.

La idea esta vez era volver a tener algo simple, propio y fácil de mantener. Pero ya que estaba, también quería aprovechar para aprender algo nuevo.

Y así terminé acá: reforzando ideas sobre Git, GitHub, commits y pushes. No porque arrancara de cero absoluto, sino porque para armar este sitio ya no alcanzaba con tocar un panel web y listo. Había que entender mejor el recorrido completo de los cambios, desde la PC hasta la publicación online.

## De dónde venía

Mi experiencia anterior con tener algo “propio” en la web era bastante otra.

En Blogger, el trabajo era más bien:

* tocar plantillas
* pelearse con XML
* cambiar cosas medio a ciegas
* y confiar en que no se rompiera nada demasiado grave

Era simple en un sentido, pero también bastante limitado.

Ahora quería algo distinto:

* más control
* más prolijo
* más durable
* y, si era posible, sin quedar atado a una plataforma cerrada

La búsqueda empezó por tener un sitio simple. Y en algún punto me obligó a ordenar mejor una lógica bastante más cercana al mundo del desarrollo de lo que yo usaba habitualmente.

## La primera aclaración necesaria: Git no es GitHub

Lo primero que hubo que separar fue eso.

Desde afuera muchas veces parece que fuera todo lo mismo. Pero no.

### Git

**Git** es la herramienta que corre localmente en la PC.

Es la que registra:

* qué archivo cambié
* qué agregué
* qué borré
* y en qué estado quedó el proyecto en cada momento

Dicho simple: Git guarda la historia del trabajo.

### GitHub

**GitHub** es el lugar donde ese proyecto queda alojado online.

Pero no es solo una copia en la nube.

En este sitio además cumple otra función importante: sirve como base para que GitHub Pages publique la web automáticamente cada vez que se suben cambios.

## La idea que más me sirvió

La forma más clara de pensarlo fue esta:

* el proyecto vive localmente en mi PC
* Git registra los cambios
* GitHub guarda esos cambios online
* y GitHub Pages publica el sitio a partir de eso

Cuando lo ordené así, dejó de ser una suma de comandos sueltos y pasó a tener una lógica bastante más razonable.

## Qué conceptos tuve que reforzar

### Repositorio

El repositorio es la carpeta del proyecto, pero no una carpeta cualquiera.

Es una carpeta donde Git está siguiendo todo lo que pasa.

No solo guarda archivos: guarda también historial.

### Commit

Este fue el concepto más importante de todos.

Un **commit** no es simplemente “guardar”.

Es una **captura de estado** del proyecto en un momento exacto.

Lleva:

* un identificador único
* una fecha
* un autor
* y un mensaje explicando qué se hizo

La forma más útil que encontré para pensarlo fue como un punto de control lógico. No exactamente un backup, pero sí una foto clara del proyecto en un momento determinado.

### Rama

La rama principal normalmente es `main`.

En términos prácticos, es la línea principal del proyecto.

Más adelante se pueden usar ramas para probar cosas sin romper lo que ya funciona, pero para arrancar este sitio no hacía falta meter otra capa de complejidad.

### Push

`push` significa subir a GitHub los commits que hice localmente.

Hasta que no hay `push`, los cambios siguen existiendo solo en mi máquina.

### Pull

`pull` es traer desde GitHub a la PC cambios que ya estén online.

En este proyecto no fue lo central al principio, porque arranqué solo y desde cero, pero igual conviene tener claro qué significa.

## Lo que necesitaba ordenar mejor

Más que “entender Git” en abstracto, lo que necesitaba era acomodar bien la secuencia real de trabajo.

Una cosa es:

* editar archivos

Otra es:

* registrar esos cambios

Y otra distinta es:

* publicarlos


Eso ya lo intuía, pero al hacer el sitio quedó mucho más concreto y más fácil de fijar.

## El flujo de trabajo real

Visto desde la práctica, el circuito terminó siendo bastante simple:

1. modificar archivos localmente
2. revisar cómo queda el sitio
3. hacer `git add`
4. hacer `git commit`
5. hacer `git push`
6. esperar que GitHub Pages publique

No hay tanta magia más que esa.

Lo importante es entender qué hace cada paso y en qué momento entra cada herramienta.

## Mirado desde alguien de infraestructura

Desde un perfil de infraestructura, la tendencia natural es pensar todo en términos de:

* servicios
* servidores
* configuración
* publicación
* DNS
* y qué cosa depende de cuál

Y en cierto sentido eso sigue siendo útil acá.

La diferencia es que en este caso no estoy administrando un IIS, un Apache o una VM propia donde subo archivos a mano.

El “servicio” está repartido en varias piezas:

* Git local
* GitHub
* GitHub Pages
* el dominio
* el DNS

No hay un servidor clásico que yo toque directamente, pero igual hay una lógica técnica bastante clara detrás.

Simplemente cambian las herramientas.

## Por qué esta nota va antes de la instalación

Porque antes de empezar a instalar Hugo, elegir tema, armar el sitio y tocar configuración, tenía sentido dejar acomodada mínimamente la herramienta que iba a sostener todo el proceso.

No porque no supiera nada, sino porque necesitaba reforzar conceptos y ordenarlos dentro de un caso real.

Y eso terminó sirviendo, porque después hubo que usar todo esto de verdad: commits, pushes, publicación, cambios de estructura, DNS y demás.

## Lo que apareció en el camino

La idea original era “quiero un sitio simple”.

Y sí, se logró.

Pero antes de llegar a eso hubo que pasar por varias cosas que en el modelo viejo de Blogger no estaban tan presentes:

* entender mejor Git
* entender qué papel cumple GitHub
* asumir que el contenido tiene historia y versiones
* entender que local y online no son lo mismo
* y aceptar que a veces una nota no aparece no porque esté mal escrita, sino porque todavía no hiciste `push`, o porque está en borrador, o porque la fecha quedó mal

O sea: el camino hacia algo más simple por fuera también exigía un poco más de orden por dentro.

## Qué me dejó esta parte

Más allá del sitio, esta etapa sirvió para reforzar una base que conocía por arriba, pero que no venía usando en un flujo propio de punta a punta.

No terminé queriendo “meterme en desarrollo” ni nada parecido.

Pero sí terminé entendiendo mejor lo suficiente como para trabajar con Git y GitHub con criterio, y no simplemente repitiendo pasos de memoria.

Y eso ya suma bastante.

## Cierre

Quince años después de Blogger, la vuelta a tener un sitio propio terminó siendo distinta de lo que había imaginado.

Quería algo simple. Lo sigo queriendo.

Pero esta vez la simplicidad no pasó por tocar una plantilla y listo, sino por entender un poco mejor qué herramientas sostienen el sitio, cómo se publican los cambios y por qué conviene registrar el proceso en lugar de improvisarlo cada vez.

Aunque no vine a hacerme desarrollador 🫢, sí tuve que reforzar lo suficiente como para no trabajar a ciegas. Y, para este proyecto, eso también era parte del viaje.
