import { Injectable } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService extends ProductService {

  constructor() { 
    super()
  }
  override getProducts(): Product[] {
    return super.getProducts().slice(1,3)
    
  }
}
