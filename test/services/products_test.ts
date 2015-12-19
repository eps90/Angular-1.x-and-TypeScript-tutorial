// test/services/products_test.ts

/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../../app/services/products.ts" />

describe('ProductsService', () => {
    it('should return an empty array if there are no products', () => {
        var productsService = new MyShop.ProductsService();
        var products = productsService.getProducts();

        expect(products.length).toBe(0);
    });
});
