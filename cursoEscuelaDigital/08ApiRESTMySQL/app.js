'use strict';

const express = require('express'),
	pug = require('pug'),
	bodyParser = require('body-parser'),
	morgan = require('morgan'),
	restFul = require('express-method-override')('_method'),//este modulo de npm nos permite poder utilizar todos los vervos disponibles de http, es decir en vez de estar haciendo puras peticiones get y post vamos hacer get, post, put y delete
	//el metodo '_method' nos sirve para
	//Cuando queremos hacer aplicaciones en express que sean rest, tenemos que eviar en nuestros formularios un campo oculto el cual le indique a express
	//que en vez de hacer una palicacion tipica mediante gest y post, haga una aplicacion rest "get-post-put-delete", el nombre de esa variable puede ser cualquiera
	routes = require('./routes/team-router'),
	favicon = require('serve-favicon')(`${__dirname}/public/favicon.png`),
	publicDir = express.static(`${__dirname}/public`),
	viewDir = `${__dirname}/views`,
	port = (process.env.PORT || 2000);

let app = express();

app
	.set( 'views', viewDir )
	.set( 'view engine', 'pug' )
	.set( 'port', port )

	.use( bodyParser.json() )
	.use( bodyParser.urlencoded({ extended: false }) )
	.use( publicDir )
	.use( favicon )
	.use( morgan('dev') )
	.use( restFul )
	.use( routes );

module.exports = app;
