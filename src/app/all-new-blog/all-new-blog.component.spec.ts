import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllNewBlogComponent } from './all-new-blog.component';

describe('AllNewBlogComponent', () => {
  let component: AllNewBlogComponent;
  let fixture: ComponentFixture<AllNewBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllNewBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllNewBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
