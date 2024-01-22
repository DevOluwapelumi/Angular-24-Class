import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
  imports: [FormsModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {

  public first_name=''
  public last_name=''
  public phone_number=''
  public address=''
  public gender=''
  public email=''

  public styles='form-control my-2 col-3'
  public contactArray:contactInterface[]=[]

  ngOnInit(){
    if(localStorage['contacts']){
      this.contactArray=JSON.parse(localStorage['contacts'])
      console.log(this.contactArray);
    }
  }
  addContact(){
    let contactObj: contactInterface = {
      firstname: this.first_name,
      lastname: this.last_name,
      phonenumber: this.phone_number,
      address: this.address,
      gender: this.gender,
      email: this.email,
    };

    this.contactArray.push(contactObj);
    console.log(this.contactArray);
    this.first_name = '';
    this.last_name = '';
    this.phone_number = '';
    this.address = '';
    this.gender = '';
    this.email = '';
    localStorage.setItem('contacts',JSON.stringify(this.contactArray))
  }
  editContact(index: number) {
    // Implement edit logic here
    console.log('Edit contact at index', index);
  }

  deleteContact(index: number) {
    // Implement delete logic here
    console.log('Delete contact at index', index);
  }

  viewContact(index: number) {
    // Implement view logic here
    console.log('View contact at index', index);
  }
}
