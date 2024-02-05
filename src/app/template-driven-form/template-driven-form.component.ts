import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {

  firstname: string = '';
  lastname: string = '';
  email: string = '';
  address: string = '';
  password: string = '';
  age: number | null = null; // assuming age can be optional, use null for initialization
  gender: string = '';
  message: string = '';
  isSuccess: boolean = false;

  onSubmit() {
  }

  
  // constructor() {}

  // // Method to handle form submission
  // onSubmit(form: any): void {
  //   if (form.valid) {
  //     // Implement your submission logic here. For example:
  //     console.log('Form Data: ', form.value);
  //     // Assuming a service is called and returns a success response
  //     this.isSuccess = true; // Or handle based on actual response
  //     this.message = 'Registration successful!';
  //     // Reset the form if needed
  //     form.reset();
  //   } else {
  //     this.isSuccess = false;
  //     this.message = 'Please correct the errors and submit again.';
  //   }
  // }

  // // Utility method to determine message class
  // isSuccessMessage(): boolean {
  //   return this.isSuccess;
  // }
}
