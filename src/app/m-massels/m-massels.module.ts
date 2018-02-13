import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MMasselsRoutingModule } from './m-massels-routing.module';
import { MMasslesComponent } from './m-massles/m-massles.component';

@NgModule({
  imports: [
    CommonModule,
    MMasselsRoutingModule
  ],
  declarations: [MMasslesComponent]
})
export class MMasselsModule { }
