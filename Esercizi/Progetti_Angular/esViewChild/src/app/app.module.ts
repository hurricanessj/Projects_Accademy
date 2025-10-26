import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FiglioComponent } from './figlio/figlio.component';
import { CampoinputComponent } from './campoinput/campoinput.component';
import { ColoreComponent } from './colore/colore.component';
import { TextDisplayComponent } from './text-display/text-display.component';

@NgModule({
  declarations: [
    AppComponent,
    FiglioComponent,
    CampoinputComponent,
    ColoreComponent,
    TextDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
