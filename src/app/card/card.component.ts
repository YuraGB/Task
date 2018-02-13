import {Component, Input, OnInit} from '@angular/core';
import {AppService} from '../Service/app.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  constructor(private servise: AppService) {
  }

  @Input() goods: any;

  ngOnInit() {
  }

  clickRating(event): any {
    event.preventDefault();
    return false;
  }
}
