'use strict';

const http = require('http').createServer(webServer),
	fs = require('fs'),
	index = fs.createReadStream('./assets/index.html');

function webServer(req, res) {
	res.writeHead(200, {'Content-Type':'text/html'});
	index.pipe(res);//pipe permite enviar y recibir informacion atravez de streams, estamos diciendo que lo que esta guardado en la variable index que es un archivo quiero que lo mandes a la respuesta 'res'
}

http.listen( 3000, 'localhost', () => console.log('Servidor corriendo en http://localhost:3000/') );
