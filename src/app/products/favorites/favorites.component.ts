import { Component, Host, OnInit, Optional } from '@angular/core';
import { Product } from '../product';
// import { FavouritesService } from './favourites.service';
import { ProductService } from '../product.service';
import { favouritesFactory } from './favourites';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
  providers: [{provide: ProductService, useFactory: favouritesFactory(true)}]
})
export class FavoritesComponent implements OnInit{
  products: Product[]=[]
  
  constructor(@Host() @Optional() private productService: ProductService){

  }
  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

}
