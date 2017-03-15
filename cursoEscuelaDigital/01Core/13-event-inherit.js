'use strict';

const EventEmitter = require('events').EventEmitter,
	inherits = require('util').inherits;//contante que tiene la utilidad inherits

function Clock() {
	setInterval( () => this.emit('tictac'), 1000 );
}

inherits(Clock, EventEmitter);//La funcion es la clase hija, y esta va a heredar de EventEmitter "padre". Asi Se aplica la heriencia en nodejs "public class Clock extends EventEmitter{}"

Clock.prototype.theTime = function () {
	let date = new Date(),//creamos objeto Date
		hour = date.toLocaleTimeString();//toLocaleTimeString permite mandarme en un formato entendible el tiempo actual "local" en una cadena

	console.log(hour);
};

let cucu = new Clock();//creamos un objeto Clock

cucu.on('tictac', () => {
	cucu.theTime();
});
