import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ContactDetailsComponent } from '../contact-details/contact-details.component';
import { LandingpageService} from '../services/landingpage.service';

interface contactInterface{
  firstname:string,
  lastname:string,
  phonenumber:string,
  address:string,
  gender:string,
  email:string,
}

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, ContactDetailsComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {
  public first_name: string = '';
  public last_name: string = '';
  public phone_number: string = '';
  public address: string = '';
  public gender: string = '';
  public email: string = '';
  public contactArray: contactInterface[] = [];

  constructor(private landingpageService: LandingpageService){}

  ngOnInit() {
    this.loadContacts();
    this.contactArray = this.landingpageService.getContacts();
    console.log(this.contactArray);
  }

  loadContacts(): void {
    this.contactArray = this.landingpageService.getContacts();
  }

  addContact() {
    let contactObj = {
      firstname: this.first_name,
      lastname: this.last_name,
      phonenumber: this.phone_number,
      address: this.address,
      gender: this.gender,
      email: this.email,
    };

    this.landingpageService.addContact(contactObj);
    this.resetForm();
    this.contactArray = this.landingpageService.getContacts(); // Refresh the list
  }

  del(i: number) {
    this.landingpageService.deleteContact(i);
    this.contactArray = this.landingpageService.getContacts(); // Refresh the list
  }
  viewContact(contact: any) {
    this.landingpageService.selectContact(contact);
  }
  

  resetForm() {
    this.first_name = '';
    this.last_name = '';
    this.phone_number = '';
    this.address = '';
    this.gender = '';
    this.email = '';
  }


  // public selectedIndex: number | null = null;


  // public first_name=''
  // public last_name=''
  // public phone_number=''
  // public address=''
  // public gender=''
  // public email=''

  public styles='form-control my-2 col-3'
  // public contactArray:contactInterface[]=[]

//   ngOnInit(){
//     if(localStorage['contacts']){
//       this.contactArray=JSON.parse(localStorage['contacts'])
//       console.log(this.contactArray);
//     }
//   }
//   addContact(){
//     let contactObj = {
//       firstname: this.first_name,
//       lastname: this.last_name,
//       phonenumber: this.phone_number,
//       address: this.address,
//       gender: this.gender,
//       email: this.email,
//     };

//     this.contactArray.push(contactObj);
//     console.log(this.contactArray);
//     this.first_name = '';
//     this.last_name = '';
//     this.phone_number = '';
//     this.address = '';
//     this.gender = '';
//     this.email = '';
//     localStorage.setItem('contacts',JSON.stringify(this.contactArray))
//   }

//   selectedContact: any; // To store the selected contact details

//   view(i: number) {
//     this.selectedContact = this.contactArray[i];
//     this.selectedIndex = i;
//   }


//   del(i: number) {
//     try {
//       console.log("Deleting contact at index: ", i);
//       this.contactArray.splice(i, 1);
//       localStorage.setItem('contacts', JSON.stringify(this.contactArray));
//       console.log("Updated contacts: ", this.contactArray);
//     } catch (error) {
//       console.error("Error updating contacts in localStorage", error);
//     }
//   }
// updateContacts(updatedContacts: any[]) {
//   this.contactArray = updatedContacts;
// }

}
