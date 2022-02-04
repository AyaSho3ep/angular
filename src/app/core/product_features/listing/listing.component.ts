import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { AllProductResponse, product } from 'src/app/_models/products/product.model';
import { productService } from 'src/app/_services/product/product.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent implements OnInit{
  // productsArray!: product[];
  productsArray!: Observable<AllProductResponse>;


  @Output()
  itemAdded: EventEmitter<product> = new EventEmitter<product>();

  // productService= new productService();
  constructor(private productService: productService) { 
  }

    ngOnInit(): void{
      this.productsArray= this.productService.getAllProducts();
      // .subscribe(
      //   (res)=> {
      //     this.productsArray= res.product;
      //     console.log(res);
      //   },
        // (err)=>{},
        // ()=>{}
      // );
        // console.log(this.productService.getAllProducts());
    }
  }

  
// onItemAddedToCart(product: product){
//   console.log(product);
//   this.itemAdded.emit(product);
// }

// }
