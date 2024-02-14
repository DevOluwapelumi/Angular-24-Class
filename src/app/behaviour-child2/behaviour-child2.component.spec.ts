import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviourChild2Component } from './behaviour-child2.component';

describe('BehaviourChild2Component', () => {
  let component: BehaviourChild2Component;
  let fixture: ComponentFixture<BehaviourChild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehaviourChild2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BehaviourChild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
