import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

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
  imports: [FormsModule, CommonModule, RouterLink],
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
    let contactObj = {
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
  del(i:number){
    console.log(i);
    this.contactArray.splice(i,1) 
  }
}
