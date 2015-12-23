// test/services/products_test.ts

/// <reference path="../../app/typings.d.ts" />

describe('ProductsService', () => {
    var ProductsService: MyShop.ProductsService,
        $httpBackend: ng.IHttpBackendService;

    beforeEach(angular.mock.module('MyShop'));
    beforeEach(inject([
        'ProductsService',
        '$httpBackend',
        (p, $hb) => {
            ProductsService = p;
            $httpBackend = $hb;
        }
    ]));

    it('should fetch products from API', (done) => {
        var products = [
            {
                name: "jPhone 8",
                price:  999.99,
                description: "A super modern smartphone!"
            },
            {
                name: "GL 610",
                price: 1119.99,
                description: "UltraHD TV with super awesome remote controller made of glass!"
            },
            {
                name: "Venolo G510",
                price: 345.99,
                description: "New Venolo's product, super thin and super fast laptop!"
            }
        ];

        $httpBackend.expectGET('/products.json').respond(200, products);

        ProductsService
            .getProducts()
            .then((products: MyShop.Product[]) => {
                expect(products.length).toEqual(3);

                expect(products[0].name).toEqual("jPhone 8");
                expect(products[0].price).toEqual(999.99);
                expect(products[0].description).toEqual("A super modern smartphone!");

                expect(products[1].name).toEqual("GL 610");
                expect(products[1].price).toEqual(1119.99);
                expect(products[1].description).toEqual("UltraHD TV with super awesome remote controller made of glass!");

                expect(products[2].name).toEqual("Venolo G510");
                expect(products[2].price).toEqual(345.99);
                expect(products[2].description).toEqual("New Venolo's product, super thin and super fast laptop!");

                done();
            })
            .catch((err) => {
                done(err);
            });

        $httpBackend.flush();

    });
});
