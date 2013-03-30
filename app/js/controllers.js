'use strict';

/* Controllers */

function ProductCtrl($scope, $routeParams, $rootScope, Product, Cart) {

    $scope.products =  $rootScope.products;

    var indexedCategories = [];

    $scope.productsToFilter = function() {
        indexedCategories = [];
        return $scope.products;
    };

    $scope.filterCategories = function(product) {
        var isCategoryNew = (indexedCategories.indexOf(product.category) == -1);
        if (isCategoryNew ) {
            indexedCategories.push(product.category);
        }
        return isCategoryNew;
    }

    $scope.removeFromCart = function(product) {
        product.quantity = null;
    };

    $scope.emptyCart = function() {
        _.each($scope.products, function(e,k,l) {
            e.quantity = null;
        });
    };

    $scope.hasQuantity = function(product) {
        return (product.quantity || 0) > 0;
    };

    $scope.itemQuantityTotal = function() {
        var result = _.reduce($scope.products, function(memo, product) { return memo + (product.quantity || 0);},0);
        return result;
    };

    $scope.itemPriceTotal = function() {
        var result = _.reduce($scope.products,
            function(memo, product) {
                return memo + ((product.quantity || 0) * product.price);
            },0);
        result = result.formatMoney(2,'.',',');
        return result;
    }

    $scope.isCartEmpty = function() {
        return ($scope.itemQuantityTotal() == 0);
    }

}

ProductCtrl.$inject = ['$scope', '$routeParams', '$rootScope', 'Product', '$anchorScroll'];

//////////////////////////////////////////////////////////////////////

function CartCtrl($scope, $rootScope) {

    $scope.items = [];

    $scope.addItem(product);

}

CartCtrl.$inject = ['$scope','$rootScope'];

