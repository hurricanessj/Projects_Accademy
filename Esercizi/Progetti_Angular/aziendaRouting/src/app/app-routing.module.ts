import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChisiamoComponent } from './chisiamo/chisiamo.component';
import { ProgettiComponent } from './progetti/progetti.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DettagliComponent } from './dettagli/dettagli.component';
import { FormregistrazioneComponent } from './formregistrazione/formregistrazione.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'chisiamo', component: ChisiamoComponent },
  { path: 'progetti', component: ProgettiComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'dettagli/:id', component: DettagliComponent },
  { path: 'accesso', component: FormregistrazioneComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
