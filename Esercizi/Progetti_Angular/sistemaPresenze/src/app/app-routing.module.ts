import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserstatusComponent } from './userstatus/userstatus.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'UserStatus', component: UserstatusComponent },
  { path: 'admin', component: AdminComponent },
  {path: 'home', component: HomeComponent},
  { path: 'header', component: HeaderComponent },
  {path:'', redirectTo: 'UserStatus', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
