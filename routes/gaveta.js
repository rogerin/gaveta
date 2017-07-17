module.exports = function(app){
	var gaveta = app.controllers.gaveta;

	app.route('/gavetas')
		.get(gaveta.listar)
		.post(gaveta.add);
}
