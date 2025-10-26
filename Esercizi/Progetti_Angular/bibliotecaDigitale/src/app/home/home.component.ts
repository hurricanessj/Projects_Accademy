import { Component } from '@angular/core';
import { Book } from '../models/Book';
import { LibriService } from '../service/libri.service';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  bookList: Book[] = [];
  selectedBook: Book | null = null

  constructor(private libriService: LibriService, private router: Router, protected authService: AuthService) { }

  ngOnInit() {
    this.libriService.books$.subscribe(books => {
      this.bookList = books;
    });
  }

  saveBook(book: Book) {
    if (book.id) {
      this.libriService.updateBook(book.id , book).subscribe();
    } else {

      const bookToAdd: Omit<Book, 'id'> = {
        title: book.title,
        author: book.author,
        description: book.description,
        isOnline: book.isOnline
      };
      
      this.libriService.addBook(bookToAdd as Book);
    }
    this.resetForm();
  }


  editBook(book: Book) {
    this.selectedBook = { ...book };
  }

  deleteBook(id: number) {
    this.libriService.deleteBook(id);
    this.resetForm();
  }

  resetForm() {
    this.selectedBook = null;
  }

}
