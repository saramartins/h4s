// create the module and name it scotchApp
  var myApp = angular.module('myApp', ['ngRoute']);

  // configure our routes
  myApp.config(function($routeProvider) {
    $routeProvider

      // route for the home page
      .when('/', {
        templateUrl : 'pages/start.html',
        controller  : 'mainController'
      })

      .when('/results', {
        templateUrl : 'pages/results.html',
        controller  : 'resultsController'
      });

  });
  // create the controller and inject Angular's $scope
  myApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'About me';

  });

    myApp.controller('resultsController', function($scope) {
    // create a message to display in our view
    $scope.message = 'hej';

  });
