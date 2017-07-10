module.exports = function(app){
	var mongoose = require('mongoose');

	var Schema = mongoose.Schema;
	var ObjectId = mongoose.Schema.Types.ObjectId;
	var numero = new Schema({
		nome: String,
		desc: String,
		num: String,
		list: [
			{
				nome: String,
				desc: String,
				num: String,
				gps: { lat: String, lon: String },
				km: String,
				showLat: Boolean
			}
		],
		lista: Boolean,
		showLat: Boolean,
		//_gaveta: { type: ObjectId, ref: 'Gavetas' },
		created_at: {type: Date, default: Date.now}
	});

	return mongoose.model('Numeros', numero);
}
