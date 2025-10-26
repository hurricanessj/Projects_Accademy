import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormlibriComponent } from './formlibri/formlibri.component';
import { authGuard } from './guard/auth.guard';
import { adminGuard } from './guard/admin.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'crea', component: FormlibriComponent, canActivate: [authGuard, adminGuard] },
  { path: 'modifica/:id', component: FormlibriComponent, canActivate: [authGuard, adminGuard] },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
