import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviourChild1Component } from './behaviour-child1.component';

describe('BehaviourChild1Component', () => {
  let component: BehaviourChild1Component;
  let fixture: ComponentFixture<BehaviourChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehaviourChild1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BehaviourChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
