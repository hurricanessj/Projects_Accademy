import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BoardGame } from '../models/Game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private apiUrl = 'http://localhost:3000/giochi'
  constructor(private http: HttpClient) { }

  getBoardGame(): Observable<BoardGame[]> {
    return this.http.get<BoardGame[]>(this.apiUrl)
  }

  addBoardGame(g: BoardGame): Observable<BoardGame> {
    return this.http.post<BoardGame>(this.apiUrl, g)
  }

  updateBoardGame(game: BoardGame): Observable<BoardGame> {
    return this.http.put<BoardGame>(`${this.apiUrl}/${game.id}`, game)
  }

  deleteBoardGame(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`)
  }

}
