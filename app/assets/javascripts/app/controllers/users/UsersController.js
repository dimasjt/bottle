app.controller('UsersController', ['$scope', '$location', '$mdDialog', '$mdToast',
  function($scope, $location, $mdDialog, $mdToast){
    // login
    $scope.loginForm = {};

    $scope.$on('auth:login-success', function(ev, resource){
      $location.path('/profile');
    });

    $scope.$on('auth:login-error', function(ev, messages){
      $mdToast.show(
        $mdToast.simple().content(messages.errors[0])
      );
    });

    // register
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

    // profile
    $scope.$on('auth:account-update-success', function(ev){
      $mdToast.show(
        $mdToast.simple().content('Your account has been successfully updated!')
      );
    });

    $scope.$on('auth:account-update-error', function(ev, messages){
      $mdToast.show(
        $mdToast.simple().content(messages.errors.full_messages[0])
      );
    });
  }
]);