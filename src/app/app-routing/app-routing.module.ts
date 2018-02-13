import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MMasslesComponent} from '../m-massels/m-massles/m-massles.component';
import {AllProductsComponent} from '../all-products/all-products/all-products.component';
import {BMasselsComponent} from '../b-massels/b-massels.component';
import {GMasselsComponent} from '../g-massels/g-massels.component';
import {TMasselsComponent} from '../t-massels/t-massels.component';
import {InstrumentsComponent} from '../instruments/instruments.component';
import {GoodComponent} from '../good/good.component';


const routes: Routes = [
  {path: '', component: AllProductsComponent},
  {path: 'AllGoods', component: AllProductsComponent},
  {path: 'mMassels', component: MMasslesComponent},
  {path: 'mMassels/:id', component: GoodComponent},
  {path: 'gMassels', component: GMasselsComponent},
  {path: 'gMassels/:id', component: GoodComponent},
  {path: 'tMassels', component: TMasselsComponent},
  {path: 'tMassels/:id', component: GoodComponent},
  {path: 'bMassels', component: BMasselsComponent},
  {path: 'bMassels/:id', component: GoodComponent},
  {path: 'instruments', component: InstrumentsComponent},
  {path: 'instruments/:id', component: GoodComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
