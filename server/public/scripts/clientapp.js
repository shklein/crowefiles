var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider

  .when('/index', {
    templateUrl: '/views/index.html',
    controller: "HomeController"
  })
  .when('/compare', {
    templateUrl:'/views/compare.html',
    controller: "CompareController"
  })
  
    .otherwise({
      redirectTo: 'index'
    })
}]);
