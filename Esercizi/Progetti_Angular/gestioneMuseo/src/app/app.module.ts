import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardopereComponent } from './cardsopere/cardopere.component';
import { HttpClientModule } from '@angular/common/http';
import { FormopereComponent } from './formopere/formopere.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { DettagliOperaComponent } from './dettagli-opera/dettagli-opera.component';
@NgModule({
  declarations: [
    AppComponent,
    CardopereComponent,
    FormopereComponent,
    DettagliOperaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
