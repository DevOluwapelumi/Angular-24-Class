import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeFormsObjectComponent } from './three-forms-object.component';

describe('ThreeFormsObjectComponent', () => {
  let component: ThreeFormsObjectComponent;
  let fixture: ComponentFixture<ThreeFormsObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThreeFormsObjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThreeFormsObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
