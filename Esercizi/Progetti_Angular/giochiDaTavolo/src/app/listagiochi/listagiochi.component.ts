import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { BoardGame } from '../models/Game';
import { GameService } from '../service/game.service';

@Component({
  selector: 'app-listagiochi',
  templateUrl: './listagiochi.component.html',
  styleUrls: ['./listagiochi.component.css'],
})


export class ListagiochiComponent {
  listBoardGames: BoardGame[] = [];
  selectedGame: BoardGame | null = null

  boardGgameForm: FormGroup = this.fb.group({
    nome: ['', Validators.required],
    giocatori_min: ['', Validators.required],
    giocatori_max: ['', Validators.required],
    etaminima: ['', Validators.required],
    categoria: ['', Validators.required],
    editore: ['', Validators.required],
    anno_publicazione: ['', Validators.required],
  })

  constructor(private fb: FormBuilder, private boardGameService: GameService) { }

  loadBoardGame() {
    this.boardGameService.getBoardGame().subscribe((game) =>
      this.listBoardGames = game)
  }

  saveUser(game: BoardGame) {
    if (game.id) {

      this.boardGameService.updateBoardGame(game).subscribe(() => this.loadBoardGame())

    } else {

      let userToAdd = { ...game }
      delete userToAdd.id

      console.log('user to add', userToAdd)
      this.boardGameService.addBoardGame(userToAdd).subscribe(() => this.loadBoardGame())

    }
    this.resetForm()
  }

  editUser(user: BoardGame) {
    console.log(user)
    this.selectedGame = { ...user }
  }

  deleteUser(id: any) {
    this.boardGameService.deleteBoardGame(id).subscribe(() => this.loadBoardGame())
  }

  resetForm() {
    this.selectedGame = null
  }

  ngOnInit() {
    this.loadBoardGame()
  }

}
