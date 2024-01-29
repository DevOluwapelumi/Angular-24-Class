import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LandingpageService {

  constructor() { }
  public item = 'My name is Oluwapelumi'
  public numberArray = [0, 1, 2, 3, 4, 5, 6, 7]

  returnitem(){
    return this.item
  }

  public returnnum(){
    return this.numberArray
  }
}
