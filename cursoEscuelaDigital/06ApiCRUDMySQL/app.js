'use strict';

const express = require('express'),
	pug = require('pug'),
	bodyParser = require('body-parser'),
	favicon = require('serve-favicon')(`${__dirname}/public/favicon.png`),
	publicDir = express.static(`${__dirname}/public`),
	viewDir = `${__dirname}/views`,
	port = (process.env.PORT || 3000),
	mysql = require('mysql'),//paquete que permite conectarme a mysql, es como el driver
	myConnection  = require('express-myconnection'),
	dbOptions = {
		host : '192.168.99.100',
		user : 'root',
		password : 'rootpassword',
		port : 3306,
		database : 'indentation_war'
	},
	conn = myConnection(mysql, dbOptions, 'request');//request cierra la conexion automaticamente

let app = express();

//set permite establecer parametros a express, get me permite obtenerlos y use que me permite usarlos
app.set( 'views', viewDir );
app.set( 'view engine', 'pug' );
app.set( 'port', port );

app.use( bodyParser.json() );//para que me permita manipular el envio de informacion
app.use( bodyParser.urlencoded({ extended: false }) );//"me permite que mis formularios puedan estar enviando variablesy entonces node las puede recibir atravez de su atributo name"
app.use( publicDir );//establecemos cual va a ser el directorio publico
app.use( favicon );

app.use( conn );//le decimos que use la coneccion a mysql

//Indicamos las rutas o patch para desplegar mi aplicacion
app.get('/', (req, res, next) => {
	req.getConnection((err, conn) => {
		conn.query('SELECT * FROM team', (error, data) => {
			if (!error) {
				res.render('index', {
					title: 'Indentation War',
					data: data
				});
			}
		});
	});
});

app.get('/agregar', (req, res, next) => {
	res.render('add',{ title: 'Agregar Contacto' });
});

app.post('/', (req, res, next) => {
	req.getConnection((err, conn) => {
		let contacto = {
			id: 0,
			name: req.body.name,
			twitter: req.body.twitter,
			country: req.body.country,
			side: req.body.side
		};

		conn.query('INSERT INTO team SET ?', contacto, (err, data) => {
			if(!err) {
				res.redirect('/');
			} else {
				res.redirect('/agregar');
			}
		});
	});
});

app.get('/editar/:id', (req, res, next) => {
	let id = req.params.id;

	req.getConnection((err, conn) => {
		conn.query('SELECT * FROM team WHERE id = ?', id, (err, data) => {
			if(!err) {
				res.render('edit', {
					title: 'Editar Contacto',
					data: data
				});
			}
		});
	});
});

app.post('/actualizar/:id', (req, res, next) => {
	req.getConnection((err, conn) => {
		let contacto = {
			id:req.body.id,
			name: req.body.name,
			twitter: req.body.twitter,
			country: req.body.country,
			side: req.body.side
		};

		conn.query('UPDATE team SET ? WHERE id = ?', [contacto, contacto.id],(err, data) => {
			if(!err) {
				res.redirect('/');
			} else {
				res.redirect('/editar/:id');
			}
		});
	});
});

app.post('/eliminar/:id', (req, res, next) => {
	req.getConnection((err, conn) => {
		let id = req.params.id;

		conn.query('DELETE FROM team WHERE id = ?', id, (err, data) => {
			if(!err) {
				res.redirect('/');
			} else {
				return next(new Error('Registro no encontrado'));
			}
		});
	});
});

app.use((req, res, next) => {
	let err = new Error();
	err.status = 404;
	err.statusText = 'NOT FOUND';

	res.render('error', {error: err});
});

app.listen( app.get('port'), () => console.log('Iniciando API CRUD Express con MySQL') );
