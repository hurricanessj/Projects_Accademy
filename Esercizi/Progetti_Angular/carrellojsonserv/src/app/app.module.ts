import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaprodottiComponent } from './listaprodotti/listaprodotti.component';
import { CarrelloComponent } from './carrello/carrello.component'
import { ReactiveFormsModule } from '@angular/forms';
import { FormProdottiComponent } from './form/form.component'; 

@NgModule({
  declarations: [
    AppComponent,
    ListaprodottiComponent,
    CarrelloComponent,
    FormProdottiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
