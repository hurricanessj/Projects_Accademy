import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AlunnoComponent } from './alunno/alunno.component';
import { MaestraComponent } from './maestra/maestra.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'alunno', component: AlunnoComponent },
  { path: 'maestra', component: MaestraComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
