(function startServer(){

var express 	= require('express');
var load 		= require('express-load');
var bodyParser 	= require('body-parser');
var mongoose 	= require('mongoose');
var app 		= express();
var cors 				= require('cors');

//mongoose.connect('mongodb://localhost/gaveta', function(err){
mongoose.connect('mongodb://nonumbers:nonumbers@ds153412.mlab.com:53412/nonumbers', function(err){
	if( err ) {
		console.log("Error conectar mongo db: " + err);
	} else {
		console.log("Conexao realizada com sucesso: " + err);
	}
});

var db = mongoose.connect;

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(cors());


load('models').then('controllers').then('routes').into(app);


/*
'facebookAuth': {
		'clientID'		: '778132408886946',
		'clientSecret'	: 'eed11591981726de7b457d652ec4c463',
		'callbackURL'	: 'http://localhost:5000/'
	}
*/

//var port = Number(process.env.PORT || 5001);
// app.listen(3000, function(){
// //	console.log('Iniciando na porta: ' + port +' ');
// });

app.listen(process.env.PORT || 3001, function(){
  console.log('listening on 3001');
});


})();
