import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ProductsComponent } from './products.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProductRoutingModule } from './products-routing-module';
import { MainContentCardComponent } from './components/main-content-card/main-content-card.component';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [
    ProductsComponent,
    MainContentCardComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule
  ]
})
export class ProductsModule { }
