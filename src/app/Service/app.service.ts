import { Injectable } from '@angular/core';
import { data } from './data';

@Injectable()
export class AppService {

  constructor() { }
  getAllGoods() {
    return data.goods;
  }
  get(name) {
   return this.getAllGoods().filter( (element: any) => {
      if (element.type === name) {
        return element;
      }
    });
  }
  putAnEstimate(event) {
    let target = event.target;
     this.getAllGoods().forEach( (element: any) => {
       while (element.id !== +target.parentElement.id && !target.parentElement.id) {
         target = target.parentElement;
       }
       if (+target.parentElement.id === +element.id ) {
         element.rating = element.rating.map((el, index) => {
           if (index === +event.target.textContent - 1) {
             return el += 1;
           }
           return el;
         });
       }
     });
    }
  getGoodById(id): any {
      return this.getAllGoods().filter( element => {
        if (element.id === id) {
          return element;
        }
      });
  }
  getContacts(): any {
    return data.contacts;
  }
}
