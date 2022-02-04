import { Component, Input, OnInit, Output } from '@angular/core';
import {product} from 'src/app/_models/products/product.model';
import { EventEmitter } from '@angular/core'
import { productService } from 'src/app/_services/product/product.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
@Input()
productItem!: product;

@Output()
itemAddedToCart: EventEmitter <product>= new EventEmitter<product>();

// productService= new productService();

constructor(private productService: productService) { }

  ngOnInit(): void {
  }

calculatePrice(): number{
let result;
if(this.productItem.discount){
  result= this.productItem.price - this.productItem.discount;
}else{
  result= this.productItem.price;
}
return result;
}

onItemAdded(){
  console.log(this.productItem);
  // this.itemAddedToCart.emit(this.productItem);

  this.productService.addProductToCart(this.productItem);
}

delete(){
  if(confirm("Are you sure you want to delete this")){
    // this.productService.deleteProduct(this.productItem.id);
  }
}

}
