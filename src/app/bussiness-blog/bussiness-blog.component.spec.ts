import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinessBlogComponent } from './bussiness-blog.component';

describe('BussinessBlogComponent', () => {
  let component: BussinessBlogComponent;
  let fixture: ComponentFixture<BussinessBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BussinessBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BussinessBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
