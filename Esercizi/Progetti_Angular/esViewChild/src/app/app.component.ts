import { Component, ViewChild } from '@angular/core';
import { FiglioComponent } from './figlio/figlio.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'esViewChild';
  
  @ViewChild(FiglioComponent) figlioComp!: FiglioComponent;

  cambiaColoreNelFiglio() {
    this.figlioComp.cambiaColoreParagrafo('red');
  }
}
