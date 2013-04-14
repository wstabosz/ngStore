'use strict';

var s = {};

/* Controllers */

function ProductCtrl($scope, $routeParams, Product, Cart) {
s = $scope;
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

function CartCtrl($scope, Cart) {

    var itemsPerPage = 5;

    $scope.itemCount = 0;
    $scope.lastItemCount = 0;

    $scope.pageCount = 0;
    $scope.currentPage = 0;
    $scope.maxSize = 5;

    var pageArray = function(array, pageNumber, itemsPerPage) {

        var result = [];
        if (!array.length) return result;

        var end = pageNumber * itemsPerPage;
        var lastOffset = array.length;
        end = (end > lastOffset) ? lastOffset  : end;

        var start = end - itemsPerPage;
        start = (start < 0) ? 0 : start;

        result = array.slice(start,end);
        console.log('start: ' + start + ' end: ' + end);
        return result;
    };

    $scope.getCartItems = function(currentPage) {

        var allCartItems = Cart.getCartItems();

        $scope.itemCount = allCartItems.length;
        $scope.pageCount = Math.ceil($scope.itemCount / itemsPerPage);

        if( $scope.itemCount > $scope.lastItemCount ) {
            // it the user adds an item to the cart, scroll to the last page
            $scope.lastItemCount = $scope.itemCount;
            $scope.setPage($scope.pageCount);
        }

        var pagedCartItems = pageArray(allCartItems,currentPage, itemsPerPage);

        return pagedCartItems;
    };

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

}

CartCtrl.$inject = ['$scope', 'Cart'];