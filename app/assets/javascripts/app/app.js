var app = angular.module("BottleApp", [
  'templates',
  'ngRoute',
  'ngResource',
  'ng-token-auth',
  'ngMaterial',
  'ngMdIcons'
]);

// routes
app.config(['$routeProvider', '$locationProvider', '$authProvider',
  function($routeProvider, $locationProvider, $authProvider){
    $authProvider.configure({
      apiUrl:                  '/api',
      tokenValidationPath:     '/auth/validate_token',
      signOutUrl:              '/auth/sign_out',
      emailRegistrationPath:   '/auth',
      accountUpdatePath:       '/auth',
      accountDeletePath:       '/auth',
      confirmationSuccessUrl:  window.location.href,
      passwordResetPath:       '/auth/password',
      passwordUpdatePath:      '/auth/password',
      passwordResetSuccessUrl: window.location.href,
      emailSignInPath:         '/auth/sign_in',
      storage:                 'cookies',
      forceValidateToken:      false,
      validateOnPageLoad:      true,
      proxyIf:                 function() { return false; },
      proxyUrl:                '/proxy',
      omniauthWindowType:      'sameWindow',
      authProviderPaths: {
        facebook: '/auth/facebook'
      },
      tokenFormat: {
        "access-token": "{{ token }}",
        "token-type":   "Bearer",
        "client":       "{{ clientId }}",
        "expiry":       "{{ expiry }}",
        "uid":          "{{ uid }}"
      },
      parseExpiry: function(headers) {
        // convert from UTC ruby (seconds) to UTC js (milliseconds)
        return (parseInt(headers['expiry']) * 1000) || null;
      },
      handleLoginResponse: function(response) {
        return response.data;
      },
      handleAccountUpdateResponse: function(response) {
        return response.data;
      },
      handleTokenValidationResponse: function(response) {
        return response.data;
      }
    });

    $routeProvider
      .when('/', {
        templateUrl: 'main/index.html',
        controller: 'MainController'
      })
      .when('/products/:id', {
        templateUrl: 'products/show.html',
        controller: 'ProductController'
      })
      .when('/login', {
        templateUrl: 'users/login.html',
        controller: 'UsersController'
      })
      .when('/register', {
        templateUrl: 'users/register.html',
        controller: 'UsersController'
      })
      .when('/profile', {
        templateUrl: 'users/profile.html',
        controller: 'UsersController'
      })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
]);