import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FromComponent } from './from/from.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaComponent } from './lista/lista.component';
import { AttoriComponent } from './attori/attori.component';
import { DettagliComponent } from './dettagli/dettagli.component';
import { NewUserComponent } from './new-user/new-user.component';
import { DettagliNuovouserComponent } from './dettagli-nuovouser/dettagli-nuovouser.component';
 

@NgModule({
  declarations: [
    AppComponent,
    FromComponent,
    ListaComponent,
    AttoriComponent,
    DettagliComponent,
    NewUserComponent,
    DettagliNuovouserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
