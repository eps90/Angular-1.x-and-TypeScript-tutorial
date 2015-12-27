// test/services/products_test.ts

/// <reference path="../../app/typings.d.ts" />

describe('ProductsService', () => {
    var ProductsService: MyShop.ProductsService,
        $httpBackend: ng.IHttpBackendService,
        productsResult,
        ProductsFactory: MyShop.ProductsFactory;

    beforeEach(angular.mock.module('MyShop'));
    beforeEach(angular.mock.module([
        '$provide',
        ($provide: ng.auto.IProvideService) => {
            productsResult = null;
            $provide.value('ProductsFactory', {
                create: jasmine.createSpy('ProductsFactory.create').and.callFake(() => {
                    return productsResult;
                })
            });
        }
    ]));
    beforeEach(inject([
        'ProductsService',
        '$httpBackend',
        'ProductsFactory',
        (p, $hb, pf) => {
            ProductsService = p;
            $httpBackend = $hb;
            ProductsFactory = pf;
        }
    ]));

    it('should fetch products from API', (done) => {
        var products = ['some', 'array', 'of','products'];
        productsResult = ['result', 'array', 'of', 'products'];

        $httpBackend.expectGET('/products.json').respond(200, products);

        ProductsService
            .getProducts()
            .then((result: MyShop.Product[]) => {
                expect(ProductsFactory.create).toHaveBeenCalledWith(products);
                expect(result).toEqual(productsResult);
                done();
            })
            .catch((err) => {
                done(err);
            });

        $httpBackend.flush();
    });
});

describe('ProductsFactory', () => {
    var ProductsFactory: MyShop.ProductsFactory;

    beforeEach(angular.mock.module('MyShop'));
    beforeEach(inject([
        'ProductsFactory',
        (pf) => {
            ProductsFactory = pf;
        }
    ]));

    it('should create an array of Product models by given raw data', () => {
        var productsRaw = [
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

        var products = ProductsFactory.create(productsRaw);

        expect(products[0].name).toEqual("jPhone 8");
        expect(products[0].price).toEqual(999.99);
        expect(products[0].description).toEqual("A super modern smartphone!");

        expect(products[1].name).toEqual("GL 610");
        expect(products[1].price).toEqual(1119.99);
        expect(products[1].description).toEqual("UltraHD TV with super awesome remote controller made of glass!");

        expect(products[2].name).toEqual("Venolo G510");
        expect(products[2].price).toEqual(345.99);
        expect(products[2].description).toEqual("New Venolo's product, super thin and super fast laptop!");
    });
});
