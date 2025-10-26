import { Injectable } from '@angular/core';
import { BehaviorSubject, isObservable, Observable, tap } from 'rxjs';
import { Book } from '../models/Book';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibriService {

  private apiUrl = 'http://localhost:3000/books';
  private booksSubject = new BehaviorSubject<Book[]>([]);
  books$ = this.booksSubject.asObservable();

  constructor(private http: HttpClient) {
    this.getBooks();
  }

  private getBooks(): void {

    this.http.get<Book[]>(this.apiUrl).subscribe(data => {

      this.booksSubject.next(data);
    });

  }

  addBook(book: Book): void {

    this.http.post<Book>(this.apiUrl, book).subscribe(newBook => {

      const updated = [...this.booksSubject.value, newBook];

      this.booksSubject.next(updated);
    });

  }

  updateBook(id:any,book:Omit<Book,'id'>){
    return this.http.put<Book>(`${this.apiUrl}/${id}`,book).pipe(tap(book=>{
      
      const bookAggiornato = this.booksSubject.value.map(b => b.id == id ? book : b)

      this.booksSubject.next(bookAggiornato)
    })
    )
  }
 

  deleteBook(id: number): void {

    this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {

      const updated = this.booksSubject.value.filter(b => b.id !== id);

      this.booksSubject.next(updated);
    });

  }

  reload(): void {
    this.getBooks();
  }

}
