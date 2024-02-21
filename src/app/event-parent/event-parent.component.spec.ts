import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventParentComponent } from './event-parent.component';

describe('EventParentComponent', () => {
  let component: EventParentComponent;
  let fixture: ComponentFixture<EventParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventParentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
