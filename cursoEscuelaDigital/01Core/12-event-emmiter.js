'use strict';

const EventEmitter = require('events').EventEmitter, //importamos o requerimos el modulo de los events, particularmente la clase EvenEmitter para crear eventos
	ee = new EventEmitter();//creamos variable y la inicializamos como objeto de EventEmitter

ee
	.on( 'myevent', message => console.log(message) )//ejecutamos el metodo on, nos inventamos un evento de nombre myevent, y enviamos un message
	.once( 'myevent', message => console.log(`Se emite la primera vez: ${message}`) );//once nos permite lanzar solamente una vez un evento en particular

ee.emit('myevent', 'Soy un emisor de eventos');//estamos diciendo que en el evento myevent voy a emitir el mensage de Soy un emisor de eventos
ee.emit('myevent', 'Volviendo a emitir');
ee.removeAllListeners('myevent');//Para aliminar las emiciones del evento myevent, es decir que no se ejecuta el de abajo
ee.emit('myevent', 'Volviendo a emitir por tercera vez');
