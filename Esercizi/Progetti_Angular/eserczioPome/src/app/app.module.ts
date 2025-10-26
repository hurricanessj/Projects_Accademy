import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListalibriComponent } from './listalibri/listalibri.component';
import { FormComponent } from './form/form.component';
import { NavComponent } from './nav/nav.component';
 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListalibriComponent,
    FormComponent,
    NavComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
