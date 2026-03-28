---
title: "Instalación del sitio personal con Hugo en Windows"
date: 2026-03-27T21:55:00-03:00
draft: false
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
- renegar un poco con casos practicos para aprender tecnologia

## Entorno usado

- Windows 
- Hugo Extended
- Git for Windows 
- tema Congo
- Asistente Chatgpt 5.4 thinking (y algo de Gemini)

## Proceso realizado

### 1. Instalación de Hugo

Descargué Hugo para Windows, se dejó el ejecutable en una carpeta local y ya lo agregué al `PATH`.
Luego se verificamos con:

hugo version

### 2. Instalación de Git

Instaló Git for Windows y se verificó con el comando git --version.
(usé bash primero pero me canso el copiar y pegar, y me pasé a CMD)

### 3. Creación del proyecto

Se creó el proyecto con el comando hugo new project sitio-personal.

Luego se inicializó Git dentro del proyecto con git init.

### 4. Elección del tema
Despues de una discución entre Gemini, chatgpt y yo de arbitro (se pusieron heavy)  quedamos en usar Congo como tema
 priorizando equilibrio entre:

sobriedad
flexibilidad
soporte para notas, imágenes y esquemas
mantenimiento razonable

###5. Instalación del tema

Agtegamos / agregué como submódulo con:

git submodule add https://github.com/jpanther/congo.git themes/congo

### 6. Cambio a Hugo Extended

primer contrariedad: Como Congo lo requiere, se reemplazó Hugo estándar por Hugo Extended.

### 7. Configuración inicial

Se armó un hugo.toml mínimo para dejar el sitio funcionando.

### 8. Corrección de compatibilidad

Segunda contrariedad: Apareció un error de compatibilidad entre la versión actual de Hugo y un partial del tema Congo.

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