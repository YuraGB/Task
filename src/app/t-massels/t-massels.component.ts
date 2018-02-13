import { Component, OnInit } from '@angular/core';
import {AppService} from '../Service/app.service';

@Component({
  selector: 'app-t-massels',
  templateUrl: './t-massels.component.html',
  styleUrls: ['./t-massels.component.css']
})
export class TMasselsComponent implements OnInit {
  goods: any;
  constructor(private servise: AppService) { }

  ngOnInit() {
    this.goods = this.servise.get('t  Massels');
  }

}

