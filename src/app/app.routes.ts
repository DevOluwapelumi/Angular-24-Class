import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DisplayContactComponent } from './display-contact/display-contact.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FooterComponent } from './footer/footer.component';
import { AllNewBlogComponent } from './all-new-blog/all-new-blog.component';
import { CultureBlogComponent } from './culture-blog/culture-blog.component';
import { BussinessBlogComponent } from './bussiness-blog/bussiness-blog.component';
import { LifestyleBlogComponent } from './lifestyle-blog/lifestyle-blog.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ServiceComponent } from './service/service.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { SettingsComponent } from './settings/settings.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { studentGuard } from './guards/student.guard';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';

export const routes: Routes = [
    {path:'', component:LandingPageComponent},
    {path:'nav', component:NavBarComponent},
    {path:'caro', component:CarouselComponent},
    {path:'foot', component:FooterComponent},
    {path:'new', component:AllNewBlogComponent},
    {path:'culture', component:CultureBlogComponent},
    {path:'bussiness', component:BussinessBlogComponent},
    {path:'lifestyle', component:LifestyleBlogComponent},
    {path:'details', component:ContactDetailsComponent},
    {path:'up', component:SignUpComponent},
    {path:'in', component:SignInComponent},
    {path:'board', component:DashBoardComponent },
    {path:'board', component:DashBoardComponent },
    {path:'driven', component:TemplateDrivenFormComponent},
    {path:'home', redirectTo:'', pathMatch:'full'},
    {path:'dashboard', children:[
        {path:'', component:DisplayContactComponent},
        {path:'deposit', component:LandingPageComponent},
    ]},
    { path: 'contact-details/:id', component:ContactDetailsComponent },
    {path:'display/:name', component:DisplayContactComponent},
    {path:'**', component:ErrorPageComponent},
    {path: 'dashboard', children:[
        {path:'', component:DashBoardComponent},
        {path:'settings', component:SettingsComponent}
    ], canActivate: [studentGuard]},
];
