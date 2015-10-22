app.controller('MainController', ['$scope', '$location', 'Products',
  function($scope, $location, Products){
    $scope.products = Products.all;

    $scope.view = function(id){
      return $location.path("/products/"+ id);
    }

    $scope.newProduct = {};

    $scope.createProduct = function(product){
      Products.new.save(product, function(data){
        
      });
    }
  }
]);