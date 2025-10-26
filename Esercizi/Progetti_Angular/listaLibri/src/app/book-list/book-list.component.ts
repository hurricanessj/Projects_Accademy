import { Component } from '@angular/core';
import { Book } from '../Model/Book';
@Component({
  selector: 'app-book-list',
  standalone: false,
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {

  books: Book[] = [
    { title: '1984', author: 'George Orwell', year: 1949, price: 14.5, available: true },
    { title: 'Il piccolo principe', author: 'Antoine de Saint-Exupéry', year: 1943, price: 9.9, available: false },
    { title: 'La coscienza di Zeno', author: 'Italo Svevo', year: 1923, price: 12, available: true },
    { title: 'I Promessi Sposi', author: 'Alessandro Manzoni', year: 1842, price: 15.3, available: true },
    { title: 'Il nome della rosa', author: 'Umberto Eco', year: 1980, price: 19.9, available: false }
  ];

  onBookAdded(book: Book) {
    alert(`Libro aggiunto al carrello: ${book.title}`);
  }

}
