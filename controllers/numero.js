module.exports = function(app){

	var Numero = app.models.numeros;
	var Gaveta = app.models.gavetas;

	var ComponenteController = {
		listar: function(req,res){
			Numero
			.find()
			//.populate('_gaveta', 'nome') // only return the Persons name
			.exec(function (err, numeros) {
			  if (err) {
			  	console.log(err);
			  	res.send(err);
			  } else {
				  //res.render('componente/listar', { componentes: componentes });
				  res.json(numeros);
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
			let numeros = new Numero();

			let nome_lista 			= req.body.nome_lista;
			let num_lista 			= req.body.num_lista;
			let showgeo_lista 	= req.body.showgeo_lista;
			let latitude_lista 	= req.body.latitude_lista;
			let longitude_lista = req.body.longitude_lista;
			let km_lista 				= req.body.km_lista;

			numeros.nome 	= req.body.nome;
			numeros.num 	= req.body.num;
			numeros.lista = req.body.lista;

			for (let i = 0; i < showgeo_lista.length; i++) {
				numeros.list.push(
					{
						nome: nome_lista[i],
						desc: String,
						num: num_lista[i],
						gps: { lat: latitude_lista[i], lon: longitude_lista[i] },
						showLat: Boolean(showgeo_lista[i]) || false,
						km: km_lista[i]
					}
				)
			}

			//res.json(numeros);

			numeros.save(function(err, results){
				res.redirect('/numeros/listar');
			})



			// new Numero(req.body).
			// save(function(err){
			// 	if(err) {
			// 		console.log("Erro ao cadastrar: " + err);
			// 		res.send(err);
			// 	}
			// 	else {
			// 		res.redirect('/numeros/cadastrar');
			// 	}
			// });


		},

		buscaId: function(req,res){
			console.dir(req.params.id);
		}
	}

	return ComponenteController;
}
