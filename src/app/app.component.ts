import {Component, OnInit} from '@angular/core';
import {AppService} from './Service/app.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('showInfo', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('show<=>hide', animate('600ms ease-in')),
    ])
  ]
})
export class AppComponent implements OnInit {
  // for  filters
  /*  max = 1000;
      min = 0;*/
  show = false;
  sumOfAllGoods: number;
  sumOfmMassels: number;
  sumOftMassels: number;
  sumOfbMassels: number;
  sumOfgMassels: number;
  sumOfinstruments: number;
  contacts: any;
  constructor(private service: AppService) {}
  ngOnInit() {
    this.sumOfbMassels = this.service.get('bMassels').length;
    this.sumOfAllGoods = this.service.getAllGoods().length;
    this.sumOfmMassels = this.service.get('mMassels').length;
    this.sumOfgMassels = this.service.get('gMassels').length;
    this.sumOftMassels = this.service.get('tMassels').length;
    this.sumOfinstruments = this.service.get('instruments').length;
    this.contacts = this.service.getContacts();
  }
  get stateMent(): string {
    return this.show ? 'show' : 'hide';
  }
  toggle(): Boolean {
    console.log(this.contacts.Address);
    return this.show = !this.show;
}
}
