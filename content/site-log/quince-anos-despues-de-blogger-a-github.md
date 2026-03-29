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

Esta vez quería volver a tener algo simple, propio y fácil de mantener. Pero ya que estaba, también quería aprovechar para aprender algo nuevo.

Y así terminé acá: reforzando ideas sobre Git, GitHub, commits y pushes. No porque arrancara de cero absoluto, sino porque para armar este sitio ya no alcanzaba con tocar un panel web y listo. Había que entender mejor el recorrido completo de los cambios, desde la PC hasta la publicación online.

## De dónde venía

Mi experiencia anterior con tener algo propio en la web era bastante otra.

En Blogger, el trabajo era más bien tocar plantillas, pelearse con XML, cambiar cosas medio a ciegas y confiar en que no se rompiera nada demasiado grave. Era simple en un sentido, pero también bastante limitado.

Ahora quería algo distinto: más control, más prolijidad, más duración y, si era posible, sin quedar atado a una plataforma cerrada.

La búsqueda empezó por tener un sitio simple. Y en algún punto me obligó a ordenar mejor una lógica bastante más cercana al mundo del desarrollo de lo que yo usaba habitualmente.

## Git no es GitHub

Lo primero que hubo que separar fue eso.

**Git** es la herramienta que corre localmente en la PC y registra qué cambié, qué agregué, qué borré y en qué estado quedó el proyecto en cada momento.

**GitHub** es el lugar donde ese proyecto queda alojado online. Pero no es solo una copia en la nube: en este caso también es la base desde la que GitHub Pages publica el sitio automáticamente.

La forma más clara de pensarlo fue esta:

* el proyecto vive localmente en mi PC
* Git registra los cambios
* GitHub guarda esos cambios online
* y GitHub Pages publica el sitio a partir de eso

## El flujo de trabajo real

Visto desde la práctica, el circuito terminó siendo bastante simple:

1. modificar archivos localmente
2. revisar cómo queda el sitio
3. hacer `git add`
4. hacer `git commit`
5. hacer `git push`
6. esperar que GitHub Pages publique

No hay tanta magia más que esa.

## Mirado desde alguien de infraestructura

No hay un servidor clásico que yo toque directamente, y tampoco es como trabajar desde un webpanel.

En este caso no estoy administrando un IIS, un Apache o una VM propia donde subo archivos a mano. El “servicio” está repartido en varias piezas:

* Git local
* GitHub
* GitHub Pages
* el dominio
* el DNS

## Por qué esta nota va antes de la instalación

Porque antes de empezar a instalar Hugo, elegir tema, armar el sitio y tocar configuración, tenía sentido dejar mínimamente acomodada la herramienta que iba a sostener todo el proceso. Poner el ojo en el objetivo y ver si realmente lo podía lograr con la herramienta que elegí.

Y eso terminó sirviendo, porque después hubo que usar todo esto de verdad: commits, pushes, publicación, cambios de estructura, DNS y demás.

## Cierre

Quince años después de Blogger, la vuelta a tener un sitio propio terminó siendo distinta de lo que había imaginado.

Quería algo simple. Lo sigo queriendo.

Pero esta vez la simplicidad no pasó por tocar una plantilla y listo, sino por entender un poco mejor qué herramientas sostienen el sitio, cómo se publican los cambios y por qué conviene registrar el proceso en lugar de improvisarlo cada vez.

GitHub no es un lugar donde me mueva habitualmente, y esta fue una buena manera de meterme ahí sin hacer desarrollo 🫢. Había que renegar un poco, sí, aunque para este proyecto eso también era parte del viaje.
