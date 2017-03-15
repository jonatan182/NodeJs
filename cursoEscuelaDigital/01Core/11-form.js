'use strict';

const http = require('http').createServer(webServer), //levantamos servidor http y le asociamos la funcion crear servidor
	form = require('fs').readFileSync('./assets/form.html'),//Para leer de manera asyncrona el contenido  de form.html
	querystring = require('querystring'),//querystring nos permite obtener e ir analizando toda la ruta que tenemos en la barra de direcciones
	util = require('util');//

let dataString = '';

function webServer(req, res) {
	if (req.method  == 'GET') {
		res.writeHead(200, {'Content-Type' : 'text/html'});
		res.end(form);
	}

	if (req.method == 'POST') {
		req
			.on('data', data => dataString += data)//En dataString se va a ir almacenando la informacion del formulario(los datos enviados por post, "text-email") y cuando termine de ejecutarce o de leerlo todo, se ejecuta el evento end
			.on('end', () => {
				let dataObject = querystring.parse(dataString),//dataString esta como buffer, por eso lo parseamos a string con el modulo querystring.parse
					dataJSON = util.inspect(dataObject),//convertimos el el string a objeto gracias al modulo util, util nos brinda de varias utilidades
					//Template html con ecmascript5
					html = `
						<p>Los datos que enviaste por POST como string son: ${dataString}</p>
						<p>Los datos que enviaste por POST como JSON son: ${dataJSON}</p>
					`;

				console.log(html);
				res.end(html);
			});
	}
}

http.listen( 3000, 'localhost', () => console.log('Servidor corriendo en http://localhost:3000/') );
