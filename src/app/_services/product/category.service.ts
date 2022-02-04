import { Injectable } from '@angular/core';
import { Category } from 'src/app/_models/products/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryArray: Category[]= [
    {id: 1, name: 'Arts'},
    {id: 2, name: 'Automotive'},
    {id: 3, name: 'Baby'},
    {id: 4, name: 'Books'},
    {id: 5, name: 'Eletronics'},
    {id: 6, name: 'Fashion'},
    {id: 7, name: 'Sports'},
    {id: 8, name: 'Automotive'},
    {id: 9, name: 'Toys'},
    {id: 10, name: 'Home'},
    {id: 11, name: 'Health'},
    {id: 12, name: 'Beauty'},
  ]

  constructor() { }

  getAllCategories(): Category[]{
    return this.categoryArray;
  }
  getById(){}
  add(){}
  delete(){}
}
