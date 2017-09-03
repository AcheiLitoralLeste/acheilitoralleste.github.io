angular.module('app').controller('CompanyController', function($scope, $firebaseArray, $location) {

	var ref = firebase.database().ref();
  $scope.data = $firebaseArray(ref);

  var data = $scope.data;

  $scope.loading = true;

  $scope.categories = [
    {name: 'Academias'},
    {name: 'Bancos'},
    {name: 'Cosméticos'},
    {name: 'Farmácias'},
    {name: 'Mercados'},
    {name: 'Pizzarias'},
    {name: 'Restaurantes'},
    {name: 'Lanchonetes'},
    {name: 'Estéticas'},
    {name: 'Guincho'},
    {name: 'Informática'},
    {name: 'Moda Feminina'},
    {name: 'Moda Masculina'},
    {name: 'Oficinas'},
    {name: 'Pet Shop'},
    {name: 'Padarias'},
    {name: 'Salão de Beleza'},
    {name: 'Segunrança Eletrônica'},
    {name: 'Sorveterias'},
    {name: 'Cursos'},
    {name: 'Borracharias'}
  ];

  data.$loaded()
  .then(function(data) {
  	$scope.loading = false;
  })
  .catch(function(error) {
    console.log("Error:", error);
  });

  $scope.addCompany = function() {
    $scope.data.$add({
      company: $scope.company,
      address: $scope.address,
      bairro: $scope.bairro,
      email: $scope.email,
      tel: $scope.tel,
      category: $scope.category
    });

    // delete $scope.data;
    // $scope.addForm.$setPristine();
    $location.path('/');
  };
});
