import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ChisiamoComponent } from './chisiamo/chisiamo.component';
import { ProgettiComponent } from './progetti/progetti.component';
import { GalleryComponent } from './gallery/gallery.component';
import { FormsModule } from '@angular/forms';
import { DettagliComponent } from './dettagli/dettagli.component';
import { FormregistrazioneComponent } from './formregistrazione/formregistrazione.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import {HttpClientModule} from '@angular/common/http';
import { TasklistComponent } from './tasklist/tasklist.component';
import { FormtaskComponent } from './formtask/formtask.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';


import { MaterialModule } from './modules/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ChisiamoComponent,
    ProgettiComponent,
    GalleryComponent,
    DettagliComponent,
    FormregistrazioneComponent,
    RegistrazioneComponent,
    TasklistComponent,
    FormtaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
