import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayContactComponent } from './display-contact.component';

describe('DisplayContactComponent', () => {
  let component: DisplayContactComponent;
  let fixture: ComponentFixture<DisplayContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayContactComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
