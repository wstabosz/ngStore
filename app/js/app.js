'use strict';


// Declare app level module which depends on filters, and services
angular.module('shopCartApp', ['shopCartApp.filters', 'shopCartApp.services', 'shopCartApp.directives'])

    .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/products', {templateUrl: 'partials/product-list.html', controller: ProductCtrl});
    //$routeProvider.when('/products/:productID', {templateUrl: 'partials/product-detail.html', controller: MyCtrl2});
    $routeProvider.otherwise({redirectTo: '/products'});
  }])


.run(function( $location, $anchorScroll, $routeParams, Product, $rootScope) {

    $rootScope.products = Product.query();

    $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
        $location.hash($routeParams.ID);
        $anchorScroll();
    });
});

