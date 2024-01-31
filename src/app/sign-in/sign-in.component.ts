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
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  messageType: 'success' | 'error' = 'success';

  isSuccessMessage() {
    return this.messageType === 'success';
  }
  
constructor(public routes:Router){}

public email=''
public password=''
public message: string = '';


public studentArray:StudentInterface[]=[]
ngOnInit(){
  this.studentArray=JSON.parse(localStorage['newstudents'])
  console.log(this.studentArray);
}
onSignIn(){
  let currentUser=this.studentArray.find((student, index)=>this.email==student.email && this.password==student.password)
  if(currentUser){
    localStorage.setItem('current_user', JSON.stringify(currentUser))
    this.message = 'Login successful! Redirecting...';

    // Set a timeout before navigating to the next page
    setTimeout(() => {
      this.routes.navigate(['board']);
    }, 2000); // Delay of 2000 milliseconds (2 seconds)
  } else {
    this.message = 'User not found';
  }
}
}
