import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CultureBlogComponent } from './culture-blog.component';

describe('CultureBlogComponent', () => {
  let component: CultureBlogComponent;
  let fixture: ComponentFixture<CultureBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CultureBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CultureBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
