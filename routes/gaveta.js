module.exports = function(app){
	var gaveta = app.controllers.gaveta;

	app.route('/gavetas')
	.get(gaveta.index)
	.post(gaveta.add);
}