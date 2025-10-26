/*
Creare una mini app per la gestione di una lista di libri
Model
Crea un’interfaccia Book con le proprietà:
title, author, year, price, available.
Componente BookListComponent
Visualizza una lista di almeno 5 libri.
Usa *ngFor per iterare sui libri.
Usa *ngIf per mostrare un messaggio se la lista è vuota.
Usa [ngClass] per applicare una classe ai libri non disponibili (es. testo rosso o sfondo grigio).
Componente BookItemComponent
Mostra i dettagli di un singolo libro.
Riceve il libro da mostrare tramite @Input().
Emette un evento @Output() al clic su “Aggiungi al carrello”.
Estende una classe base BaseBookComponent.
Pipe personalizzata
Crea una pipe priceFormat per formattare i prezzi in euro (es. 19.9 → €19,90).
Utilizzare bootstrap per far comparire le card per ogni libro. 
*/

export interface Book {
  title: string;
  author: string;
  year: number;
  price: number;
  available: boolean;
}