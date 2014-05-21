module.exports = function(app){
	var componente = app.controllers.componente;

	app.route('/componente')
	.get(componente.listar)
	.post(componente.add);

	app.route('/componente/cadastrar')
	.get(componente.cadastrar);


}