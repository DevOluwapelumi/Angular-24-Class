import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventChildComponent } from '../event-child/event-child.component';

@Component({
  selector: 'app-event-parent',
  standalone: true,
  imports: [FormsModule, EventChildComponent],
  templateUrl: './event-parent.component.html',
  styleUrl: './event-parent.component.css'
})
export class EventParentComponent {
public text='';
public box='Blue';
public newtext='';
public data ='';

send(){
  this.newtext=this.text
  this.text='';
  console.log(this.newtext);
}
receiveResponse(data:any){
console.log(data);
this.data=data;
}
}
