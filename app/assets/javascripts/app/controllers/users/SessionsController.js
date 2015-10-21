app.controller('SessionsController', function($scope, $location, $auth, $q){
    $scope.loginForm = {};

    $scope.$on('auth:login-success', function(ev, resource){
      console.log($auth);
    });
  }
);