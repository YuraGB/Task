import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MMasslesComponent} from './m-massles/m-massles.component';

const routes: Routes = [
  {path: 'mMassels', component: MMasslesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MMasselsRoutingModule { }
