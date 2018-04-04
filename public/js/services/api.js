angular.module('website') 
.factory('ApiService', function ($http,$q) {
    function get(url){
        return $http.get(url)
        .success(function(data) {
            data = data;
        });
    } 
    return {
        get: get
    }
})

