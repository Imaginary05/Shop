import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements IProduct {
  name: string;
  price: number;

  constructor() { }

  getProducts() {
     return [
      { name: 'Tomato', price: 2.5 },
      { name: 'Potato', price: 1.05 },
      { name: 'Cucumber', price: 1.5 },
      { name: 'Carrot', price: 1 },
      { name: 'Banana', price: 3 },
      { name: 'Grape', price: 5 },
      { name: 'Cheese', price: 12.36 }
    ];
  }
}
