import { Component,  ElementRef, Renderer2} from '@angular/core';
import { ColorService } from '../sevice/color.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-contattaci',
  standalone: false,
  templateUrl: './contattaci.component.html',
  styleUrl: './contattaci.component.css'
})
export class ContattaciComponent {
  private subscription!: Subscription;
  constructor(private colorService: ColorService, private renderer: Renderer2,  private el: ElementRef) {}

  ngOnInit(): void {
    this.subscription = this.colorService.coloreCorrente$.subscribe(colore => {
      const wrapper = this.el.nativeElement.querySelector('.wrapper');
      this.renderer.setStyle(wrapper, 'background-color', colore);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

