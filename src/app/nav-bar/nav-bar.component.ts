import { Component } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { FooterComponent } from '../footer/footer.component';
import { AllNewBlogComponent } from '../all-new-blog/all-new-blog.component';
import { CultureBlogComponent } from '../culture-blog/culture-blog.component';
import { BussinessBlogComponent } from '../bussiness-blog/bussiness-blog.component';
import { LifestyleBlogComponent } from '../lifestyle-blog/lifestyle-blog.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CarouselComponent, FooterComponent, AllNewBlogComponent, CultureBlogComponent, BussinessBlogComponent, LifestyleBlogComponent],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['/src/assets/css/main.css', '/src/assets/css/variables.css', '/src/assets/vendor/swiper/swiper-bundle.min.css', '/src/assets/vendor/bootstrap-icons/bootstrap-icons.css', '/src/assets/vendor/bootstrap-icons/bootstrap-icons.min.css'],
})
export class NavBarComponent {
    
}
