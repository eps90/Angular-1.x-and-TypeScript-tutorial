// app/services/products.ts

/// <reference path="../typings.d.ts" />

module MyShop {
    export interface IProduct {
        name: string;
        price: number;
        description: string;
    }

    export class Product implements IProduct {
        constructor (public name: string, public price: number, public description: string) {}
    }

    export class ProductsFactory {
        create(rawProducts: IProduct[]): Product[] {
            var result: Product[] = [];

            for (let i = 0, len = rawProducts.length; i < len; i++) {
                let product = rawProducts[i];
                result.push(new Product(product.name, product.price, product.description));
            }

            return result;
        }
    }

    export class ProductsService {
        static $inject = ['$http', '$q', 'ProductsFactory'];

        constructor (private $http: ng.IHttpService, private $q: ng.IQService, private ProductsFactory: ProductsFactory) {}

        getProducts(): ng.IPromise<Product[]> {
            var deferred = this.$q.defer<Product[]>();
            this.$http.get<IProduct[]>('/products.json').then((response) => {
                var products = response.data;
                var result = this.ProductsFactory.create(products);

                deferred.resolve(result);
            });

            return deferred.promise;
        }
    }
}
