'use strict' //Forma Para Realizar Buenas Practicas

const express = require('express')//Para importar express, con require busca en la carpeta node_modules la libreria express
const bodyParser = require('body-parser')//Para importar La libreria body-parser que nos permitira parsear el cuerpo de los datos que nos envian por medio de las peticiones http

//creamos nuestro servidor
const app = express()
const port = process.env.PORT || 2001  //process.env.PORT Es Una Variable De Entorno, si no hay nada allí, la constante tomara el valor de 3000

//añadimos los midleware que creamos al app de express
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json()) //Para poder admitir peticiones con cuerpo de mensajes en formato json

app.listen(port, ()=>{
	console.log(`API REST corriendo en http://localhost:${port}`)
})

