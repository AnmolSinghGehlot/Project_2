import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgoLoginComponent } from './ngo-login/ngo-login.component';
import { ListMembersComponent } from './list-members/list-members.component';
import { NgoMainComponent } from './ngo-main/ngo-main.component';
import { DonatorsComponent } from './donators/donators.component';
import { RecipientComponent } from './recipient/recipient.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MemberComponent } from './member/member.component';

@NgModule({
  declarations: [
    AppComponent,
    NgoLoginComponent,
    ListMembersComponent,
    NgoMainComponent,
    DonatorsComponent,
    RecipientComponent,
    AboutUsComponent,
    FeedbackComponent,
    MemberComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
