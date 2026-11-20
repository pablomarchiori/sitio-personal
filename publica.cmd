@echo off
rem Oculta cada comando mientras se ejecuta; solo muestra los mensajes y resultados.
rem Aisla las variables del script y evita problemas con el caracter ! en los textos.
setlocal EnableExtensions DisableDelayedExpansion
rem Cambia a la carpeta donde esta guardado publica.cmd, aunque lo ejecutes desde otra ubicacion.
cd /d "%~dp0"

rem Publicar cambios del sitio sin sobrescribir cambios remotos.
rem Comprueba que esta carpeta pertenece a un repositorio Git.
rem >nul 2>&1 oculta el resultado normal y los errores de esta comprobacion.
git rev-parse --is-inside-work-tree >nul 2>&1
rem Si la comprobacion anterior falla, salta al mensaje de repositorio no encontrado.
if errorlevel 1 goto no_repo

rem Inicializa la variable que guardara el nombre de la rama activa.
set "BRANCH="
rem Obtiene la rama Git actual y guarda su nombre en BRANCH.
rem Se ocultan los errores de consulta, para tratarlos con el control siguiente.
for /f "delims=" %%B in ('git branch --show-current 2^>nul') do set "BRANCH=%%B"
rem Solo permite publicar desde main. /i hace que la comparacion ignore mayusculas.
if /i not "%BRANCH%"=="main" goto rama_incorrecta

rem Inserta una linea en blanco para separar mensajes en pantalla.
echo.
rem Indica que comienza la revision de cambios locales.
echo === Cambios locales ===
rem Muestra los archivos nuevos, modificados o eliminados en formato resumido.
git status --short
rem Si el comando anterior fallo, corta el proceso para no continuar con errores.
if errorlevel 1 goto error

rem Prepara TODOS los cambios locales para incluirlos en el proximo commit.
git add -A
rem Si el comando anterior fallo, corta el proceso para no continuar con errores.
if errorlevel 1 goto error

rem Comprueba si hay cambios preparados: 0=no hay cambios; 1=si hay; 2 o mas=error.
git diff --cached --quiet
rem Si la comprobacion de cambios devolvio un error, detiene la publicacion.
if errorlevel 2 goto error
rem Si hay cambios preparados, solicita un mensaje y crea un commit.
if errorlevel 1 goto commit
rem Informa que no hace falta otro commit; pueden existir commits previos por publicar.
echo No hay cambios nuevos para un commit.
rem Omite la creacion de commit y continua con la sincronizacion.
goto sincronizar

rem Se ejecuta solo cuando hay archivos preparados para crear un nuevo commit.
:commit
rem Limpia la variable que guardara el mensaje del nuevo commit.
set "MSG="
rem Solicita el texto que describira los cambios del commit.
set /p "MSG=Mensaje del commit: "
rem Impide crear un commit con el mensaje vacio.
if not defined MSG goto mensaje_vacio
rem Registra los cambios preparados en el historial Git local.
git commit -m "%MSG%"
rem Si el comando anterior fallo, corta el proceso para no continuar con errores.
if errorlevel 1 goto error

rem Actualiza el historial local con GitHub antes de intentar el push.
:sincronizar
rem Inserta una linea en blanco para separar mensajes en pantalla.
echo.
rem Indica el inicio de la sincronizacion con la rama remota.
echo === Sincronizando con GitHub ===
rem Descarga los cambios de GitHub y coloca los commits locales encima.
rem Evita el rechazo por "fetch first" y evita crear un commit de merge innecesario.
git pull --rebase origin main
rem Si falla el rebase o aparece un conflicto, se detiene: NO intenta publicar.
if errorlevel 1 goto conflicto

rem Inserta una linea en blanco para separar mensajes en pantalla.
echo.
rem Indica que comenzara la publicacion de los commits locales.
echo === Publicando en GitHub ===
rem Envia los commits de main a GitHub; esto dispara el workflow del sitio.
git push origin main
rem Si el comando anterior fallo, corta el proceso para no continuar con errores.
if errorlevel 1 goto error

rem Inserta una linea en blanco para separar mensajes en pantalla.
echo.
rem Confirma que GitHub acepto el push; no comprueba el resultado de GitHub Actions.
echo Publicacion finalizada correctamente.
rem Mantiene abierta la ventana para poder leer el resultado antes de salir.
pause
rem Finaliza el script indicando exito (codigo 0).
exit /b 0

rem Trata los errores de git pull --rebase sin publicar cambios.
:conflicto
rem Inserta una linea en blanco para separar mensajes en pantalla.
echo.
rem Explica que la sincronizacion fallo y que puede haber conflictos pendientes.
echo ERROR: No se pudo sincronizar automaticamente.
rem Informa como continuar el rebase despues de resolver conflictos.
echo Si hay conflictos, resolvelos y ejecuta: git rebase --continue
rem Informa como cancelar el rebase y volver al estado anterior.
echo Para cancelar la sincronizacion: git rebase --abort
rem Aclara que no se publico nada por el conflicto.
echo NO se hizo git push.
goto error

rem Trata el caso en que el usuario deja vacio el mensaje del commit.
:mensaje_vacio
rem Explica por que no se creo el commit.
echo ERROR: No ingresaste un mensaje para el commit.
goto error

rem Impide operar sobre una rama distinta de main.
:rama_incorrecta
rem Indica que no se permite publicar desde otra rama.
echo ERROR: La rama activa es "%BRANCH%". Se esperaba "main".
goto error

rem Trata el caso en que la carpeta no tiene un repositorio Git.
:no_repo
rem Indica que no se encontro el repositorio esperado.
echo ERROR: No se encontro un repositorio Git en esta carpeta.
goto error

rem Cierra el proceso mostrando que la publicacion no termino correctamente.
:error
rem Inserta una linea en blanco para separar mensajes en pantalla.
echo.
rem Mensaje final comun para los errores.
echo Publicacion detenida. Revisa el error anterior.
rem Mantiene abierta la ventana para poder leer el resultado antes de salir.
pause
rem Finaliza el script indicando error (codigo 1).
exit /b 1
