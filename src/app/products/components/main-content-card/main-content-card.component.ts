import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { Product } from '../../models/product';
import { group } from '@angular/animations';

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

  initSearch() {
    this.initCategoryFilter();
    this.initGroupFilter();

    //Todo remove this or set anything
    this.onCategoryFilterSelect(this.categories[0]);
    this.onGroupFilterSelect(this.groups[0]);
  }

  initCategoryFilter() {
    var categories = Array.from(new Set(this.products.map(prod => prod.category)));
    categories.sort;
    this.categories.push('-')
    categories.forEach(cat => this.categories.push(cat));
    this.selectedCategory = this.categories[0]
  }

  initGroupFilter() {
    var groups = Array.from(new Set(this.products.filter(prod => prod.category === this.selectedCategory).map(prod => prod.group)))
    groups.sort;
    this.groups.push('-')
    groups.forEach(group => this.groups.push(group));
  }

  onCategoryFilterSelect(category: any) {
    this.selectedCategory = category;
    this.results = this.products.filter(prod => prod.category === category);
    // Reset Group if Group was selected
    if (this.selectedGroup !== '-') {
      this.selectedGroup = '-';
    }

    var catNr: string;
    try {
      catNr = this.results[0].categoryNr;
    } catch{
      catNr = '00';
    }

    var groups = [];
    groups.push('-');
    Array.from(new Set(this.products
      .filter(prod => prod.categoryNr === catNr)
      .map(prod => prod.group)))
      .forEach(prod => groups.push(prod));
    console.log(groups)
    this.groups = groups;
  }

  onGroupFilterSelect(group: any) {
    this.selectedGroup = group;
    this.results = this.products.filter(prod => (prod.category === this.selectedCategory && prod.group === group));
  }

  isListEmpty() {
    try {
      return this.results.length == 0 ? true : false;
    } catch{
      return false;
    }
  }

}
