import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';


const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path : 'about' , component:AboutComponent},
  {path : 'services' , component:ServicesComponent},
  {path : 'portfolio' , component:PortfolioComponent},
  {path : 'contact' , component:ContactComponent},
  
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
