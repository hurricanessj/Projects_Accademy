import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MioComponenteComponent } from './mio-componente/mio-componente.component';
import { SalutiComponent } from './saluti/saluti.component';
import { ComponenteConInputComponent } from './componente-con-input/componente-con-input.component';
import { ComponenteConOutputComponent } from './componente-con-output/componente-con-output.component';
import { ComponenteFiglioSalutaComponent } from './componente-figlio-saluta/componente-figlio-saluta.component';
import { FiglioComponent } from './figlio/figlio.component';
import { FormsModule } from '@angular/forms';
import { PadreComponent } from './padre/padre.component';
import { ArrayColoriComponent } from './array-colori/array-colori.component';
@NgModule({
  declarations: [
    AppComponent,
    MioComponenteComponent,
    SalutiComponent,
    ComponenteConInputComponent,
    ComponenteConOutputComponent,
    ComponenteFiglioSalutaComponent,
    FiglioComponent,
    PadreComponent,
    ArrayColoriComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
