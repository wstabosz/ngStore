'use strict';

var app = angular.module('shopCartApp', ['shopCartApp.filters', 'shopCartApp.services', 'shopCartApp.directives']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/products', {templateUrl: 'partials/main.html', controller: ProductCtrl});
    //$routeProvider.when('/products/:productID', {templateUrl: 'partials/product-detail.html', controller: MyCtrl2});
    $routeProvider.otherwise({redirectTo: '/products'});
}]);

app.run(function( $location, $anchorScroll, $routeParams, Product, $rootScope) {

    $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
        //$location.hash($routeParams.ID);
        $anchorScroll();
    });

});


