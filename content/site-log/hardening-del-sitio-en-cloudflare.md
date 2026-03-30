---
title: "Hardening básico del sitio en Cloudflare: de F a A en SecurityHeaders"
date: 2026-03-30T10:45:00-03:00
draft: false
description: "Cómo mejoré la postura de seguridad del sitio desde Cloudflare, qué hace cada header y por qué esto va bastante más allá de tener HTTPS."
tags: ["cloudflare", "security", "headers", "https", "csp", "hsts", "hardening"]
categories: ["Site Log"]
---

El sitio funcionaba bien, tenía HTTPS y respondía sin problemas, pero al pasarlo por [SecurityHeaders](https://securityheaders.com/?q=marchiori.ar&followRedirects=on) la nota era **F**.

Eso fue interesante porque el sitio, a simple vista, parecía estar bien: cargaba normal, tenía HTTPS y mostraba el “candado” del navegador.  
Pero hoy eso ya no alcanza. Además del certificado, se esperan otras capas de protección, y en este caso la **postura de seguridad del lado del navegador** todavía era débil.

En otras palabras: una cosa es que el sitio cargue, y otra bastante distinta es que tenga una configuración de seguridad sólida.


## ¿Qué implica que un sitio dé F?

Que un sitio obtenga una **F** en un scanner de headers no significa automáticamente que esté comprometido ni que tenga una vulnerabilidad crítica explotable.

Lo que sí indica, en general, es una **postura débil de seguridad del lado del navegador**.

Eso incluye cosas como:

- no forzar correctamente HTTPS
- no usar HSTS
- no limitar framing
- no controlar MIME sniffing
- no restringir capacidades del navegador
- no definir una política de contenido razonable

En resumen: el sitio puede funcionar bien y aun así estar flojo desde el punto de vista de hardening.

---

## El “hardening”

**Hardening** es **mejorar la seguridad técnica de un sistema** para reducir su superficie de ataque, limitar comportamientos inseguros por defecto y agregar capas de protección que disminuyan riesgos ante errores, abusos o ataques.

Dicho más simple: no se trata solo de que algo funcione, sino de que funcione con menos exposición innecesaria.

---

## El punto de partida

El reporte marcaba faltantes bastante claros:

- `Strict-Transport-Security`
- `Content-Security-Policy`
- `X-Frame-Options`
- `X-Content-Type-Options`
- `Referrer-Policy`
- `Permissions-Policy`

Eso no implicaba necesariamente una vulnerabilidad crítica explotable ni un sitio “roto”, pero sí mostraba una configuración incompleta de headers de seguridad.

---

## Qué se hizo

Como el sitio está detrás de **Cloudflare**, la mejora se pudo hacer desde ahí, sin tocar Hugo ni el contenido del sitio.

Los cambios fueron estos:

1. **Always Use HTTPS**
2. **HSTS**
3. **Minimum TLS Version = 1.2**
4. **Managed Transform: Add security headers**
5. Reglas manuales para:
   - `Permissions-Policy`
   - `Content-Security-Policy`

---

## Qué hace cada switch y cada encabezado

### 1. Always Use HTTPS

Fuerza la redirección de `http://` a `https://`.

Es una capa básica, pero importante. El sitio ya respondía por HTTPS, pero con esto se evita que el acceso quede librado a si el usuario escribió bien la URL o a que primero entre por HTTP.


### 2. HSTS

**HSTS (HTTP Strict Transport Security)** es un header de seguridad que le indica al navegador que ese dominio debe abrirse únicamente por **HTTPS** durante un período determinado (`max-age`), evitando que vuelva a intentar conexiones por **HTTP**.

Para empezar, se configuró de forma prudente:

- **Max Age:** 1 mes
- **includeSubDomains:** apagado
- **Preload:** apagado

La idea fue mejorar seguridad sin dejar una política demasiado agresiva desde el primer paso.


### 3. Minimum TLS Version = 1.2

Se subió la versión mínima de TLS a **1.2**.

Esto elimina compatibilidad con versiones viejas del protocolo que hoy ya no conviene mantener habilitadas salvo que exista una necesidad muy puntual.


### 4. Managed Transform: Add security headers

Cloudflare tiene un transform administrado que agrega varios headers comunes sin necesidad de armarlos uno por uno.

Eso resolvió parte del trabajo más básico de hardening sin tener que bajar al detalle desde el principio.


### 5. `X-Frame-Options`

Este header ayuda a evitar que el sitio sea cargado dentro de un `frame` o `iframe` de terceros.

Su utilidad principal es mitigar escenarios de **clickjacking**, donde una página legítima puede ser embebida por otra con fines engañosos.


### 6. `X-Content-Type-Options: nosniff`

Le indica al navegador que no reinterprete un archivo o una respuesta como si fuera de otro tipo distinto del declarado por el servidor.

Por ejemplo: si el servidor dice “esto es una imagen” o “esto es un archivo CSS”, el navegador debe tratarlo como eso y no intentar adivinar otra cosa por su cuenta.

Sirve para reducir riesgos asociados a contenido mal servido o mal identificado.


### 7. `Referrer-Policy`

Controla cuánta información de la página de origen envía el navegador cuando el usuario sigue un enlace o carga un recurso hacia otro destino.

Por ejemplo: si alguien está en `https://marchiori.ar/notas/hardening-cloudflare/?origen=linkedin` y desde ahí sale a otro sitio, según la política configurada el navegador puede enviar la URL completa, solo el dominio de origen o directamente no enviar nada.

No cambia cómo se ve el sitio, pero sí permite limitar qué información de navegación se expone hacia afuera.


### 8. `Permissions-Policy`

Permite negar o limitar APIs del navegador como:

- cámara
- micrófono
- geolocalización
- pago
- sensores

En un sitio estático como este, muchas de esas capacidades no tienen ningún sentido. Justamente por eso conviene dejarlas explícitamente deshabilitadas.


### 9. `Content-Security-Policy` (CSP)

La **CSP** define qué recursos puede cargar el navegador y desde dónde: scripts, estilos, imágenes, fuentes, conexiones, etc.

Es una de las capas más potentes para endurecer un sitio web, pero también una de las más fáciles de romper si se la configura mal.

La política aplicada fue **prudente, no máxima**. La idea fue mejorar seguridad sin bloquear de entrada recursos legítimos del sitio.

Y acá apareció algo valioso: **si algo se rompe, casi siempre la consola del navegador lo muestra con mensajes del tipo `Refused to load...`**, indicando qué origen faltó autorizar o qué directiva bloqueó el recurso. Esa es la forma normal de ajustar una CSP: no a ciegas, sino en base a evidencia concreta.

La parte más útil de este ajuste no fue improvisar hasta que algo funcionara, sino entender qué herramientas usar y qué mirar en cada capa. En seguridad web, avanzar a ciegas no sirve: una política no “va a salir a bailar” por más que uno le insista. Hace falta criterio, validación y señales concretas para ajustar cada cosa donde corresponde.

---

## El resultado

Después de aplicar esos cambios, el sitio pasó de **F** a **A** en SecurityHeaders.

No cambió el contenido del sitio.  
No cambió el diseño.  
No cambió Hugo.  

Lo que cambió fue el **endurecimiento de la respuesta HTTP**.

---

## La advertencia que quedó

El reporte quedó en **A**, pero con una advertencia.

La CSP actual contiene una configuración prudente que todavía no busca ser la más estricta posible. En este caso, la prioridad fue lograr una mejora real, estable y sin romper la carga del sitio.

Eso deja una segunda etapa posible: endurecer más la CSP si en algún momento vale la pena ajustar scripts inline, hashes, nonces o dependencias externas con más detalle.

O sea: no quedó “perfecto”, pero sí **mucho mejor endurecido** y con el próximo paso claramente identificado.

---

## ¿Y si no tuviera Cloudflare?

En este caso, resolverlo desde Cloudflare simplificó bastante el trabajo porque muchas políticas se pudieron aplicar en el **edge de Cloudflare**, o sea, en la capa intermedia desde la que Cloudflare publica y protege el sitio antes de llegar al servidor de origen, sin tocar la publicación del sitio.

Si el mismo sitio estuviera publicado directamente sobre un **IIS en una vCloud**, la lógica sería la misma, pero la implementación cambiaría de lugar:

- el certificado HTTPS y su binding quedarían en IIS
- la redirección de HTTP a HTTPS se haría en IIS o en el balanceador
- HSTS se configuraría en IIS
- los demás headers se agregarían como custom response headers o desde el proxy inverso
- cualquier ajuste fino de CSP dependería mucho más de cómo esté armada la aplicación

O sea: no cambia la necesidad, cambia **dónde** se resuelve.

Con Cloudflare fue más rápido y limpio.  
Sin Cloudflare, se puede hacer igual, pero con más trabajo sobre el servidor, el hosting y, muchas veces, la propia aplicación.

---

## Infraestructura, desarrollo y especialización

Aunque esta mejora se aplicó desde infraestructura, mantener un sitio realmente seguro no es una tarea que pueda sostenerse solo desde ese lado.

Para hacerlo bien, hace falta trabajo conjunto con **desarrollo**.

La razón es bastante clara: hoy las capas de seguridad web no pasan solo por un certificado o un redirect. También dependen de cómo está construida la aplicación, si usa scripts inline, qué recursos externos carga, cómo administra dependencias, qué contenido se publica y cómo se despliega.

Y ahí aparece un contraste bastante real en IT: en el mismo día uno puede pasar de asistir a un usuario con un cambio de contraseña a hacer hardening sobre un sitio web. Cada vez se agregan más capas, más exigencia técnica y más necesidad de especialización, pero la realidad operativa muchas veces obliga a saltar de soporte básico a tareas de seguridad web bastante más finas sin transición alguna.

---

## La parte más práctica que me dejó esto

Más allá del resultado puntual, lo más valioso del proceso fue el aprendizaje que dejó: meterse de lleno en un aspecto de seguridad web que muchas veces se deja de lado, se posterga o queda para el final.

Porque una vez que HTTPS ya está funcionando, aparece otra capa de trabajo menos visible pero igual de importante: headers, políticas, compatibilidad TLS, restricciones del navegador, validaciones externas y ajustes finos para reforzar la publicación sin afectar el funcionamiento normal del sitio.

Ahí es donde empieza la parte más interesante.

---

## El rol de la IA en todo esto

También hubo algo bastante concreto: **sin asistencia de IA, este proceso habría sido mucho más largo y tedioso**.

No porque la IA reemplace la validación real ni las pruebas, sino porque me aceleró muchísimo el recorrido inicial.

Me ayudó a identificar qué headers convenía mirar primero, a ordenar mejor la secuencia de implementación, a llegar más rápido a una CSP razonable y a no perder horas entre documentación dispersa o pruebas mal enfocadas.

Después hubo que revisar, probar y validar igual. Pero como acelerador de contexto y de camino inicial, la diferencia fue muy clara.

También dejó algo práctico: una vez hecho todo el proceso, la publicación de referencia se vuelve mucho más clara y la documentación sale bastante más rápido. De hecho, después de recorrerlo, documentarlo termina siendo mucho más ágil que intentar armar todo manualmente desde cero.

---

## Cierre

El sitio pasó de **F** a **A** en SecurityHeaders con una serie de cambios que no tocaron el contenido, pero sí mejoraron de forma concreta su postura de seguridad.

Más importante que la nota final fue el proceso: entender qué hace cada encabezado, cómo se aplica una política prudente sin romper el sitio y por qué hoy el hardening web exige bastante más criterio que simplemente activar HTTPS y darlo por terminado.