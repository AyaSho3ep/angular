import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './core/product-features/product-details/product-details.component';
import { ProductFormComponent } from './core/product-features/product-form/product-form.component';
import { ListingComponent } from './core/product_features/listing/listing.component';
import { LoginComponent } from './shared/login/login.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: ListingComponent},
  {path: 'home', redirectTo: '', pathMatch: 'full'},
  {path: 'product', children:[
    {path: 'listing', redirectTo: '', pathMatch: 'full'},
    {path: 'details/:productId', component: ProductDetailsComponent},
    {path: 'add', component: ProductFormComponent},
    {path: 'edit/:productId', component: ProductFormComponent},
    {path: 'delete/:productId', component: ListingComponent},

  ]},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotFoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
