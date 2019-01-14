import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-main-content-card',
  templateUrl: './main-content-card.component.html',
  styleUrls: ['./main-content-card.component.scss']
})
export class MainContentCardComponent implements OnInit {

  categories = [];
  groups = [];
  selectedCategory: string;
  selectedGroup: string;
  csvAsString: string;
  products: Product[];
  results: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(data => this.loadProducts(data))
  }

  loadProducts(csv: string) {
    this.products = this.productService.convertToProcuts(csv);
    this.initSearch();
  }

  initSearch(){
    this.categories = Array.from(new Set(this.products.map(prod => prod.category)));
    this.groups = Array.from(new Set(this.products.map(prod => prod.group)));
       
    this.categories.sort;
    this.groups.sort;

    this.selectedCategory = this.categories[0];
    this.selectedGroup = this.groups[0];
  }

}
