import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
interface Objectname{
  firstname: string,
  lastname: string,
  age:number
}
interface Objectname2{
  email: string,
  address: string,
  firstname: string
}
interface Objectname3{
  id: number,
  name: string,
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-class';
  
  public school:any=false

  public firstname='Pelumi'
  private lastname = 'Victor' //Property 'lastname' is private and only accessible within class 'AppComponent'.//
  public age = 30
  public boolean=true

  //TypeScript below...//
  public address:string='No 10, Ogbomoso, Oyo State, Nigeria'
  public email: string = 'victor16@gmail.com'
  public color: number = 70
  public aged:undefined | number | string |boolean
  
  // public obj1:Objectname={
  //   firstname: string,
  //   lastname: string,
  //   age:number
  // } = {
  //     firstname: 'Daniel',
  //     lastname: 'Segun',
  //     age: 70
  // }


  public obj1:Objectname={
    firstname: 'Daniel',
    lastname: 'Segun',
    age:70
  }
  public obj2:Objectname2={
    email: 'Daniel16@gmail.com',
    address: 'Ogbomoso',
    firstname:'Tolu'
  }

  public array1: number[] = [45, 724, 23, 232]
  public array2: string[] = ['Oyin', 'Lola', 'Samuel', 'Victor']

  public array3: Objectname3[] = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
  ]

  public mixedArray: (string | number | boolean)[] = ["Hello", 42, true, "World", false, 123];
  
  checkindex(index:number) {
    console.log(index);
    
  }

  ngOnInit() {
    // this.firstname='Tobi'
    // this.aged= 20
    // this.aged= 'Dev'
    // this.aged= 'false'
    console.log(this.firstname);
    
    console.log("Array3:");
    this.array3.forEach(array => {
    console.log(`id: ${array.id}, name: ${array.name}`);
});
    
    for (let i = 0; i < this.mixedArray.length; i++) {
      console.log(this.mixedArray[i]);
    };
    

  //TypeScript ---//
  //Union, Inference, Interface
  };
};

