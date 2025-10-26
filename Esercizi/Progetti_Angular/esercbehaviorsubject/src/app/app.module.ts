import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Figlio1Component } from './figlio1/figlio1.component';
import { Figlio2Component } from './figlio2/figlio2.component';
import { MaestraComponent } from './maestra/maestra.component';
import { AlunnoComponent } from './alunno/alunno.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    Figlio1Component,
    Figlio2Component,
    MaestraComponent,
    AlunnoComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
