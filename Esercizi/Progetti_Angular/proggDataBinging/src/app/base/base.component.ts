import { Component } from '@angular/core';

@Component({
  selector: 'app-base',
  standalone: false,
  templateUrl: './base.component.html',
  styleUrl: './base.component.css'
})
export class BaseComponent {
  sharedMessage = 'Ciao da BaseComponent';

  log(msg: string) {
    console.log(`[BaseComponent] ${msg}`);
  }
}
