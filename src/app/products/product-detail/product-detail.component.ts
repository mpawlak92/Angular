import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';

import { Product } from '../product';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  encapsulation:ViewEncapsulation.None,
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit,OnChanges, AfterViewInit{
  @Input() product:Product | undefined;
  @Output() bought = new EventEmitter<string>();

  @ViewChild(ProductDetailComponent) productDetail:ProductDetailComponent | undefined

    constructor(){
      // console.log(`Name to ${this.name} w konstruktorze`)
    }

    ngOnInit(): void {
      // console.log(`Name to ${this.name} w onInit hook`)
    }
    ngOnChanges(changes: SimpleChanges): void {
      const products = changes['product']

      if(!products.isFirstChange()){
        const oldValue = products.previousValue
        const newValue = products.currentValue
      console.log(`Produkt zmieniony z ${oldValue} na ${newValue}`)
      
      }
    }
    ngAfterViewInit(): void {
      if(this.productDetail){
        // console.log('fewg' + this.productDetail.name)
      }
    }

  buy(){
    this.bought.emit();    
  }
  get productName():string{
    console.log(`pobierz ${this.productName}`)
    return this.productName
  }
  
}
