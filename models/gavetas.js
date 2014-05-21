module.exports = function(app){
	var mongoose = require('mongoose');

	var Schema = mongoose.Schema;

	var gaveta = new Schema({
		nome: String,
		created_at: {type: Date, default: Date.now}
	});

	return mongoose.model('Gavetas', gaveta);
}