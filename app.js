var express = require('express'),
	load = require('express-load'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	app = express();

//mongoose.connect('mongodb://localhost/gaveta', function(err){
mongoose.connect('mongodb://rogerio:yolanda@mongo.onmodulus.net:27017/un3uhoQo', function(err){
	
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

var port = Number(process.env.PORT || 5000);
app.listen(port, function(){
	console.log('Iniciando na porta: ' + port +' ');
});
