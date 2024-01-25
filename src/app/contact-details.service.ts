import { Injectable } from '@angular/core';

interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  // ... other fields
}

@Injectable({
  providedIn: 'root'
})
export class ContactDetailsService {

  private contacts: Contact[] = [
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Jane', lastName: 'Doe' },
    // ... more contacts
  ];

  constructor() { }
  getContacts(): Contact[] {
    return this.contacts;
  }

  getContactById(id: number): Contact {
    return this.contacts.find(contact => contact.id === id) || this.getDefaultContact();
  }
  
  private getDefaultContact(): Contact {
    // Return a default Contact object or throw an error
    return { id: 0, firstName: 'Unknown', lastName: 'Unknown' };
    // or throw new Error('Contact not found');
  }
  
}
