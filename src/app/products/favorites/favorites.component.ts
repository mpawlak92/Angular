import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit{
  products: Product[]=[]

  constructor(private productService: ProductService){

  }
  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

}
