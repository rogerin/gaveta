module.exports = function(app){

	var Componente = app.models.numeros;
	var Gaveta = app.models.gavetas;

	var ComponenteController = {
		listar: function(req,res){
			Componente
			.find()
			.populate('_gaveta', 'nome') // only return the Persons name
			.exec(function (err, componentes) {
			  if (err) {
			  	console.log(err);
			  	res.send(err);
			  } else {
				  //res.render('componente/listar', { componentes: componentes });
				  res.json(componentes);
				  //res.end();
			  }
			});
		},
		cadastrar: function(req,res){
			Gaveta.find(function(err, gavetas){
				res.render('componente/cadastrar', { gavetas: gavetas });
			});


		},
		add: function(req,res){

			new Numero(req.body).
			save(function(err){
				if(err) {
					console.log("Erro ao cadastrar: " + err);
					res.send(err);
				}
				else {
					res.redirect('/numeros/cadastrar');
				}
			});


		},

		buscaId: function(req,res){
			console.dir(req.params.id);
		}
	}

	return ComponenteController;
}
