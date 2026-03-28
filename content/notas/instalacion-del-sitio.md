---
title: "Instalación del sitio personal con Hugo en Windows"
date: 2026-03-27T21:55:00-03:00
draft: true
description: "Primera nota del sitio: instalación de Hugo, Git, Congo y puesta en marcha local."
tags: ["hugo", "windows", "github", "sitio-personal"]
categories: ["Notas"]
---

# Objetivo

Dejar funcionando un sitio personal con **Hugo en Windows**, usando **Git**, el tema **Congo** y publicación futura en **GitHub Pages**.

## Punto de partida

El proceso empezó con estos objetivos:

- usar una plataforma abierta
- evitar servicios cerrados tipo Blogger
- mantener costo casi cero
- escribir en Markdown
- tener un sitio limpio, legible y fácil de mantener
- dejar abierta la posibilidad de conectar dominio propio más adelante

## Entorno usado

- Windows
- Hugo Extended
- Git for Windows
- Git CMD
- tema Congo

## Proceso realizado

### 1. Instalación de Hugo

Se descargó Hugo para Windows, se dejó el ejecutable en una carpeta local y se agregó al `PATH`.

Luego se verificó con:

-powershell
hugo version

### 2. Instalación de Git

Se instaló Git for Windows y se verificó con el comando git --version.

### 3. Creación del proyecto

Se creó el proyecto con el comando hugo new project sitio-personal.

Luego se inicializó Git dentro del proyecto con git init.

### 4. Elección del tema

Se evaluaron varios temas de Hugo y finalmente se eligió Congo, priorizando equilibrio entre:

sobriedad
flexibilidad
soporte para notas, imágenes y esquemas
mantenimiento razonable

###5. Instalación del tema

El tema se agregó como submódulo con:

git submodule add https://github.com/jpanther/congo.git themes/congo

### 6. Cambio a Hugo Extended

Como Congo lo requiere, se reemplazó Hugo estándar por Hugo Extended.

### 7. Configuración inicial

Se armó un hugo.toml mínimo para dejar el sitio funcionando.

### 8. Corrección de compatibilidad

Apareció un error de compatibilidad entre la versión actual de Hugo y un partial del tema Congo.

La solución aplicada fue anular localmente ese partial creando el archivo layouts/partials/functions/warnings.html vacío, para que el sitio pudiera renderizar.

### 9. Prueba local

Finalmente, el sitio quedó levantado localmente con hugo server -D y accesible en http://localhost:1313/.

Estado actual

El sitio ya funciona localmente.

Los próximos pasos son:

ordenar secciones
definir portada
ajustar navegación
preparar publicación en GitHub
dejar listo el flujo para nuevas notas en Markdown
Cierre

La primera etapa quedó resuelta: ya existe una base funcional, editable localmente y lista para empezar a publicar contenido.