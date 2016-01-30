module.exports = function(app){

	var Gaveta = app.models.gavetas;

	var GavetaController = {
		index: function(req,res){
			Gaveta.find(function(err, gavetas){
				if(err) {
					console.log("Erro ao listar gavetas: " + err);
				} else {
					res.render('gaveta/cadastrar', { gavetas: gavetas});
				}
			});
		},
		listar: function(req,res){
			Gaveta.find(function(err, gavetas){
				if(err) {
					console.log("Erro ao listar gavetas: " + err);
				} else {
					res.send(JSON.stringify(gavetas));
				}
			});
		},
		add: function(req,res){
			new Gaveta({
				nome: req.body.nome
			}).
			save(function(err){
				if(err) { console.log("Erro ao cadastrar: " + err); }
				else {
					console.log("Cadastrado com sucesso.");
					console.log("Gaveta: " + req.body.nome );
				}
			});

			res.redirect('/gavetas');
		}
	}

	return GavetaController;
}