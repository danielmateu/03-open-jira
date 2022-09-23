# Next.js Open Jira App
Para correr localmente se necesita la DB
``````
docker-compose up -d
``````

* El -d, significa __detached__

* MongoDB URL local:

`````
mongodb://localhost:27017/entriesdb
`````


## Configurar las variables de entorno 

Renombrar el archivo __.env.template__ a __.env__


## Llenar la base de datos con información de pruebas

Llamar a: 

````
http://localhost:3000/api/seed
````
