import { Component } from '@angular/core';
import { BehaviourChild1Component } from '../behaviour-child1/behaviour-child1.component';
import { BehaviourChild2Component } from '../behaviour-child2/behaviour-child2.component';
import { BehaviourService } from '../services/behaviour.service';
import { Registration } from '../../../registration.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-behaviour-subject-parent',
  standalone: true,
  imports: [BehaviourChild1Component, BehaviourChild2Component, FormsModule],
  templateUrl: './behaviour-subject-parent.component.html',
  styleUrl: './behaviour-subject-parent.component.css'
})
export class BehaviourSubjectParentComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  gender: string = '';
  
  constructor(private registrationService: BehaviourService) {}

  submitRegistration() {
    const userData = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      gender: this.gender,
    };

    // Serialize userData object to a string
    const userDataSerialized = JSON.stringify(userData);

    // Save serialized data to localStorage
    localStorage.setItem('userData', userDataSerialized);

    // Optionally, clear the form or provide feedback to the user
    alert('Registration Successful!');
    this.clearForm();
  }

  clearForm() {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.gender = '';
  }
}
