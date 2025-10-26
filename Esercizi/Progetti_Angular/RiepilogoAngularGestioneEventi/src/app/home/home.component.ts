import { Component, OnInit } from '@angular/core';
import { Event } from '../Models/Events';
import { EventsService } from '../services/events.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  eventi: Event[] = [];
  eventoSelezionato: Event | null = null;
  eventoDettaglio: Event | null = null;
  termineRicerca: string = '';

  constructor(private eventsService: EventsService, protected authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe(ev => {
      this.eventi = ev;
    });

    console.log('Ruolo utente:', this.authService.getUserRole());

  }

  
  resetForm() {
    this.eventoSelezionato = null;
  }

  saveEvento(ev: Event) {
    if (ev.id) {
      this.eventsService.updateEvent(ev).subscribe(() => this.resetForm());
    } else {
      const { id, ...eventoToAdd } = ev;
      this.eventsService.addEvent(eventoToAdd as Event).subscribe(() => this.resetForm());
    }
  }

  editEvento(ev: Event) {
    this.eventoSelezionato = { ...ev };
  }

  deleteEvento(id: number){
    this.eventsService.deleteEvent(id).subscribe();
  }

    filtraEventi(): Event[] {
    const t = this.termineRicerca.toLowerCase().trim();
    if (!t) return this.eventi;

    return this.eventi.filter(ev =>
      ev.name.toLowerCase().includes(t) ||  ev.type.toLowerCase().includes(t) || ev.city.toLowerCase().includes(t)
    );
  }


  isAdmin(): boolean {
  return  this.authService.getUserRole() == 'admin';

}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
