import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import '../polyfills';
 // import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import 'hammerjs/hammer';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { MMasslesComponent } from './m-massels/m-massles/m-massles.component';


import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  MatFormFieldModule, MatDividerModule,
} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import {CdkTableModule} from '@angular/cdk/table';
import {AppRoutingModule} from './app-routing/app-routing.module';

import {AllProductsComponent} from './all-products/all-products/all-products.component';
import { TMasselsComponent } from './t-massels/t-massels.component';
import { GMasselsComponent } from './g-massels/g-massels.component';
import { BMasselsComponent } from './b-massels/b-massels.component';
import { InstrumentsComponent } from './instruments/instruments.component';
import {AppService} from './Service/app.service';
import {Dialog2Component, GoodComponent} from './good/good.component';
import { CardComponent } from './card/card.component';
import { RaitingComponent } from './raiting/raiting.component';
import {ButtonBuyComponent, DialogComponent} from './button-buy/button-buy.component';


@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  declarations: []
})
export class MaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    AllProductsComponent,
    MMasslesComponent,
    TMasselsComponent,
    GMasselsComponent,
    BMasselsComponent,
    InstrumentsComponent,
    GoodComponent,
    CardComponent,
    RaitingComponent,
    DialogComponent,
    Dialog2Component,
    ButtonBuyComponent,

  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
  //  MMasselsModule,
  //  AllProductsModule
  ],
  entryComponents: [DialogComponent, ButtonBuyComponent, Dialog2Component],
  providers: [AppService],
  bootstrap: [AppComponent]
})

export class AppModule { }
