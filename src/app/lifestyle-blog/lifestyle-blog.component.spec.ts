import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifestyleBlogComponent } from './lifestyle-blog.component';

describe('LifestyleBlogComponent', () => {
  let component: LifestyleBlogComponent;
  let fixture: ComponentFixture<LifestyleBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifestyleBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LifestyleBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
