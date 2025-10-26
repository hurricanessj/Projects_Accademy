import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SendmailComponent } from './sendmail/sendmail.component';
import { FormsModule } from '@angular/forms';
import { RecivemailComponent } from './recivemail/recivemail.component';

@NgModule({
  declarations: [
    AppComponent,
    SendmailComponent,
    RecivemailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
