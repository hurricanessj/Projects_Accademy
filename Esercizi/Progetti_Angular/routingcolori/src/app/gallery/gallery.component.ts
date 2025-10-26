import { Component, ElementRef, OnInit, OnDestroy, Renderer2} from '@angular/core';
import { Subscription } from 'rxjs';
import { ColorService } from '../sevice/color.service';
@Component({
  selector: 'app-gallery',
  standalone: false,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
 private subscription!: Subscription;

  constructor(private colorService: ColorService,  private renderer: Renderer2, private el: ElementRef) {}

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
