import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaprodottiComponent } from './listaprodotti/listaprodotti.component';
import { OrdiniComponent } from './ordini/ordini.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'Ordini', component: OrdiniComponent },
  { path: 'ListaOrdini', component: ListaprodottiComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
