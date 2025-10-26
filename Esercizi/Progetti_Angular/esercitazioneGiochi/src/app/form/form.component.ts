import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { generate } from 'rxjs';
import { Videogiochi } from '../model/Videogiochi';
import { VideogiocoService } from '../service/videogioco.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  game!: Videogiochi;
  games: Videogiochi[] = [];
  id!: number;



  gameForm: FormGroup = this.fb.group({
    gameName: ['', Validators.required],
    genere: ['', Validators.required],
    piattaforma: ['', Validators.required],
    data: [0, Validators.required]
  })

  constructor(private fb: FormBuilder, private gameService: VideogiocoService, private route: ActivatedRoute) {


  }

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'))
    console.log(this.id)
    if (this.id) {
      this.gameService.getVideogiochi().subscribe((giochi) => {
        this.game = giochi.find(g => g.id == this.id) || this.game
        console.log(this.game)
      })
    }
  }
  
  
  updateVidegame() {

    console.log(this.game)
    this.gameService.updateVideogioco(this.game).subscribe({
      next: (d) => {
        console.log(d)
      },
      error: err => console.log('errore', err)
    })
    console.log(this.game)
  }

  addVideogame(){}
}
