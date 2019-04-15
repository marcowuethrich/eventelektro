import {Component, OnInit, Input} from '@angular/core';
import {Product} from '../../models/product';
import {ProductsConst} from "../../products.const";
import {el} from "@angular/platform-browser/testing/src/browser_util";

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

  private getImagePath(product: Product) {
    try {
      return "assets/images/products/" + product.imagePath;
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
}
