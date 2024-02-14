import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviourService {

  constructor() { }
  public behavior = new BehaviorSubject<any>({
    firstname:'herbert',
    lastname:'Bello',
    age:'19',
    email:'bella@gmail.com'
  });
}
