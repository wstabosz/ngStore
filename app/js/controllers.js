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

    $scope.cartItems = [];

    $scope.itemCount = Cart.itemCount;
    $scope.products =  Product.products();

    $scope.scrollMe = function(index) {
        console.log(index);
    };

    var getCartItems = function() {

        var items = Cart.getCartItems();

        $scope.itemCount = items.length;

        if( $scope.itemCount > $scope.lastItemCount ) {

        }

        return items;

    };

    var createGridRows = function() {

        var items = Cart.getCartItems();
        var rows = _.map(items, function(item) {
            if (item.quantity > 0)  {
                return {
                    name: item.name,
                    quantity: item.quantity,
                    price: (item.price * 1).formatMoney(2,'.',''),
                    total: (item.quantity * item.price).formatMoney(2,'.','')
                };
            }
        });

        $scope.itemCount = rows.length;

        return rows;

    };

    $scope.$watch('products', function(oldValue,newValue) {
        // this watches for changes in products (specifically the quantity)
        // and updates the list of items in the cart

        $scope.cartItems = createGridRows(); //getCartItems();

    }, true);

    $scope.gridOptions = {
        data: 'cartItems'
        ,plugins: [new ngGridFlexibleHeightPlugin({minHeight: 20, maxHeight: function() { return $scope.gridMaxHeight;} })]
        ,enableRowSelection: false
        ,showFooter: true
        ,footerRowHeight: 30
        ,footerTemplate:
            '<div class="ngHeaderContainer ngFooterPanel" ng-style="headerStyle()" >'
            + '<div class="ngHeaderCell ngCellText" ng-class="renderedColumns[0].colIndex()">Total</div>'
            + '<div class="ngHeaderCell ngCellText" ng-class="renderedColumns[1].colIndex()">{{itemQuantityTotal()}}</div>'
            + '<div class="ngHeaderCell ngCellText" ng-class="renderedColumns[2].colIndex()"></div>'
            + '<div class="ngHeaderCell ngCellText" ng-class="renderedColumns[3].colIndex()">{{itemPriceTotal()}}</div>'
            + '</div>'
        ,columnDefs: [
            {
                field:'name'
                ,displayName:'Item'
                ,width: '139px'
                ,cellTemplate: '<a class="ngCellText" href="#{{row.entity[col.field] | anchor}}" scroll-to>{{row.entity[col.field]}}</a>'
            },
            {
                field:'quantity'
                , displayName:'Qty'
                ,width: '32px'
            },
            {
                field:'price'
                , displayName:'Price'
                ,width: '48px'
            },
            {
                field:'total'
                , displayName:'Total'
                ,width: '54px'
            }
        ]
    };

    $scope.$watch('height', function(oldValue,newValue) {
            //$scope.cartTableContainerStyle = ($scope.height - 180) + 'px';

        $scope.gridMaxHeight = $scope.height - 180;

        $scope.cartTableContainerStyle =
        {
            'max-height': ($scope.height - 180) + 'px'
            //,overflow: 'hidden'
        };


    });




}

function CartItemsCtrl($scope, Cart) {


}

//CartCtrl.$inject = ['$scope', 'Cart'];