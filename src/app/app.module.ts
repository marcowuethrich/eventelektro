import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {ContactComponent} from './contact/contact.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './footer/footer.component';
import {ConditionsComponent} from './conditions/conditions.component';
import {ImagesComponent} from './images/images.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ProductsModule} from './products/products.module';
import {Angular2ImageGalleryModule} from 'angular2-image-gallery';
import {ToastrModule} from "ngx-toastr";
import {FormsModule} from "@angular/forms";
import {ContactService} from "./contact/contact.service";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContactComponent,
    AboutComponent,
    HomeComponent,
    FooterComponent,
    ConditionsComponent,
    ImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ProductsModule,
    Angular2ImageGalleryModule,
    FormsModule
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule {}
