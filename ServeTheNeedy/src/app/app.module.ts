import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonatorComponent } from './donator/donator.component';
import { NGOMemberComponent } from './ngo-member/ngo-member.component';
import { NeedyComponent } from './needy/needy.component';

import { HomeComponent } from './needy/home/home/home.component';


import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SidebarModule } from 'ng-sidebar';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { DonateditemComponent } from './needy/donateditem/donateditem.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MainNavComponent } from './needy/main-nav/main-nav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SigninComponent } from './pages/pages/signin/signin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DonationService } from './needy/donation.service';
import { LoginService } from './login.service';
import { ReactiveFormsModule } from '@angular/forms';
import {ToastrModule, ToastrService}from'ngx-toastr';
import { RequestsComponent } from './needy/requests/requests.component';
import { FeedbackComponent } from './needy/feedback/feedback.component';









@NgModule({
  declarations: [
    AppComponent,
    DonatorComponent,
    NGOMemberComponent,
    NeedyComponent,
   
     HomeComponent,
     
    
     DonateditemComponent,
    
     MainNavComponent,
     SigninComponent,
     RequestsComponent,
     FeedbackComponent ,
     
   
     
   
    
  
    
    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    SidebarModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule ,
    MatSnackBarModule,
    MatCardModule,
    FlexLayoutModule ,
    FormsModule, 
    HttpClientModule,
    ReactiveFormsModule,
   
    ToastrModule.forRoot({
      positionClass :'toast-bottom-center'
    }),

   
 
   

    
  ],
  providers: [
    DonationService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
