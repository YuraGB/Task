import { Component, OnInit } from '@angular/core';
import {AppService} from '../Service/app.service';

@Component({
  selector: 'app-g-massels',
  templateUrl: './g-massels.component.html',
  styleUrls: ['./g-massels.component.css']
})
export class GMasselsComponent implements OnInit {
  goods: any;
  constructor(private servise: AppService) { }

  ngOnInit() {
    this.goods = this.servise.get('gMassels');
  }

}
