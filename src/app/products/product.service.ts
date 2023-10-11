import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService  {

  constructor() { }

  getProducts(): Product[]{
    return [
      {
        name:'WebCam',
        price: 100
      },
      {
        name:'Mikrofon',
        price: 200
      },
      {
        name:'Klawiatura',
        price: 300
      }
    ]
  }
}
