'use strict';
//Creamos la Coleccion "Tabla" de nombre team
const mongoose = require('./model'),
	Schema = mongoose.Schema,
	TeamSchema = new Schema({
		_id : Schema.Types.ObjectId,
		name : String,
		twitter : String,
		country : String,
		side : String
	},
	{
		collection : 'team' //nombre de la coleccion "tabla para mysql"
	}),
	Team = mongoose.model('Team', TeamSchema);// Se encarga de hacer la relacion entre el mapeo que acabamos de definir con TeamSchema = new Shema({}); con el nombre de la variable Team 

module.exports = Team;
