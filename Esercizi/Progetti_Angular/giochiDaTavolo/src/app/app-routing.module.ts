import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListagiochiComponent } from './listagiochi/listagiochi.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'gameList', component: ListagiochiComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
