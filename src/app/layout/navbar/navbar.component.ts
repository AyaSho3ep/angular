import { Component, Input, OnInit } from '@angular/core';
import { product, productWithCounter } from 'src/app/_models/products/product.model';
import { productService } from 'src/app/_services/product/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
// @Input()

  addedProducts: productWithCounter[]= [];
  
  dropdownOpened= false;

  // productService= new productService();
  constructor(private productService: productService) { 
  }

  ngOnInit(): void {
    this.productService.cartHasBeenChanged.subscribe(
      (res)=>{
        this.addedProducts= res;
      },
      (err)=>{},
      ()=>{}
    )

  }

}


