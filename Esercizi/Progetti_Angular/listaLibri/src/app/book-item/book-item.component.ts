import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../Model/Book';

@Component({
  selector: 'app-book-item',
  standalone: false,
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.css'
})
export class BookItemComponent {
  @Input() book!: Book;
  @Output() addToCart = new EventEmitter<Book>();

  onAddToCart() {
    this.addToCart.emit(this.book);
  }
}
