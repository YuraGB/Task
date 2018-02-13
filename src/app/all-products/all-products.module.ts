import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllProductsRoutingModule } from './all-products-routing.module';
import { AllProductsComponent } from './all-products/all-products.component';

@NgModule({
  imports: [
    CommonModule,
    AllProductsRoutingModule
  ],
  declarations: [AllProductsComponent]
})
export class AllProductsModule { }
