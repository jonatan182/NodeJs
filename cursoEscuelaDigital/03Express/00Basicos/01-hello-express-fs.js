'use strict';

const express = require('express'),
	app = express();

//cargaremos un archivo estatico en este caso un index.html
app
	.get( '/', (req, res) => res.sendFile(`${__dirname}/index.html`) )//__dirname es una variable global que guarda toda la ruta en donde estamos hasta la raiz del disco duro
	.listen( 3000, () => console.log('Iniciando Express en el puerto 3000') );
