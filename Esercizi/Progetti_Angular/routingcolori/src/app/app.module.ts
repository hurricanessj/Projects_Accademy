import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ChisiamoComponent } from './chisiamo/chisiamo.component';
import { GalleryComponent } from './gallery/gallery.component';
import { InformazioniComponent } from './informazioni/informazioni.component';
import { HeaderComponent } from './header/header.component';
import { ContattaciComponent } from './contattaci/contattaci.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { NomeaziendaComponent } from './nomeazienda/nomeazienda.component';
import { VisualizzaImgComponent } from './visualizza-img/visualizza-img.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ChisiamoComponent,
    GalleryComponent,
    InformazioniComponent,
    HeaderComponent,
    ContattaciComponent,
    FooterComponent,
    HomeComponent,
    NomeaziendaComponent,
    VisualizzaImgComponent
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
