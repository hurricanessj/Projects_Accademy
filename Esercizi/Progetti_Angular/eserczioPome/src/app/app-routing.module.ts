import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListalibriComponent } from './listalibri/listalibri.component';
import { FormComponent } from './form/form.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'lista', component: ListalibriComponent },
  { path: 'form', component: FormComponent },
  { path: '', component: HomeComponent}
 
 
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
 
export class AppRoutingModule { }