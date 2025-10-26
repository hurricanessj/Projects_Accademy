import { Component, OnInit } from '@angular/core';
import { FarmaciService } from '../sevrice/farmaci.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formfarmaco',
  standalone: false,
  templateUrl: './formfarmaco.component.html',
  styleUrl: './formfarmaco.component.css'
})
export class FormfarmacoComponent implements OnInit {
  farmacoForm: FormGroup;

  constructor(private fb: FormBuilder, private farmaciService: FarmaciService) {
    this.farmacoForm = this.fb.group({
      nome: ['', Validators.required],
      principioAttivo: ['', Validators.required],
      quantita: [0, [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit(): void {}

  aggiungiFarmaco() {
    if (this.farmacoForm.valid) {
      this.farmaciService.addFarmaco(this.farmacoForm.value).subscribe(() => {

        this.farmacoForm.reset({ nome: '', principioAttivo: '', quantita: 0 });
        
      });
    }
  }
}
