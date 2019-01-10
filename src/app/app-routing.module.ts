import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { ImagesComponent } from './images/images.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "products", component: ProductsComponent},
  {path: "contact", component: ContactComponent},
  {path: "agb", component: ConditionsComponent},
  {path: "images", component: ImagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
