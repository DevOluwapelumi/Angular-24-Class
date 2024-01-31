import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface ContactInterface {
  firstname: string;
  lastname: string;
  phonenumber: string;
  address: string;
  gender: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class LandingpageService {
  private contactSource = new BehaviorSubject<any>(null);
  selectedContact$ = this.contactSource.asObservable();

  constructor() { }

  selectContact(contact: any) {
    this.contactSource.next(contact);
  }

  public item = 'My name is Oluwapelumi'
  public numberArray = [0, 1, 2, 3, 4, 5, 6, 7]

  returnitem(){
    return this.item
  }

  public returnnum(){
    return this.numberArray
  }

  getContacts(): ContactInterface[] {
    const contacts = localStorage.getItem('contacts');
    return contacts ? JSON.parse(contacts) : [];
  }

  addContact(contact: ContactInterface): void {
    const contacts = this.getContacts();
    contacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  deleteContact(index: number): void {
    let contacts = this.getContacts();
    contacts.splice(index, 1);
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }

}
