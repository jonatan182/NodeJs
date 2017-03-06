'use strict';

const express = require('express'),
	app = express();

app
	.get('/', (req, res) => {
		//res.end('<h1>Hola Mundo desde Express.js</h1>');
		res.send('<h1>Hola Mundo desde Express.js</h1>');
	})
	.get('/ed', (req, res) => {
		res.redirect(301, 'http://escuela.digital');
	})
	.get('/json', (req, res) => {
		res.json({
			name: "Jonathan",
			age: 32,
			alias: "jonmircha"
		});
	})
	.get('/render', (req, res) => {
		//no funciona por que hay que configurar el tipoi de views que desplegará express
		res.render(`${__dirname}/index.html`);
	})
	.listen( 3000, () => console.log('Iniciando Express en el puerto 3000') );