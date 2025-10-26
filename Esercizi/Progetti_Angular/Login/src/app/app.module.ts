import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListaCandidatiComponent } from './lista-candidati/lista-candidati.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { LoginHomeComponent } from './login-home/login-home.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { ListaOfferteComponent } from './lista-offerte/lista-offerte.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListaCandidatiComponent,
    RegisterComponent,
    AdminHomeComponent,
    LoginHomeComponent,
    UserHomeComponent,
    ListaOfferteComponent
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
