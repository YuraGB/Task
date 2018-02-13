import { Component, OnInit } from '@angular/core';
import {AppService} from '../../Service/app.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  goods: any;
  constructor(private servise: AppService) { }

  ngOnInit() {
    this.goods = this.servise.getAllGoods();
  }
}
