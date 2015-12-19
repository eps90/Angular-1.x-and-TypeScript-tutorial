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
        var phoneProduct = new MyShop.Product();
        phoneProduct.name = "jPhone 8";
        phoneProduct.price = 999.99;
        phoneProduct.description = "A super modern smartphone!";

        var tvProduct = new MyShop.Product();
        tvProduct.name = "GL 610";
        tvProduct.price = 1119.99;
        tvProduct.description = "UltraHD TV with super awesome remote controller made of glass!";

        var laptopProduct = new MyShop.Product();
        laptopProduct.name = "Venolo G510";
        laptopProduct.price = 345.99;
        laptopProduct.description = "New Venolo's product, super thin and super fast laptop!";

        var products: MyShop.Product[] = [
            phoneProduct,
            tvProduct,
            laptopProduct
        ];

        ProductsService.setProducts(products);

        var actualProducts = ProductsService.getProducts();
        expect(actualProducts).toEqual(products);
    });
});
