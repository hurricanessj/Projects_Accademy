import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChisiamoComponent } from './chisiamo/chisiamo.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContattaciComponent } from './contattaci/contattaci.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'chisiamo', component: ChisiamoComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'contattaci', component: ContattaciComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
