import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  
  constructor(public formbuilder:FormBuilder){}
  public formone=this.formbuilder.group({
    firstname:['', Validators.required],
    lastname:['', Validators.maxLength(10)],
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.maxLength(8)]],
    age:['', Validators.required],
  })

  onSubmit() {
    // console.log(this.forms.value);
    // this.forms.controls['firstname'].setValue('')
    // this.forms.controls['lastname'].setValue('')
    // this.forms.controls['age'].setValue('')
    // this.forms.controls['email'].setValue('')
    // this.forms.controls['password'].setValue('') 
  }

  ngOnInit(){
    console.log(this.formone.value['firstname']);
  }
}
