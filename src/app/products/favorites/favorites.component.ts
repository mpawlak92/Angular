import { Component, Host, OnInit, Optional } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit{
  products: Product[]=[]
  
  constructor(@Host() @Optional() private productService: ProductService){

  }
  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

}
