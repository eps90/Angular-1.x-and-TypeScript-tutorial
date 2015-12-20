// app/services/products.ts

/// <reference path="../typings.d.ts" />

module MyShop {
    export class Product {
        constructor (private name: string, private price: number, private description: string) {}
    }

    export class ProductsService {
        private products: Product[] = [];

        getProducts(): Product[] {
            return this.products;
        }

        setProducts(products: Product[]):void {
            this.products = products;
        }
    }
}
