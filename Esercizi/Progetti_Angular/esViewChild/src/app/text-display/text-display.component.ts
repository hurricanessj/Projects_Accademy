import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-text-display',
  standalone: false,
  templateUrl: './text-display.component.html',
  styleUrl: './text-display.component.css'
})
export class TextDisplayComponent {
  @ViewChild('textInput') inputRef!: ElementRef<HTMLInputElement>;
  @ViewChild('outputParagraph') paragraphRef!: ElementRef<HTMLParagraphElement>;

  showText(): void {
    const text = this.inputRef.nativeElement.value;
    this.paragraphRef.nativeElement.textContent = text;
  }
}
