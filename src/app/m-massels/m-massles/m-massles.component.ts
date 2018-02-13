import { Component, OnInit } from '@angular/core';
import {AppService} from '../../Service/app.service';

@Component({
  selector: 'app-m-massles',
  templateUrl: './m-massles.component.html',
  styleUrls: ['./m-massles.component.css']
})
export class MMasslesComponent implements OnInit {
  goods: any;
  constructor(private servise: AppService) { }

  ngOnInit() {
    this.goods = this.servise.get('mMassels');
  }

}
