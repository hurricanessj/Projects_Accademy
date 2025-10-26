import { Component, ViewChild } from '@angular/core';
import { FromComponent } from './from/from.component';
import { ListaComponent } from './lista/lista.component';
import { DettagliComponent } from './dettagli/dettagli.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proggettoViewChild';

  film: string[] = ["guardiani della galassia", "daedpool", "xmen"];

  attori: string[] = ["attore1", "attore2", "attore2"];

  nome!: string;
  cognome!: string;

  @ViewChild(FromComponent)
  formComponent!: FromComponent;

  //viewChild della lista

  @ViewChild(ListaComponent)
  listaComponent!: ListaComponent;

  @ViewChild(DettagliComponent)
  dettagliComponent!: DettagliComponent;

  raccogliDati() {
    this.formComponent.leggiValori();
  }

  divisione() {
    let result = this.formComponent.somma() / 2
    console.log(result)
  }

  ngAfterViewInit() {
    this.listaComponent.loadData(this.film);
  }


  raccogliDettagli(){
    this.dettagliComponent.leggiDettagli(this.nome, this.cognome);
  }

//fare il form con template driven
  onSubmit(form: any){
    console.log(form);
  }

  userForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email])
  })
  
}
