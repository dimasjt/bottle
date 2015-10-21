app.controller('RegistrationsController', function($scope, $location, $mdDialog){
  $scope.registerForm = {};

  $scope.$on('auth:registration-email-success', function(ev, resource){
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('body')))
        .clickOutsideToClose(true)
        .title('Notice')
        .content('A registration email was sent to ' + resource.email)
        .ariaLabel('Notice')
        .ok('OK')
        .targetEvent(ev)
    );

    $scope.registerForm = {};
  });
});