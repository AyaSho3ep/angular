import { Component } from '@angular/core';
import { product, productWithCounter } from './_models/products/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})

export class AppComponent {
  title = 'angular_lab1';
  // addedProduct: product[]= [];
  
  // addedProduct: productWithCounter[]= [];


  // onItemAdded(product: product){
  //   console.log(product);

    // logic
    // const newProduct: productWithCounter= {...product, cartCounter:1};
    // this.addedProduct.push(newProduct);

    // this.addedProduct.push(product);
  // }
}
