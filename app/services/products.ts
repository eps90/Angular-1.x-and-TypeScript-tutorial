// app/services/products.ts

/// <reference path="../../typings/tsd.d.ts" />

module MyShop {
    export class Product {
        name: string = '';
        price: number = 0;
        description: string = '';
    }

    export class ProductsService {
        private products: Product[] = [];

        getProducts(): Product[] {
            return this.products;
        }
    }
}
