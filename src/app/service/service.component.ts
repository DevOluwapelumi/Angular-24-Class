import { Component } from '@angular/core';
import { LandingpageService } from '../services/landingpage.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css'
})
export class ServiceComponent {
constructor(public service:LandingpageService){}
public user='Honey'
public number:number[]=[]
ngOnInit(){
  console.log(this.service.returnitem());
  console.log(this.service.returnnum());
  this.user=this.service.returnitem()
  this.number=this.service.returnnum()
  console.log(this.user);
  console.log(this.number);
  
  
}
}
