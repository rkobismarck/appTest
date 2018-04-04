angular.module('website') 
.controller('HomeCtrl', function ($scope,$http,ApiService) {
    $scope.elementos          = undefined;        
    $scope.elementoDetalle    = undefined;
    
    $scope.obtenerElementos = function(){
      ApiService.get("https://jsonplaceholder.typicode.com/posts")
        .success(function(data) {            
          $scope.elementos = data;
        })
        .error(function() {
          console.log('Failed to fetch petition.');
        });
    };

    $scope.obtenerDetalleElemento = function(idPost){
        ApiService.get("https://jsonplaceholder.typicode.com/comments?postId="+idPost)
        .success(function(data) {            
          $scope.elementoDetalle = data;
        })
        .error(function() {
          console.log('Failed to fetch petition.');
        });
    };
    
    $scope.obtenerElementos();
    
})