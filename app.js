(function startServer(){

var express 	= require('express');
var load 		= require('express-load');
var bodyParser 	= require('body-parser');
var mongoose 	= require('mongoose');
var app 		= express();

mongoose.connect('mongodb://localhost/gaveta', function(err){
//mongoose.connect('mongodb://rogerio:yolanda@mongo.onmodulus.net:27017/un3uhoQo', function(err){
	if( err ) {
		console.log("Error conectar mongo db: " + err);
	} else {
		console.log("Conexao realizada com sucesso: " + err);
	}
});

var db = mongoose.connect;

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));


load('models').then('controllers').then('routes').into(app);


/*
'facebookAuth': {
		'clientID'		: '778132408886946',
		'clientSecret'	: 'eed11591981726de7b457d652ec4c463',
		'callbackURL'	: 'http://localhost:5000/'
	}
*/

//var port = Number(process.env.PORT || 5001);
app.listen(1000, function(){
//	console.log('Iniciando na porta: ' + port +' ');
});


})();