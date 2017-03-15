'use strict';
//Convertimos el anterior codigo a formato ecmascript 6, ya que el anterior estab en ecmasrcipt 5
class Clock {
	constructor() {
		setInterval( () => this.theTime(), 1000 );
	};

	theTime() {
		let date = new Date(),
			hour = date.toLocaleTimeString();

		return console.log(hour);
	};
}

let cucu = new Clock();

//cucu.theTime(); No hace falta llamar a la funcion theTime() por que cuando se instancia la clase llama al constructor, y ese invoca a la funcion theTime cada un segundo '1000'
