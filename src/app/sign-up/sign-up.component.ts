import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface StudentInterface{
  firstname: string,
  lastname: string,
  email: string,
  address: string,
  password: string,
  age: string,
  gender: string,
}

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  messageType: 'success' | 'error' = 'success';

  isSuccessMessage() {
    return this.messageType === 'success';
  }

constructor(public routes:Router){}
public firstname=''
public lastname=''
public age=''
public email=''
public password=''
public address=''
public gender=''
public message =''

public studentArray:StudentInterface[]=[]
ngOnInit(){
  this.studentArray=JSON.parse(localStorage.getItem('newstudents')!)
}

onSubmit(){
let studentObj:StudentInterface={
  firstname:this.firstname,
  lastname:this.lastname,
  email:this.email,
  address:this.address,
  password:this.password,
  age:this.age,
  gender:this.gender,
}
if (!this.studentArray) {
  this.studentArray = [];
}

this.studentArray.push(studentObj)
localStorage.setItem('newstudents', JSON.stringify(this.studentArray))
// alert("Account Created Successfully!")

this.message = 'Registration Successful';

setTimeout(() => {
  this.routes.navigate(['/in']).catch(err => {
    console.error('Navigation Error:', err);
    this.message = 'Navigation failed!';
  });
}, 3000);
}
}
