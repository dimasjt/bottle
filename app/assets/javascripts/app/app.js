var app = angular.module("BottleApp", [
  'templates',
  'ngRoute',
  'ngResource'
]);

// routes
app.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider){

    $routeProvider
      .when('/', {
        templateUrl: 'main/index.html',
        controller: 'MainController'
      })
      .when('/products/:id', {
        templateUrl: 'products/show.html',
        controller: 'ProductController'
      })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
]);