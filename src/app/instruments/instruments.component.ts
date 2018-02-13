import { Component, OnInit } from '@angular/core';
import {AppService} from '../Service/app.service';

@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.css']
})
export class InstrumentsComponent implements OnInit {
  goods: any;
  constructor(private servise: AppService) { }

  ngOnInit() {
    this.goods = this.servise.get('instruments');
  }
}
