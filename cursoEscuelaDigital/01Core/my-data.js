'use strict';

let name = 'Jonathan',
	email = 'jonmircha@gmail.com',
	_phone = '5215518388261';//forma de indicar que esta variable queremos que sea privada nodejs

module.exports.name = name;
module.exports.email = email;
//module.exports._phone = _phone; //no la publicamos por que queremos que sea privada
