import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { DesignComponent } from './design/design.component';
import { DevComponent } from './dev/dev.component';
import { AboutComponent } from './about/about.component';
import { DevunoComponent } from './devuno/devuno.component';
import { DevdueComponent } from './devdue/devdue.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    DesignComponent,
    DevComponent,
    AboutComponent,
    DevunoComponent,
    DevdueComponent
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
