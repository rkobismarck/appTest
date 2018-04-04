angular.module('website').
config(function ($routeProvider) {
    $routeProvider.
        when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'}).
        otherwise({redirectTo: '/home'});
})

