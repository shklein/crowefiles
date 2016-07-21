myApp.controller('CompareController', ['$scope', '$http', function($scope, $http) {

  console.log('compare controller running');


var key = '&api_key=d6a31734ac6f3e40367ee50308f299ad';
var baseURL = 'http://api.themoviedb.org/3/search/person?query=';

getCrowe();


function getCrowe() {
  var crowe = 'russell crowe';
  var credits = '/movie_credits/'
  var query = baseURL + crowe + credits + key;
    console.log(query);


    $http.jsonp(query).then(
      function(response) {
        console.log(response.data);
        $scope.crowe = response.data;
      }
    )
  }

  }]);
