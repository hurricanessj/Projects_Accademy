// figlio.component.ts
import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-figlio',
  template: `<p>{{ sharedMessage }}</p>`
})
export class FiglioComponent extends BaseComponent {
  constructor() {
    super();
    this.log('Messaggio dal componente figlio');
  }
}
