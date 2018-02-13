import {Component, Input, OnInit} from '@angular/core';
import {AppService} from '../Service/app.service';

@Component({
  selector: 'app-raiting',
  templateUrl: './raiting.component.html',
  styleUrls: ['./raiting.component.css']
})
export class RaitingComponent implements OnInit {
  constructor(private servise: AppService) { }
  @Input() good: any;
  ngOnInit() { }
  clickRating(event): any {
     this.servise.putAnEstimate(event);
     return event.preventDefault();
  }
}
