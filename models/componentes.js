module.exports = function(app){
	var mongoose = require('mongoose');

	var Schema = mongoose.Schema;
	var ObjectId = mongoose.Schema.Types.ObjectId;
	var componente = new Schema({
		nome: String,
		quantidade: String,
		referencia: String,
		descricao: String,
		link_datasheet: String,
		gaveta_nome: String,
		_gaveta: { type: ObjectId, ref: 'Gavetas' },
		created_at: {type: Date, default: Date.now}
	});

	return mongoose.model('Componentes', componente);
}