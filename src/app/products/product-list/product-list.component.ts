import { Component,OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  today = new Date()
  selectedProduct:Product | undefined;
  products: Product[] = []

  constructor(private prductService:ProductService){

  }
  ngOnInit(): void {
    this.products= this.prductService.getProducts()
  }
  

  onBuy(){
    window.alert(`Zakupiono ${this.selectedProduct?.name}`)
  }
}
