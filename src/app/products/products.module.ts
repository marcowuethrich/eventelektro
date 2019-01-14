import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ProductsComponent } from './products.component';

import { ProductRoutingModule } from './products-routing-module';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product-service';
import { MainContentCardComponent } from './components/main-content-card/main-content-card.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    ProductsComponent,
    MainContentCardComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
    ],
  providers: [ProductService]
})
export class ProductsModule { }
