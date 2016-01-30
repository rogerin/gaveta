
function listCompoenteController($scope, $http,$location) {
	$scope.componentes = [];
  $http({method: 'GET', url: '/componente'}).
    success(function(data, status, headers, config) {
    $scope.componentes = data;
  }).
    error(function(data, status, headers, config) {
    console.log(status);
  });

    $scope.visualizar = function(comp) {
      console.dir(comp);
    }

    $scope.editar = function(comp) {
      $location.search(comp).path('/componente/editar'); 
    }

    $scope.deletar = function(comp) {
      console.dir(comp);
    }
}

function editarComponenteController($scope,$http,$location){
	$scope.componente = $location.search();
	console.dir($scope.componente);
	$http({method: 'GET', url: '/gavetas/'}).
		success(function(data, status, headers, config) {
		console.dir(config);
		$scope.gavetas = data;
	}).
	error(function(data, status, headers, config) {
		console.log(status);
	});

}

function cadastrarCompoenteController($scope,$http,$location) {
  console.log("Cadastrar componente");
  $scope.gavetas = [];
  $scope.componente = {};
  $http({method: 'GET', url: '/gavetas'}).
    success(function(data, status, headers, config) {
      console.dir(config);
      $scope.gavetas = data;
  }).
    error(function(data, status, headers, config) {
      console.log(status);
    });

    $scope.cadastrarComponente = function(){
      $http.post('/api/componente/cadastrar', $scope.componente)
      .success(function(data) {
        $scope.componente = {}; // clear the form so our user is ready to enter another
        //$scope.todos = data;
         $location.path('/componentes');
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
    }
}

function indexController($scope) {
  console.log("estou na index");
}
