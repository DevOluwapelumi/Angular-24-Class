import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviourService } from '../services/behaviour.service';

@Component({
  selector: 'app-behaviour-child1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './behaviour-child1.component.html',
  styleUrl: './behaviour-child1.component.css'
})
export class BehaviourChild1Component {
  constructor (public behavior: BehaviourService){}
  public behavior_array: any=[
    {
      firstname:'Johnson',
      lastname:'Isreal',
      age:'40',
      email:'Johnson@gmail.com'
    },
    {
      firstname:'Markson',
      lastname:'Jay',
      age:'20',
      email:'Markson@gmail.com'
    },
    {
      firstname:'Captain',
      lastname:'Holland',
      age:'70',
      email:'Captain@gmail.com'
    },
  ]

  sendlist(list:any){
    this.behavior.behavior.next(list)
  }
}
