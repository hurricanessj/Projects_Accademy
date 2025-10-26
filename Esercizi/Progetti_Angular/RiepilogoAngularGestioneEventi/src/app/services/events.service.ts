import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Event } from '../Models/Events';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
 private apiUrl = 'http://localhost:3000/events';

  private eventsSubject = new BehaviorSubject<Event[]>([]);
  public events$ = this.eventsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadEvents(); 
  }

  private loadEvents(): void {
    this.http.get<Event[]>(this.apiUrl).subscribe(events => {
      this.eventsSubject.next(events);
    });
  }

  getEvents(): Observable<Event[]> {
    return this.events$;
  }

  getEventById(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.apiUrl}/${id}`);
  }

  addEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(this.apiUrl, event).pipe(
      tap((newEvent) => {
        const updated = [...this.eventsSubject.getValue(), newEvent];
        this.eventsSubject.next(updated);
      })
    );
  }

  updateEvent(event: Event): Observable<Event> {
    return this.http.put<Event>(`${this.apiUrl}/${event.id}`, event).pipe(
      tap((updatedEvent) => {
        const events = this.eventsSubject.getValue().map(ev =>
          ev.id == updatedEvent.id ? updatedEvent : ev
        );
        this.eventsSubject.next(events);
      })
    );
  }

  deleteEvent(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => {
        const events = this.eventsSubject.getValue().filter(ev => ev.id !== id);
        this.eventsSubject.next(events);
      })
    );
  }
}
