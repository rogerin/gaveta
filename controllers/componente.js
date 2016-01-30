module.exports = function(app){

	var Componente = app.models.componentes;
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
			new Componente({
				nome: req.body.nome,
				quantidade: req.body.quantidade,
				referencia: req.body.referencia,
				descricao: req.body.descricao,
				link_datasheet: req.body.link_datasheet,
				gaveta_nome: '',
				_gaveta: req.body.gaveta
			}).
			save(function(err){
				if(err) { 
					console.log("Erro ao cadastrar: " + err);
					res.send(err);
				}
				else {
					console.log("Cadastrado com sucesso.");
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
				}
			});

			res.redirect('/componente');
		},

		buscaId: function(req,res){
			console.dir(req.params.id);
		}
	}

	return ComponenteController;
}