import { Category } from './category.model';
import { PaymentType } from './payment-Type.model';
import { productLang } from './product-lang.model';
import {supplier}  from './supplier.model';
import { Tag } from './tags.model';

export interface product{
    id?: number;
    data: productLang[];
    price: number;
    discount?: number;
    imageUrl?: string;
    supplier?: supplier;
    category: Category;
    tags: Tag[];
    paymentType: PaymentType[];
}

export interface productWithCounter extends product{
    cartCounter: number;
}

export interface AllProductResponse{
    product: product[],
    numberOfProducts: number
}