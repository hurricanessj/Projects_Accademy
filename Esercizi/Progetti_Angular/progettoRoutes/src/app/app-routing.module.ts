import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DesignComponent } from './design/design.component';
import { DevunoComponent } from './devuno/devuno.component';
import { DevdueComponent } from './devdue/devdue.component';
import { DevComponent } from './dev/dev.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about/', component: AboutComponent },
  { path: 'about/:id', component: AboutComponent },
  { path: 'services/design', component: DesignComponent },
  {
    path: 'services/dev', component: DevComponent, children: [
      { path: 'uno', component: DevunoComponent },
      { path: 'uno', component: DevdueComponent },
    ]
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
