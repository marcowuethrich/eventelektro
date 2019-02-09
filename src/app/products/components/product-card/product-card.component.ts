import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';
import { stringify } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product;

  imagePath = this.buildFinalImagePath(this.product);

  constructor() { }

  ngOnInit() {
  }

  buildFinalImagePath(product: Product) {
    var imagePath: string;
    try{
      imagePath = "assets/images/products/" + product.imagePath;
    }catch{
      imagePath = "assets/images/404_not_found.jpg";
    }
    return imagePath;
  }
}
