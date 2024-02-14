import { Component } from '@angular/core';
import { BehaviourChild1Component } from '../behaviour-child1/behaviour-child1.component';
import { BehaviourChild2Component } from '../behaviour-child2/behaviour-child2.component';

@Component({
  selector: 'app-behaviour-subject-parent',
  standalone: true,
  imports: [BehaviourChild1Component, BehaviourChild2Component],
  templateUrl: './behaviour-subject-parent.component.html',
  styleUrl: './behaviour-subject-parent.component.css'
})
export class BehaviourSubjectParentComponent {

}
