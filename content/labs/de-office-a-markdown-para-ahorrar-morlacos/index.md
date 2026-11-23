---
title: "De Office a Markdown para ahorrar morlacos"
date: 2026-10-25T10:00:00-03:00
draft: false
description: "Convertir carpetas de Word, Excel, PowerPoint y PDF a Markdown con una herramienta gratuita para Windows, y preparar documentación para revisar con una IA."
tags: ["Markdown", "MarkItDown", "PowerShell", "Windows", "inteligencia artificial"]
categories: ["Labs"]
featureAlt: "Ilustración pixel art de una computadora retro que convierte documentos de Office y PDF a Markdown"
---

*Texto original: 25/10/2026. Actualización: 23/11/2026 (revisión editorial y estructura).*

Amigos míos, estamos reunidos aquí hoy para resolver un problema bastante puntual: convertir rápidamente documentos de Word, Excel, PowerPoint y PDF a Markdown, sin pagar un peso y sin tener que procesarlos uno por uno.

Mientras trabajaba en mi Proyecto Final de Carrera se me acumularon documentos, planillas, relevamientos y evidencias en varias carpetas. Uso ChatGPT pago para elaborar el trabajo y Claude Free como segunda opinión, pero los límites de Claude se notan cuando hay mucha documentación y no pensaba sumar otra suscripción. Por eso busqué una forma de preparar los archivos para aprovechar mejor la versión gratuita.

