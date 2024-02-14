import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators,  } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-three-forms-object',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './three-forms-object.component.html',
  styleUrl: './three-forms-object.component.css'
})
export class ThreeFormsObjectComponent implements OnInit {

  form!: FormGroup;
  currentStep = 1;
  isSubmitted = false; 
  submissions: any[] = [];
  

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.loadSubmissions();
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(4)]], 
      password: ['', [Validators.required, Validators.minLength(6)]] 
    });
  }


  nextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
  submit() {
    console.log(this.form.value);
    console.log('Submit method called');
    if (this.form.valid) {
      this.isSubmitted = true;
      console.log('Form is valid, isSubmitted set to:', this.isSubmitted);
      console.log('Form values:', this.form.value);
  
      const existingSubmissionsString = localStorage.getItem('formSubmissions');
      const existingSubmissions = existingSubmissionsString ? JSON.parse(existingSubmissionsString) : [];
  
      existingSubmissions.push(this.form.value);
  
      localStorage.setItem('formSubmissions', JSON.stringify(existingSubmissions));
  
      console.log('New form data added to localStorage.');
    } else {
      console.log('Form is invalid');
    }
  }
  

  loadFormData() {
    const formDataString = localStorage.getItem('formData');
    
    if (formDataString) {
      const formData = JSON.parse(formDataString);
      this.form.setValue(formData);
      console.log('Form data loaded from localStorage:', formData);
    } else {
      console.log('No form data found in localStorage.');
    }
  }
  

  isValidCurrentStep(): boolean {
    switch (this.currentStep) {
      case 1:
        return !!(this.form.get('firstName')?.valid && this.form.get('lastName')?.valid && this.form.get('email')?.valid);
      case 2:
        return !!(this.form.get('address')?.valid && this.form.get('city')?.valid && this.form.get('state')?.valid);
      case 3:
        return !!(this.form.get('username')?.valid && this.form.get('password')?.valid);
      default:
        return false;
    }
  }
  
  loadSubmissions() {
    const submissionsString = localStorage.getItem('formSubmissions');
    this.submissions = submissionsString ? JSON.parse(submissionsString) : [];
  }

  // Inside your component class

deleteSubmission(index: number) {
  this.submissions.splice(index, 1); // Remove the submission from the array
  localStorage.setItem('formSubmissions', JSON.stringify(this.submissions)); // Update localStorage
}

// This method is a placeholder to demonstrate how you might begin the edit process.
// The actual implementation will depend on your app's requirements.
editSubmission(index: number) {
  console.log('Editing submission at index:', index);
  // You would typically set up an edit form and populate it with the submission's data here.
  // This could involve setting up a separate component or a modal dialog with the form fields pre-filled.
}

  
}
