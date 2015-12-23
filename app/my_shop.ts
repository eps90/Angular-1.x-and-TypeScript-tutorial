// app/my_shop.ts

/// <reference path="typings.d.ts" />

module MyShop {
    var application = angular.module('MyShop', []);
    application.service('ProductsService', ProductsService);
    application.service('ProductsFactory', ProductsFactory);
}
