app.controller('ProductController', ['$scope', '$routeParams', '$location', 'Products',
  function($scope, $routeParams, $location, Products){
    $scope.product = Products.one.get({productId: $routeParams.id}, function(data){
      return data;
    });
  }
]);