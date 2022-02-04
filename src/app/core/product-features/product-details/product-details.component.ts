import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/_models/products/product.model';
import { productService } from 'src/app/_services/product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product= {} as product;
  relatedProducts!: product[];

  constructor(private activatedRoute: ActivatedRoute, private productService: productService) { }

  ngOnInit(): void {
    // console.log(this.activatedRoute.snapshot.params['productId']);
    this.getProductById();
    this.getRelatedProducts();
  }

  getProductById(){
    this.activatedRoute.params.subscribe(
      (params)=>{
        const id= +params['productId'];
        console.log(params);
        this.product= this.productService.getProductById(id)!;
        console.log(this.product);
      },
    )
  }

  getRelatedProducts(){
    // this.relatedProducts= this.productService.getAllProducts().slice(0,4);
  }

}