[Saltar la palabrería e ir a la instalación](#descarga)

## ¿Por qué Markdown?

Markdown es un formato de texto plano que permite conservar cierta estructura mediante caracteres sencillos. Un archivo `.md` se puede abrir con el Bloc de notas, no necesita Word ni Excel y suele contener mucho menos material accesorio que un documento de Office.

Al trabajar con una IA, el texto queda accesible directamente, con títulos, listas y tablas que ayudan a conservar su organización. También podemos descartar imágenes incrustadas que no necesitamos analizar y buena parte de los elementos de formato.

Eso no significa que un Markdown siempre consuma menos *tokens* que un DOCX o un PDF, porque depende del contenido y de cómo cada servicio procese los archivos. La ventaja es poder controlar mejor qué información entregamos y quitar lo que no aporta a la revisión.

## De un comando a una herramienta

Probé varias herramientas, entre ellas [Pandoc](https://pandoc.org/), con un script de PowerShell. Funcionaba con distintos formatos, pero no admitía directamente XLSX. Podía exportar cada hoja de Excel a CSV, aunque para la cantidad de planillas que tenía resultaba bastante poco práctico.

Como estaba trabajando con archivos de Office, pensé que la fruta no cae muy lejos del árbol y fui a mirar qué ofrecía Microsoft. Así encontré [Microsoft MarkItDown](https://github.com/microsoft/markitdown), una herramienta de código abierto que admite DOCX, XLSX, PPTX y PDF, entre otros. Como no ofrecía una forma sencilla de convertir carpetas completas con sus subcarpetas, le planteé a ChatGPT armar un script que usara MarkItDown para elegir el origen, recorrerlo y guardar los Markdown en otra ubicación sin perder la estructura.

Durante la marcha surgieron otras necesidades, como excluir carpetas con exportaciones y archivos de trabajo demasiado grandes sin perder las planillas de seguimiento ni los documentos que realmente quería revisar. También acordamos distinguir las salidas según el formato original. Si existían `Informe.docx` e `Informe.pdf`, los resultados debían llamarse `Informe_docx.md` e `Informe_pdf.md`, para evitar sobrescrituras.

ChatGPT también propuso un registro para detectar archivos nuevos o modificados y evitar convertir todo de nuevo. Después agregamos un INI por carpeta, un índice de documentos, avisos para los Markdown demasiado grandes y la posibilidad de generar un ZIP.

La siguiente propuesta de ChatGPT fue usar Windows Forms, una tecnología de .NET que no sabía que se podía aprovechar desde PowerShell. Así armamos el asistente de configuración, las exclusiones, la barra de progreso y el registro de resultados dentro del script, sin Visual Studio. Después incorporamos el menú contextual de Windows y, tras varias pruebas y correcciones, quedó **ConvertirMD**.

## ConvertirMD

La herramienta funciona en Windows y utiliza Python, PowerShell y Microsoft MarkItDown. No requiere servicios pagos ni claves de API. La conversión habitual se realiza localmente, sin enviar los documentos a un servicio externo, y permite procesar tanto carpetas completas como archivos individuales desde el menú contextual del Explorador de Windows.

Al seleccionar una carpeta, busca `convertir-md.ini`. Si no existe, ofrece un asistente para crearlo. Desde allí podemos elegir el destino, los formatos incluidos, las carpetas que queremos excluir y algunas opciones de procesamiento.

Antes de comenzar muestra el trabajo pendiente y durante la conversión informa qué está procesando. Al finalizar presenta los resultados y los errores, si los hubo. Conserva intactos los originales y la estructura de subcarpetas, con nombres como `Documento_docx.md` o `Planilla_xlsx.md`. Desde la versión 1.2 también copia al destino los `.md` existentes en origen, sin modificarlos.

Calcula hashes SHA-256 para saltarse documentos que no cambiaron en ejecuciones posteriores. El resultado incluye un `INDICE.md` y, opcionalmente, un ZIP con los Markdown generados. El ZIP sirve para transportarlos y mantenerlos agrupados; comprimirlos no reduce los tokens que consumirá una IA al leer su contenido.

<span id="descarga"></span>

## Descarga e instalación

[Descargar ConvertirMD 1.2 para Windows](/descargas/ConvertirMD_v1_2.zip)

**Advertencia:** ConvertirMD se entrega tal como está, sin garantías. Aunque está pensado para no tocar los originales, genera archivos en la carpeta de destino y puede sobrescribir conversiones anteriores. Probalo primero con copias y revisá bien las rutas y exclusiones antes de ejecutarlo. Si hacés cagadas, no me hago cargo.

Necesitamos Windows 10 u 11 y Python. Yo usé **Python 3.13 de 64 bits**, descargado de [python.org](https://www.python.org/downloads/windows/). Durante la instalación conviene habilitar el lanzador `py` y agregar Python al `PATH`. En PowerShell, `py --version` nos permite comprobar que quedó instalado.

Descomprimimos ConvertirMD en una carpeta definitiva, abrimos allí PowerShell y ejecutamos:

```powershell
.\Instalar.ps1
```

Si la política de ejecución de Windows lo bloquea, podemos usar:

```powershell
powershell.exe -NoProfile -ExecutionPolicy Bypass -File .\Instalar.ps1
```

El instalador crea un entorno Python independiente en `%LOCALAPPDATA%\ConvertirMD`, instala MarkItDown y sus dependencias y agrega las opciones al menú contextual del Explorador para nuestro usuario. No hace falta instalar MarkItDown por separado ni clonar su repositorio.

Para usarlo en Windows 11, hacemos clic derecho sobre una carpeta, elegimos **Mostrar más opciones → Convertir carpeta a Markdown** y revisamos el análisis antes de empezar. Si falta el INI, aparece el asistente para configurarlo. También existe **Convertir archivo a Markdown**, que guarda el resultado junto al documento individual sin requerir INI.

Guardé los scripts en OneDrive para tenerlos en distintas computadoras. Los archivos se sincronizan, aunque hay que ejecutar la instalación en cada equipo para preparar las dependencias y el menú contextual.

El ZIP incluye un `LEEME.md` con instrucciones más detalladas, actualización y desinstalación. Si aparece un error concreto durante la instalación, también se pueden pasar esas instrucciones a la IA de preferencia para que ayude a resolverlo.

## Algunas limitaciones

MarkItDown extrae contenido, pero no reproduce necesariamente todo lo que aparece en el documento original. Los PDF con diseños complejos pueden perder el orden de lectura. Los documentos escaneados necesitan OCR, que esta herramienta no tiene activado. Los gráficos, diagramas e imágenes tampoco se interpretan automáticamente.

Las planillas de Excel pueden convertirse, pero hay que revisar especialmente las fórmulas, los gráficos y las tablas complejas. Un XLSX con miles de registros puede producir un Markdown enorme y terminar consumiendo mucho contexto.

ConvertirMD sustituye las imágenes incrustadas como cadenas Base64 por un marcador. Esto evita inflar los archivos con grandes bloques de texto codificado, aunque también significa que parte de la información visual no estará disponible para la IA.

Aunque la conversión se realiza localmente, al subir los Markdown a Claude o a cualquier otro servicio de IA estamos compartiendo el contenido con ese proveedor. Conviene revisar qué información enviamos.
