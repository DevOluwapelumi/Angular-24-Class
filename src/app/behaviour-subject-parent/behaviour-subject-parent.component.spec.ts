import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviourSubjectParentComponent } from './behaviour-subject-parent.component';

describe('BehaviourSubjectParentComponent', () => {
  let component: BehaviourSubjectParentComponent;
  let fixture: ComponentFixture<BehaviourSubjectParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehaviourSubjectParentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BehaviourSubjectParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
