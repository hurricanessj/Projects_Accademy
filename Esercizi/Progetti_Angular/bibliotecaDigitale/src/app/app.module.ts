import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { FormlibriComponent } from './formlibri/formlibri.component';
import { HomeComponent } from './home/home.component';
import { ListuserStatusComponent } from './listuser-status/listuser-status.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormlibriComponent,
    HomeComponent,
    ListuserStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
