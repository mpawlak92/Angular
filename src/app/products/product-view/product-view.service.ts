import { Injectable, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
@Injectable({
  providedIn: 'root'
})
export class ProductViewService implements OnInit{
   product:Product | undefined
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    
  }
  getProduct(id:number):Product | undefined{
    const products = this.productService.getProducts()
    if(!this.product){
      this.product= products[id]
    }
    return this.product
  }
}
