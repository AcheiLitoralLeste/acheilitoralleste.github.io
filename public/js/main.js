angular.module('app', ['firebase', 'ngRoute', 'myDirectives', 'ngMask'])
  .config(function($routeProvider, $locationProvider) {

    // $locationProvider.html5Mode(true);

    $routeProvider.when('/', {
      templateUrl: 'partials/list.html',
      controller: 'CompanyController'
    });

    $routeProvider.when('/add', {
      templateUrl: 'partials/add.html',
      controller: 'CompanyController'
    });

    $routeProvider.otherwise({redirectTo: '/'});
});
