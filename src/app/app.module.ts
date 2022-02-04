import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { ItemsComponent } from './core/product_features/items/items.component';
import { ListingComponent } from './core/product_features/listing/listing.component';
import { DropDownComponent } from './shared/drop-down/drop-down.component';
import { ProductDetailsComponent } from './core/product-features/product-details/product-details.component';
import { ProductFormComponent } from './core/product-features/product-form/product-form.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { productService } from './_services/product/product.service';
import { LoginComponent } from './shared/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ItemsComponent,
    ListingComponent,
    DropDownComponent,
    ProductDetailsComponent,
    ProductFormComponent,
    NotFoundComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
