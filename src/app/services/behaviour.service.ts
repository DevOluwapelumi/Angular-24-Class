import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Registration } from '../../../registration.model';

@Injectable({
  providedIn: 'root'
})
export class BehaviourService {
  private registrations = new BehaviorSubject<Registration[]>([]);
  registrations$ = this.registrations.asObservable();

  addRegistration(registration: Registration) {
    const currentRegistrations = this.registrations.value;
    this.registrations.next([...currentRegistrations, registration]);
  }

  // public behavior = new BehaviorSubject<any>({
  //   firstname:'herbert',
  //   lastname:'Bello',
  //   age:'19',
  //   email:'bella@gmail.com'
  // });
}
