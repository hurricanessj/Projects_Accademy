import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { authGuard } from './guards/auth.guard';
import { adminGuard } from './guards/admin.guard';
import { ProjectsComponent } from './projects/projects.component';
import { FormprogettoComponent } from './formprogetto/formprogetto.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'projects', component: ProjectsComponent, canActivate: [authGuard]},
  { path: 'crea', component: FormprogettoComponent, canActivate: [authGuard, adminGuard]},
  { path: 'modifica/:id', component: FormprogettoComponent, canActivate: [authGuard, adminGuard]},
  {path:'', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
