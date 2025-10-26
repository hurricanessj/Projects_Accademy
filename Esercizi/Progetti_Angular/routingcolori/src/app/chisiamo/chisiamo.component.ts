import { Component, ViewChild } from '@angular/core';
import { ColorService } from '../sevice/color.service';
import { Subscription } from 'rxjs';
import { Renderer2 } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Auto } from '../model/Auto';
import { NomeaziendaComponent } from '../nomeazienda/nomeazienda.component';
@Component({
  selector: 'app-chisiamo',
  standalone: false,
  templateUrl: './chisiamo.component.html',
  styleUrl: './chisiamo.component.css'
})

export class ChisiamoComponent {
  private subscription!: Subscription;
  nomeAzienda = "3f";
  constructor(private colorService: ColorService, private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    this.subscription = this.colorService.coloreCorrente$.subscribe(colore => {
      this.renderer.setStyle(this.el.nativeElement.querySelector('.wrapper'), 'background-color', colore);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  @ViewChild
  (NomeaziendaComponent) autoComponent!: NomeaziendaComponent;

}
