import { Component } from '@angular/core';
import { BehaviourService } from '../services/behaviour.service';

@Component({
  selector: 'app-behaviour-child2',
  standalone: true,
  imports: [],
  templateUrl: './behaviour-child2.component.html',
  styleUrl: './behaviour-child2.component.css'
})
export class BehaviourChild2Component {
  constructor(public behavior:BehaviourService){}
  public behavior_obj:any={}

  ngOnInit(){
    this.behavior.behavior.subscribe(response=>{
      this.behavior_obj=response
      console.log(this.behavior_obj);
    })
    
  }
}
