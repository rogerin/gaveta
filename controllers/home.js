module.exports = function(app){

var HomeController = {
	index: function(req,res){
		res.render('index');
		//console.log(app.path);
	}
}
	return HomeController;
}