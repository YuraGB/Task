import { Component, OnInit } from '@angular/core';
import {AppService} from '../Service/app.service';

@Component({
  selector: 'app-b-massels',
  templateUrl: './b-massels.component.html',
  styleUrls: ['./b-massels.component.css']
})
export class BMasselsComponent implements OnInit {
  goods: any;
  constructor(private servise: AppService) { }

  ngOnInit() {
    this.goods = this.servise.get('bMassels');
  }

}
