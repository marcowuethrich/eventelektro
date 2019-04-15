import {Component, OnInit, Input} from '@angular/core';
import {Product} from '../../models/product';
import {ProductsConst} from "../../products.const";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product;
  withoutGroupNameIndicator: string;

  constructor() {
    this.withoutGroupNameIndicator = ProductsConst.WITHOUT_GROUP_NAME_INDICATOR;
  }

  ngOnInit() {
  }

  getImagePath(product: Product) {
    try {
      return "assets/products/images/" + product.imagePath;
    } catch {
      return "assets/images/404_not_found.jpg";
    }
  }

  getProductName(product: Product) {
    if (this.indicatorExist(product.name)) {
      return product.name.substr(1, product.name.length);
    }else return `${product.group} - ${product.name}`
  }

  private indicatorExist(txt: string) {
    return txt[0] === this.withoutGroupNameIndicator;
  }

  documentsExist(product: Product) {
    return product.pdfName != null && product.pdfName.length > 2;
  }

  getDocPath(product: Product) {
    return `assets/products/docs/${product.pdfName}`
  }

  getDocName(product: Product) {
    return `doc_${product.pdfName}`
  }

  getRentPrice(product: Product) {
    if (product.rentPrice === '0' || product.rentPrice === '0.00')
      return `Auf Anfrage`;
    return product.rentPrice;
  }
}
