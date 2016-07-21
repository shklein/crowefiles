var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider

  .when('/compare', {
    templateUrl:'/views/compare.html',
    controller: "CompareController"
  })

    .otherwise({
      redirectTo: 'compare'
    })
}]);
