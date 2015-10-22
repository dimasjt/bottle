app.factory('Products', ['$resource',
  function($resource){
    return {
      all: $resource('/api/products').query(function(data){
        return data
      }),
      one: $resource('/api/products/:productId', { productId: '@id' }),
      new: $resource('/api/products')
    }
  }
]);