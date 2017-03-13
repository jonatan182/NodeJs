'use strict';

const http = require('http').createServer();//Solo quiero el metodo del modulo http createServer

function webServer(req, res) {
	res.writeHead(200, {'Content-Type':'text/html'});
	res.end('<h1>Hola Node.js en la web como emisor de eventos</h1>');
}

http//es un emisor de ventos
	.on( 'request', webServer )//eventos
	.on( 'error', err => console.log('Ocurrió un error: ', err.message) )
	.listen( 3000, 'localhost', () => console.log('Servidor corriendo en http://localhost:3000/') );
