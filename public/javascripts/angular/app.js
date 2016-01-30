var app = angular.module('gaveta', ['ngRoute']);

app.config(function($routeProvider,$locationProvider) {
	$routeProvider.
	when('/componentes', {
    controller: listCompoenteController, 
    templateUrl: '/app/componente/listar.html'
  }).
  when('/componente/cadastrar', {
    controller: cadastrarCompoenteController, 
    templateUrl: '/app/componente/cadastrar.html'
  }).
	when('/componente/editar', {
    controller: editarComponenteController,
		templateUrl: '/app/componente/editar.html'
	}).
	when('/', {
		controller: indexController, 
		templateUrl: '/home.html'
	})
	.otherwise({redirectTo:'/'});	

  $locationProvider.html5Mode(true);
});

