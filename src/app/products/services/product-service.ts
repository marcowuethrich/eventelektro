import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';

@Injectable()
export class ProductService {

    private productUrl = "assets/products/products.csv";
    private csvSeparator = ";";
    private columnHeaderExist = true;

    constructor(private http: HttpClient) {
    }

    public getProducts() {
        return this.http.get(this.productUrl, { responseType: 'text' })
    }

    public convertToProcuts(txt: string): any {
        var products: Product[] = [];
        var lines : string [] = txt.split(/\r\n|\r|\n/);

        var start: number = this.columnHeaderExist ? 1 : 0;
        for (var i = start; i < lines.length; i++) {
            var line: string = lines[i];
            var lineArray = line.split(this.csvSeparator);
            var product = new Product();
            product.name = lineArray[1];
            product.category = lineArray[3];
            product.group = lineArray[5];
            product.code = lineArray[6];
            product.number = lineArray[7];
            product.newPrice = lineArray[8];
            product.rentPrice = lineArray[9];
            product.imagePath = lineArray[10];
            products.push(product);
        }
        return products;
    }

}
