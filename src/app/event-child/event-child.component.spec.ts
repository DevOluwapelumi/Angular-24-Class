import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventChildComponent } from './event-child.component';

describe('EventChildComponent', () => {
  let component: EventChildComponent;
  let fixture: ComponentFixture<EventChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
