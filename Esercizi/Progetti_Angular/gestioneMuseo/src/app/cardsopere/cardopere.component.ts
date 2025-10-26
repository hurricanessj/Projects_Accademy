import { Component } from '@angular/core';
import { Opera } from '../models/Opera';
import { OpereService } from '../service/opere.service';

@Component({
  selector: 'app-cardopere',
  templateUrl: './cardopere.component.html',
  styleUrls: ['./cardopere.component.css']
})
export class CardopereComponent {
  listaOpere: Opera[] = []
  selectedOpera: Opera | null = null;
  dettagliOpera: Opera | null = null;

  constructor(private opereService: OpereService) { }
  


  loadOpere() {
    this.opereService.getOpere().subscribe((opere) =>
      this.listaOpere = opere)
  }

  ngOnInit() {
    this.loadOpere()
  }

  saveOpera(op: Opera) {
    if (op.id) {

      this.opereService.updateOpera(op).subscribe(() => this.loadOpere())

    } else {
      const { id, ...operaToAdd } = op;
      this.opereService.addOpera(operaToAdd).subscribe(() => this.loadOpere());

    }
    this.resetForm()
  }

  editOpera(opera: Opera) {
    console.log(opera)
    this.selectedOpera = { ...opera }
  }

  deleteOpera(id: any) {
    this.opereService.deleteOpera(id).subscribe(() => this.loadOpere())
  }


  resetForm() {
    this.selectedOpera = null
  }

mostraDettagli(op: Opera) {
  this.dettagliOpera = op;
}

}
