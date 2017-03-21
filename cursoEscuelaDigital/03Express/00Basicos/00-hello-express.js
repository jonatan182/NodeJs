'use strict';

const express = require('express'),//implementamos el modulo express
	app = express();//variable con una instancia de express

app
	.get( '/', (req, res) => res.end('<h1>Hola Mundo desde Express.js</h1>') )
	.listen( 8000, () => console.log('Iniciando Express en el puerto 8000') );
