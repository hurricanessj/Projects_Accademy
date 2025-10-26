import { Component } from '@angular/core';

@Component({
  selector: 'app-componente',
  standalone: false,
  templateUrl: './componente.component.html',
  styleUrl: './componente.component.css'
})
export class ComponenteComponent {

    title = "benvenuto";
  link1!: string;
  link2!: string;
  link3!: string;

  constructor() {
    this.link1 = "treni";
    this.link2 = "preferiti";
    this.link3 = "login";

  }

}
