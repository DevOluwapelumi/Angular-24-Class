import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-display-contact',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './display-contact.component.html',
  styleUrl: './display-contact.component.css'
})
export class DisplayContactComponent { 
constructor(public activated:ActivatedRoute, public routes:Router){}
ngOnInit(){
  console.log(this.activated.snapshot.params['name']);
}
check(){
this.routes.navigate(['home'])
}
}
