angular.module('myDirectives', [])
// .directive('uiHeader', function() {

// 	var ddo = {};

// 	ddo.restrict = 'A';
// 	ddo.templateUrl = 'partials/header.html';

//   ddo.link = function ($location, $rootScope, $scope) {
//     $rootScope.$on('$routeChangeSuccess', function (event, current) {
//       if (current && current.$$route.originalPath === '/') {
//         $scope.isInnerJob = false;
//         console.log('false');
//       }
//       else {
//         console.log('true');
//         $scope.isInnerJob = true;
//       }
//     });
//   }

// 	return ddo;

// })
.directive('uiLoad', function() {
  var ddo = {};

  ddo.restrict = 'A';
  ddo.templateUrl = 'partials/loading.html';

  function controller($scope) {
    $scope.$watch('loading', function (val) {
      if (val) {
        $scope.loading = true;
      }
      else {
        $scope.loading = false;
      }
    });
  }

  return ddo;
});
