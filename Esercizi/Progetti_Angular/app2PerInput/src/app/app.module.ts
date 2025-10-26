import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtenteComponent } from './utente/utente.component';
import { LowercaseComponent } from './lowercase/lowercase.component';
import { UppercaseComponent } from './uppercase/uppercase.component';
import { PannelloComponent } from './pannello/pannello.component';
import { TelefonoComponent } from './telefono/telefono.component';
import { SquilloComponent } from './squillo/squillo.component';
import { RubricaComponent } from './rubrica/rubrica.component';
import { MenuComponent } from './menu/menu.component';
import { ProgettiComponent } from './progetti/progetti.component';
import { PadreComponent } from './padre/padre.component';
import { FiglioComponent } from './figlio/figlio.component';
import { CaPipeComponent } from './ca-pipe/ca-pipe.component';
import { MomentPipe } from './pipes/moment.pipe';
import { BkgDirective } from './direttive/bkg.directive';
import { FiltroPipe } from './pipes/filtro.pipe';
import { FilmComponent } from './film/film.component';


@NgModule({
  declarations: [
    AppComponent,
    UtenteComponent,
    LowercaseComponent,
    UppercaseComponent,
    PannelloComponent,
    TelefonoComponent,
    SquilloComponent,
    RubricaComponent,
    MenuComponent,
    ProgettiComponent,
    PadreComponent,
    FiglioComponent,
    CaPipeComponent,
    MomentPipe,
    BkgDirective,
    FiltroPipe,
    FilmComponent,

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
