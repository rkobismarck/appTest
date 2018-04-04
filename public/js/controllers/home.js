angular.module('website') 
.controller('HomeCtrl', function ($scope,$http,ApiService) {
    const HTTP_POST = "https://jsonplaceholder.typicode.com/posts";
    const HHTP_DETAIL_POST = "https://jsonplaceholder.typicode.com/comments?postId=";

    $scope.elementos          = undefined;        
    $scope.elementoDetalle    = undefined;
    
    $scope.obtenerElementos = (function(){
      ApiService.get(HTTP_POST)
        .success(function(data) {            
          $scope.elementos = data;
        })
        .error(function() {
          console.log('Failed to fetch petition.');
        });
    }());

    $scope.obtenerDetalleElemento = function(idPost){
        ApiService.get(HHTP_DETAIL_POST+idPost)
        .success(function(data) {            
          $scope.elementoDetalle = data;
        })
        .error(function() {
          console.log('Failed to fetch petition.');
        });
    };
    
    
})