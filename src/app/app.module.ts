import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HeroService } from './hero.service';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HerodetailComponent } from './herodetail/herodetail.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HerodetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  AppRoutingModule
],
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
