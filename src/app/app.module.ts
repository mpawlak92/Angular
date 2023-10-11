import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';

import { FilterPipe } from './filter.pipe';
import { CopyrightDirective } from './copyright.directive';
import { NumericDirective } from './numeric.directive';

@NgModule({
  declarations: [AppComponent, CopyrightDirective, CopyrightDirective, NumericDirective],
  imports: [BrowserModule, ProductsModule, OrdersModule, FilterPipe],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
