'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.

angular.module('shopCartApp.services', ['ngResource'])

    .factory('Data', function(Product) {
        var service = {};

        service.Products = Product.query();

        return service;
    })

    .factory('Product', function($resource) {
        return  $resource('products/:productID.json', {}, {
            query: {method: 'GET',params: {productID: 'products'},isArray: true}
        });
    })

    .factory('Cart', function() {
        return {};
    });