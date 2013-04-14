'use strict';

var x;
/* Controllers */

function ProductCtrl($scope, $routeParams, Product, Cart) {

    x = $scope;

    $scope.products =  Product.products();
    $scope.categories = Product.categories;

    $scope.itemQuantityTotal = Cart.itemQuantityTotal;
    $scope.itemPriceTotal = Cart.itemPriceTotal;
    $scope.removeFromCart = Cart.removeFromCart;
    $scope.emptyCart = Cart.emptyCart
    $scope.hasQuantity = Cart.hasQuantity;
    $scope.isCartEmpty = Cart.isCartEmpty;

}

ProductCtrl.$inject = ['$scope', '$routeParams', 'Product', 'Cart'];

//////////////////////////////////////////////////////////////////////
