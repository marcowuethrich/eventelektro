import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../services/product-service';
import {Product} from '../../models/product';

@Component({
  selector: 'app-main-content-card',
  templateUrl: './main-content-card.component.html',
  styleUrls: ['./main-content-card.component.scss']
})
export class MainContentCardComponent implements OnInit {

  DROPDOWN_PLACEHOLDER = '-';

  categories = [];
  groups = [];
  selectedCategory: string;
  selectedGroup: string;
  csvAsString: string;
  products: Product[];
  results: Product[];
  totalSearchResults: Number = 0;
  p: any; // Needed or prod build

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getProducts()
      .subscribe(data => this.loadProducts(data))
  }

  loadProducts(csv: string) {
    this.products = this.productService.convertToProducts(csv);
    this.initSearch();
  }

  initSearch() {
    this.initCategoryFilter();
    this.initGroupFilter();

    // Show all Product on start
    this.results = this.products;
  }

  initCategoryFilter() {
    console.log(this.products);
    const categories = Array.from(new Set(this.products.map(prod => prod.category)));
    console.log(categories);
    categories.sort;
    this.categories.push(this.DROPDOWN_PLACEHOLDER);
    categories.forEach(cat => this.categories.push(cat));
    this.selectedCategory = this.categories[0];
    console.log(categories);
  }

  initGroupFilter() {
    const groups = Array.from(new Set(this.products
      .filter(prod => prod.category === this.selectedCategory)
      .map(prod => prod.group)));
    groups.sort;
    this.groups.push(this.DROPDOWN_PLACEHOLDER);
    groups.forEach(group => this.groups.push(group));
  }

  onCategoryFilterSelect(category: any) {
    this.selectedCategory = category;

    // Reset Group if Group was selected
    if (this.selectedGroup !== this.DROPDOWN_PLACEHOLDER) {
      this.selectedGroup = this.DROPDOWN_PLACEHOLDER;
    }

    if (category === this.DROPDOWN_PLACEHOLDER) {
      this.results = this.products;
    } else {
      this.results = this.products.filter(prod => prod.category === category);
    }
    // Is undifinde on inital start up
    var catNr: string;
    try {
      catNr = this.results[0].categoryNr;
    } catch {
      catNr = '00';
    }

    var groups = [];
    groups.push(this.DROPDOWN_PLACEHOLDER);
    Array.from(new Set(this.products
      .filter(prod => prod.categoryNr === catNr)
      .map(prod => prod.group)))
      .forEach(prod => groups.push(prod));
    this.groups = groups;
  }

  onGroupFilterSelect(group: any) {
    this.selectedGroup = group;
    if (group === this.DROPDOWN_PLACEHOLDER) {
      this.results = this.products.filter(prod => (prod.category === this.selectedCategory));
    } else {
      this.results = this.products.filter(prod => (prod.category === this.selectedCategory && prod.group === group));
    }
  }

  isListEmpty() {
    try {
      return this.results.length == 0 ? true : false;
    } catch {
      return false;
    }
  }

  getTotalSearchResults() {
    try {
      return this.results.length;
    } catch {
      return 0;
    }
  }

  getTotalKategories() {
    return this.categories.length - 1;
  }

  getTotalGroups() {
    if (this.selectedCategory === this.DROPDOWN_PLACEHOLDER) {
      return Array.from(new Set(this.products.map(prod => prod.group))).length;
    }
    return this.groups.length - 1;
  }

}
