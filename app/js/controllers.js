'use strict';

var s = {};

/* Controllers */

function ProductCtrl($scope, $routeParams, Product, Cart) {

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
function CartCtrl($scope, Product, Cart) {

    var itemsPerPage = 5;

    $scope.getHeight = function() {
        var height = 8 + ($scope.itemCount * 3);
        return height.toString() + 'em';
    };

    $scope.itemCount = Cart.itemCount;
    $scope.lastItemCount = 0;

    $scope.pageCount = 0;
    $scope.currentPage = 0;

    $scope.itemCount = Cart.itemCount;
    $scope.products =  Product.products();
    $scope.pagedCartItems = [];

    $scope.scrollMe = function(index) {
        console.log(index);
    };

    var pageArray = function(array, pageNumber, itemsPerPage) {

        var result = [];
        if (!array.length) return result;

        var end = pageNumber * itemsPerPage;
        var lastOffset = array.length;
        end = (end > lastOffset) ? lastOffset  : end;

        var start = end - itemsPerPage;
        start = (start < 0) ? 0 : start;

        result = array.slice(start,end);
        return result;
    };

    $scope.setPage = function (pageNo) {
        $scope.currentPage = pageNo;
    };

    $scope.$watch('products', function(oldValue,newValue) {
        // this watches for changes in products (specifically the quantity)
        // and updates the list of items in the cart

        var allCartItems = Cart.getCartItems();

        $scope.itemCount = allCartItems.length;
        $scope.pageCount = Math.ceil($scope.itemCount / itemsPerPage);

        if( $scope.itemCount > $scope.lastItemCount ) {
            // it the user adds an item to the cart, scroll to the last page
            $scope.lastItemCount = $scope.itemCount;
            $scope.setPage($scope.pageCount);
        }

        $scope.pagedCartItems = allCartItems;

        //$scope.pagedCartItems = pageArray(allCartItems,1, itemsPerPage);

    }, true);

}

function CartItemsCtrl($scope, Cart) {


}

//CartCtrl.$inject = ['$scope', 'Cart'];