'use strict';

var app = angular.module('shopCartApp', ['ui.bootstrap','shopCartApp.filters', 'shopCartApp.services', 'shopCartApp.directives','ngGrid']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/products', {templateUrl: 'partials/store-main.html', controller: 'ProductCtrl'});
    $routeProvider.when('/checkout-review', {templateUrl: 'partials/checkout-review.html', controller: 'CheckoutCtrl'});
    $routeProvider.when('/checkout-complete', {templateUrl: 'partials/checkout-complete.html', controller: 'CheckoutCtrl'});
    $routeProvider.otherwise({redirectTo: '/products'});
}]);

app.run(function( $location, $anchorScroll, $routeParams, Product, $rootScope) {

    $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
        //$location.hash($routeParams.ID);
        $anchorScroll();
    });

});


