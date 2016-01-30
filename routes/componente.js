module.exports = function(app){
	var componente = app.controllers.componente;

	app.route('/componente')
	.get(componente.listar)
	.post(componente.add);
	app.route('/componente/cadastrar')
	.get(componente.cadastrar);

	app.route('/api/componentes')
	.get(componente.listar);

	app.route('/api/componente/cadastrar')
	.post(componente.add);


	app.route('/componente/:id')
	.get(componente.buscaId)

}