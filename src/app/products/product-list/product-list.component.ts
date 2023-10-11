import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  today = new Date()
  selectedProduct:Product | undefined;
  products: Product[] = [{name:'sam', price:10}, {name:'sung', price:100}, {name:'lol', price:0},]

  onBuy(){
    window.alert(`Zakupiono ${this.selectedProduct?.name}`)
  }
}
