import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiglioComponent } from './figlio/figlio.component';
import { ListautentiComponent } from './listautenti/listautenti.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IscrizioneComponent } from './iscrizione/iscrizione.component';
import { ElettrodomesticiComponent } from './elettrodomestici/elettrodomestici.component';
import { ZooComponent } from './zoo/zoo.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    FiglioComponent,
    ListautentiComponent,
    FormComponent,
    IscrizioneComponent,
    ElettrodomesticiComponent,
    ZooComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
