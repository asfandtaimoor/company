import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import {Home2Component} from './home2/home2.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'home2', component:Home2Component},
  {path : 'about' , component:AboutComponent},
  {path : 'services' , component:ServicesComponent},
  {path : 'portfolio' , component:PortfolioComponent},
  {path : 'blog-list' , component:BlogListComponent},
  {path : 'blog-detail' , component:BlogDetailComponent},
  {path : 'contact' , component:ContactComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
