import { HttpClient, HttpHeaders } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AllProductResponse, product, productWithCounter } from "src/app/_models/products/product.model";
import { environment } from "src/environments/environment";
import { ProductTwoService } from "./product-two.service";

@Injectable({
    providedIn: 'root'
})

export class productService {

    productsArray: product[] = [
        // {
        //     id: 1,
        //     data: [{name: 'camera', description: 'test', lang: { name: 'en' } }],
        //     category: {id:1, name: 'food' },
        //     tags: [{ name: 'food' }],
        //     paymentType: [{ name: 'COD' }],
        //     price: 900, discount: 100, imageUrl: 'https://picsum.photos/200/300'
        // },

        // { 
        //     id: 2, 
        //     data: [{name: 'mic', description: 'test', lang: { name: 'en' } }],
        //     category: { name: 'food' },
        //     tags: [{ name: 'food' }],
        //     paymentType: [{ name: 'COD' }],
        //     price: 200, discount: 0, imageUrl: 'https://picsum.photos/200/301' 
        // },

        // { 
        //     id: 3, 
        //     data: [{name: 'headphone', description: 'test', lang: { name: 'en' } }],
        //     category: { name: 'food' },
        //     tags: [{ name: 'food' }],
        //     paymentType: [{ name: 'COD' }],
        //     price: 800, discount: 80, imageUrl: 'https://picsum.photos/200/302' 
        // },

        // { 
        //     id: 4, 
        //     data: [{name: 'glasses', description: 'test', lang: { name: 'en' } }],
        //     category: { name: 'food' },
        //     tags: [{ name: 'food' }],
        //     paymentType: [{ name: 'COD' }],
        //     price: 200, discount: 10, imageUrl: 'https://picsum.photos/id/200/303' 
        // },

        // { 
        //     id: 5, 
        //     data: [{name: 'watch', description: 'test', lang: { name: 'en' } }],
        //     category: { name: 'food' },
        //     tags: [{ name: 'food' }],
        //     paymentType: [{ name: 'COD' }],
        //     price: 800, discount: 10, imageUrl: 'https://picsum.photos/200/304' 
        // },

        // { 
        //     id: 6, 
        //     data: [{name: 'ring', description: 'test', lang: { name: 'en' } }],
        //     category: { name: 'food' },
        //     tags: [{ name: 'food' }],
        //     paymentType: [{ name: 'COD' }],
        //     price: 500, discount: 0, imageUrl: 'https://picsum.photos/200/305' 
        // },

        // { 
        //     id: 7, 
        //     data: [{name: 'bag', description: 'test', lang: { name: 'en' } }],
        //     category: { name: 'food' },
        //     tags: [{ name: 'food' }],
        //     paymentType: [{ name: 'COD' }],
        //     price: 200, discount: 10, imageUrl: 'https://picsum.photos/200/306' 
        // },

        // { 
        //     id: 8, 
        //     data: [{name: 'labtop', description: 'test', lang: { name: 'en' } }],
        //     category: { name: 'food' },
        //     tags: [{ name: 'food' }],
        //     paymentType: [{ name: 'COD' }],
        //     price: 24000, discount: 500, imageUrl: 'https://picsum.photos/200/307' 
        // },

        // { 
        //     id: 9, 
        //     data: [{name: 'shirt', description: 'test', lang: { name: 'en' } }],
        //     category: { name: 'food' },
        //     tags: [{ name: 'food' }],
        //     paymentType: [{ name: 'COD' }],
        //     price: 300, discount: 10, imageUrl: 'https://picsum.photos/200/308' 
        // },
    ];

    cartHasBeenChanged: EventEmitter<productWithCounter[]> = new EventEmitter<productWithCounter[]>();

    private cartArray: productWithCounter[] = [];
    constructor(private productTwo: ProductTwoService, private httpClient: HttpClient) {}


    getAllProducts(): Observable<AllProductResponse> {
        const headers = new HttpHeaders(
            {authorization: sessionStorage.getItem('token')!}
        )
        return this.httpClient.get<AllProductResponse>(environment.baseUrl + 'product', {headers});
    }

    getProductById(id: number){
        return this.productsArray.find(product => product.id === id);
    }

    addProduct(product: product) {
        this.productsArray.push(product);
    }
    updateProduct() { }

    deleteProduct(id: number) { 
        return this.productsArray.filter(product => product.id != id);
    }
    
    addProductToCart(product: product) {
        console.log(product);

        const newProduct: productWithCounter = { ...product, cartCounter: 1 };
        // this.addedProduct.push(product);
        // if(this.cartArray.includes(product)){
        //     product.count++;
        // }else{
        //     this.cartArray.push(newProduct);
        //     this.cartHasBeenChanged.emit(this.cartArray);
        // }
        this.cartArray.push(newProduct);
        this.cartHasBeenChanged.emit(this.cartArray);

    }

}