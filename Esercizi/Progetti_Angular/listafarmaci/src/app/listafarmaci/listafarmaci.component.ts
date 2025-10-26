import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FarmaciService } from '../sevrice/farmaci.service';
import { Farmaco } from '../models/Farmaco';

@Component({
  selector: 'app-listafarmaci',
  standalone: false,
  templateUrl: './listafarmaci.component.html',
  styleUrl: './listafarmaci.component.css'
})

export class ListafarmaciComponent implements OnInit {
  farmaci: Farmaco[] = [];
  modificaForm: FormGroup;
  farmacoCorrente: Farmaco | null = null;

  constructor(
    private farmaciService: FarmaciService,
    private fb: FormBuilder
  ) {
    this.modificaForm = this.fb.group({
      nome: ['', Validators.required],
      principioAttivo: ['', Validators.required],
      quantita: [0, [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit() {
    this.caricaFarmaci();
  }

  caricaFarmaci() {
    this.farmaciService.getFarmaci().subscribe(data => {
      this.farmaci = data;
    });
  }

  eliminaFarmaco(id: number) {
      this.farmaciService.deleteFarmaco(id).subscribe(() => {
        this.farmaci = this.farmaci.filter(f => f.id !== id);
      });
  }

setFarmacoCorrente(farmaco: Farmaco) {
  this.farmacoCorrente = { ...farmaco };

  this.modificaForm.patchValue({
    nome: farmaco.nome,
    principioAttivo: farmaco.principioAttivo,
    quantita: farmaco.quantita
  });
}

salvaModifiche() {
  if (this.farmacoCorrente && this.modificaForm.valid) {
    const aggiornato: Farmaco = {
      ...this.farmacoCorrente,
      ...this.modificaForm.value
    };

    this.farmaciService.editFarmaco(aggiornato).subscribe(() => {
      const index = this.farmaci.findIndex(f => f.id === aggiornato.id);
      if (index !== -1) {
        this.farmaci[index] = aggiornato;
      }
      this.farmacoCorrente = null;
      this.modificaForm.reset();
    });
    this.caricaFarmaci();
  }
}

}
