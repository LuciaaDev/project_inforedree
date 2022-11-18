# ${TITULO_O_NOMBRE_DEL_PROYECTO}

`$TODO:` Escribir una breve descripción del proyecto

## Uso

`$TODO:` Describir brevemente el uso principal de la aplicación

## Compilación

`$TODO:` Describir los pasos necesarios para compilar la aplicación. Puede ser tan sencillo como

```bash
$ npm run build
```

## Instalación/Despliegue

`$TODO:` Describir (si aplica) los pasos necesarios para la instalación o despliegue de la aplicación.

## Contribuir

Para el desarrollo de este repositorio se sigue un *workflow* tipo *git-flow* soportado por Bitbucket. Se seguirá la documentación del departamento respecto al desarrollo de código. Se muestra aquí un breve resumen a modo de ejemplo.

Existen dos ramas de larga duración:

* `develop`: donde se integran los nuevos desarrollos que formarán parte de la siguiente versión/ciclo/sprint
* `master`: donde se etiquetan las versiones desplegadas en producción.

Para añadir nuevo código se deberá:

* Crear una incidencia en JIRA (en el proyecto adecuado)
* Crear una rama desde *develop* (`feature/*`, `bugfix/*`) o *master* (`hotfix/*`)
* Programar
* Hacer *commits* incrementales con mensajes de *commit* detallados y legibles, y que **mencionen la incidencia JIRA asociada a este cambio en código**
* Crear una petición de integración *(pull request)* contra *develop* o *master* según corresponda
* Idealmente un responsable de desarrollo revisará y comentará o aprobará el *pull request*
* En general se deberán realizar las pruebas del nuevo código antes de realizar el *merge*
* Las nuevas versiones se podrán preparar en una rama temporal `release/x.y.z...` que salga de *develop* y acabe en *master* tras la realización del *pull request* correspondiente y el paso de las pruebas necesarias.
* Tras el etiquetado de una nueva versión (o parche) en producción, debe hacerse un *merge* de *master* a *develop* para asegurarnos de que en el siguiente ciclo de desarrollo no se pierde nada de lo que haya en producción.

## Versiones

La numeración de las versiones sigue las indicaciones de [SemVer](http://semver.org/)