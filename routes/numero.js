module.exports = function(app){
	var numero = app.controllers.numero;

	app.route('/numeros')
	.get(numero.listar)
	.post(numero.add);
	app.route('/numeros/cadastrar')
	.get(numero.cadastrar);

	app.route('/api/numeros')
	.get(numero.listar);

	app.route('/api/componente/cadastrar')
	.post(numero.add);


	app.route('/numeros/:id')
	.get(numero.buscaId)

}
