import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-class';

  public firstname='Pelumi'
  private lastname = 'Victor' //Property 'lastname' is private and only accessible within class 'AppComponent'.//
  public age = 30
  public boolean=true

  //TypeScript below...//
  public address:string='No 10, Ogbomoso, Oyo State, Nigeria'
  public email: string = 'victor16@gmail.com'
  public color: number = 70
  public aged:undefined | number | string |boolean
  
  ngOnInit() {
    // this.firstname='Tobi'
    // this.aged= 20
    // this.aged= 'Dev'
    // this.aged= 'false'
    console.log(this.firstname);
  }

  //TypeScript ---//
  //Union, Inference, Interface
}
