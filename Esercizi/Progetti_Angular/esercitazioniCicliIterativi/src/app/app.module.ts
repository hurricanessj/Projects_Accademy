import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StampaelementiComponent } from './stampaelementi/stampaelementi.component';
import { StampapariComponent } from './stampapari/stampapari.component';
import { CercaelementoComponent } from './cercaelemento/cercaelemento.component';
import { FiltrolengthComponent } from './filtrolength/filtrolength.component';
import { SommaComponent } from './somma/somma.component';
import { Cercaelemento2Component } from './cercaelemento2/cercaelemento2.component';
import { ContanomiperletteraComponent } from './contanomiperlettera/contanomiperlettera.component';
import { MaggiorenniComponent } from './maggiorenni/maggiorenni.component';
import { ProdottoEconomicoComponent } from './prodotto-economico/prodotto-economico.component';
import { OrdiniComponent } from './ordini/ordini.component';
import { ClientiMilanoComponent } from './clienti-milano/clienti-milano.component';
import { LibropagineComponent } from './libropagine/libropagine.component';
import { EventiFuturiComponent } from './eventi-futuri/eventi-futuri.component';
import { FormsComponent } from './forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScadenzaComponent } from './scadenza/scadenza.component';
import { ProdottifinitiComponent } from './prodottifiniti/prodottifiniti.component';
import { NonscadutiComponent } from './nonscaduti/nonscaduti.component';
import { CheckacquistabiliComponent } from './checkacquistabili/checkacquistabili.component';
import { MediaComponent } from './media/media.component';
import { LibriComponent } from './libri/libri.component';
import { EventiweekComponent } from './eventiweek/eventiweek.component';

@NgModule({
  declarations: [
    AppComponent,
    StampaelementiComponent,
    StampapariComponent,
    CercaelementoComponent,
    FiltrolengthComponent,
    SommaComponent,
    Cercaelemento2Component,
    ContanomiperletteraComponent,
    MaggiorenniComponent,
    ProdottoEconomicoComponent,
    OrdiniComponent,
    ClientiMilanoComponent,
    LibropagineComponent,
    EventiFuturiComponent,
    FormsComponent,
    ScadenzaComponent,
    ProdottifinitiComponent,
    NonscadutiComponent,
    CheckacquistabiliComponent,
    MediaComponent,
    LibriComponent,
    EventiweekComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
