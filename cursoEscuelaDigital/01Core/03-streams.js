/*
	Streams
		'Chorros' de información que se transmiten en 'Pedazos' (Chunks)
		3 tipos: Lectura / Escritura / Duplex
		Instancias de EventEmitter
		Acceso asíncrono
		Es raro crear streams directamente
		Pero muchos recursos nos ofrecen este interfaz
		Detrás de muchos mecanismos de Node.JS
			stdin/stdout
			request de HTTP
			Sockets
			Manipulación de ficheros/imágenes
*/

'use strict';

const fs = require('fs');

let readStream = fs.createReadStream('./assets/nombres.txt'),
	writeStream = fs.createWriteStream('./assets/nombres_copia.txt');

readStream.pipe(writeStream);//Para copiar el contenido de readStream "nombre.txt" en writeStream

readStream//Para imprimir el data del stream
	.on( 'data', chunk => {
		console.log(chunk);
		console.log( chunk.toString() );//Chunks Es La trama De Informacion, Los Stream Son Las Vias De Los Carriles, los carros son los Chunks
		console.log('He leído:', chunk.length, 'caracteres');
	} )
	.on( 'end', () => console.log('Terminé de leer el archivo') )//Si salio bien  imprime por con sola 'Termine de leer el archivo'
	.on( 'error', error => console.log('Ocurrió un error: ', error.message) );// Si sale error imiprime 'Ocurrio un error'
