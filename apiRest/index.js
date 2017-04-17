'use strict' //Ejecuta El Codigo JavaScript En "Modo Esctricto" Forma Para Realizar Buenas Practicas, Tambien Nos Sirve Para Utilizar Ecma Scripts6.  !La directiva "use strict" sólo se registran en el comienzo de un script o una función¡

const express = require('express')//Para importar express, con require busca en la carpeta node_modules la libreria express
const bodyParser = require('body-parser')//Para importar La libreria body-parser que nos permitira parsear el cuerpo de los datos que nos envian por medio de las peticiones http

//creamos nuestro servidor
const app = express()
const port = process.env.PORT || 2002  //process.env.PORT Es Una Variable De Entorno, si no hay nada allí, la constante tomara el valor de 2002

//añadimos los midleware que creamos al app de express
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json()) //Para poder admitir peticiones con cuerpo de mensajes en formato json

//Añadimos Las Escuchas o Peticiones Que Se Hacen A Nuestra Api Rest
app.get('/saludo', (req, res)=>{//El primer parametro es el patch "url", el segundo parametro es la callback
	res.send({ message: 'Hola Jonatan'});
	res.end();
});

//Peticion get con parametros
app.get('/saludo/:name', (req, res)=>{//req.params: Para Ingresar A los Parametros get, que son los que que vienen en la url
	res.send({ message: `Buenos Dias: ${req.params.name}!`}); //imprimimos en formato json un mensaje, con la concatenacion del parametro name
});

app.post('/ingresar', (req, res)=>{//req.body: Para Ingresar A los Parametros post, que son los que que vienen en el cuerpo de la peticion http
	res.send({message: `${req.body.name}`});
});

//**************************************************Aplicacion Crud  EJemplo********************************************************//
app.get('/api/product', (req, res)=>{

});

app.get('/api/product/:productId', (req, res)=>{

});

app.post('/api/product', (req, res)=>{

});

app.put('/api/product/:productId', (req, res)=>{

});

app.delete('/api/product/:productId', (req, res)=>{

});

app.listen(port, ()=>{
	console.log(`API REST corriendo en http://localhost:${port}`)
});
