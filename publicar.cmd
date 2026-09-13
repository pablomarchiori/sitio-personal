@echo off
set /p msg=Mensaje del commit: 

git add .
git status
git commit -m "%msg%"

if errorlevel 1 (
    echo.
    echo No se hizo el commit. No se ejecuta git push.
    pause
    exit /b 1
)

git push

pause