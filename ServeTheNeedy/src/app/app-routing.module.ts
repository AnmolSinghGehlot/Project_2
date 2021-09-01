import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonateditemComponent } from './needy/donateditem/donateditem.component';
import { FeedbackComponent } from './needy/feedback/feedback.component';


import { HomeComponent } from './needy/home/home/home.component';
import { MainNavComponent } from './needy/main-nav/main-nav.component';
import { NeedyComponent } from './needy/needy.component';
import { RequestsComponent } from './needy/requests/requests.component';
import { SigninComponent } from './pages/pages/signin/signin.component';




const routes: Routes = [

  {
    path: "items",
    component: DonateditemComponent
  },
  
  {
    path: "home",
    component: HomeComponent
  },
  
  

  {
    path: 'needy ',
    component: NeedyComponent
    
  },
  
  
  {


    path: 'signin',
    component: SigninComponent
   

  },
  {
    path: 'notify',
  component: RequestsComponent
  },
  {
    path: 'feedback',
  component: FeedbackComponent
  },
{
  path: 'nav',
  component: MainNavComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule , ]
})
export class AppRoutingModule { }
