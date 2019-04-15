import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../models/product';
import {ProductsConst} from "../products.const";

@Injectable()
export class ProductService {

  private readonly productUrl: string;
  private readonly csvSeparator: string;
  private readonly columnHeaderExist: boolean;

  constructor(private http: HttpClient) {
    this.productUrl = ProductsConst.PRODUCTS_URL;
    this.csvSeparator = ProductsConst.CSV_SEPARATOR;
    this.columnHeaderExist = ProductsConst.COLUMN_HEADER_EXIST;
  }

  public getProducts() {
    return this.http.get(this.productUrl, {responseType: 'text'})
  }

  public convertToProducts(txt: string): any {
    const products: Product[] = [];
    const lines: string [] = txt.split(/\r\n|\r|\n/);

    const start: number = this.columnHeaderExist ? 1 : 0;
    for (var i = start; i < lines.length; i++) {
      const line: string = lines[i];
      const lineArray = line.split(this.csvSeparator);
      const product = new Product();
      product.name = lineArray[1];
      product.categoryNr = lineArray[2];
      product.category = lineArray[3];
      product.groupNr = lineArray[4];
      product.group = lineArray[5];
      product.code = lineArray[6];
      product.number = lineArray[7];
      product.rentPrice = lineArray[8];
      product.imagePath = lineArray[9];
      product.pdfPath = lineArray[10];

      products.push(product);
    }
    return products;
  }

}
