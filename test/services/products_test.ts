// test/services/products_test.ts

/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../../app/my_shop.ts" />
/// <reference path="../../app/services/products.ts" />

describe('ProductsService', () => {
    var ProductsService: MyShop.ProductsService;

    beforeEach(angular.mock.module('MyShop'));
    beforeEach(inject([
        'ProductsService',
        (p) => {
            ProductsService = p;
        }
    ]));

    it('should return an empty array if there are no products', () => {
        var products = ProductsService.getProducts();

        expect(products.length).toBe(0);
    });

    it("should return products it has", () => {
        var products: MyShop.Product[] = [];

        products.push(new MyShop.Product("jPhone 8", 999.99, "A super modern smartphone!"));
        products.push(new MyShop.Product("GL 610", 1119.99, "UltraHD TV with super awesome remote controller made of glass!"));
        products.push(new MyShop.Product("Venolo G510", 345.99, "New Venolo's product, super thin and super fast laptop!"));

        ProductsService.setProducts(products);

        var actualProducts = ProductsService.getProducts();
        expect(actualProducts).toEqual(products);
    });
});
