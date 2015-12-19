// app/my_shop.ts

/// <reference path="../typings/tsd.d.ts" />

module MyShop {
    var application = angular.module('MyShop', []);
    application.service('ProductsService', ProductsService);
}
