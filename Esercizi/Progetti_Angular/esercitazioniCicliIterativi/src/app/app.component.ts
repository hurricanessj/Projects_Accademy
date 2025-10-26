import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { StampaelementiComponent } from './stampaelementi/stampaelementi.component';
import { StampapariComponent } from './stampapari/stampapari.component';
import { CercaelementoComponent } from './cercaelemento/cercaelemento.component';
import { FiltrolengthComponent } from './filtrolength/filtrolength.component';
import { SommaComponent } from './somma/somma.component';
import { Cercaelemento2Component } from './cercaelemento2/cercaelemento2.component';
import { ContanomiperletteraComponent } from './contanomiperlettera/contanomiperlettera.component';
import { ProdottoEconomicoComponent } from './prodotto-economico/prodotto-economico.component';
import { ClientiMilanoComponent } from './clienti-milano/clienti-milano.component';
import { LibropagineComponent } from './libropagine/libropagine.component';
import { EventiFuturiComponent } from './eventi-futuri/eventi-futuri.component';
import { scan } from 'rxjs';
import { ScadenzaComponent } from './scadenza/scadenza.component';
import { CheckacquistabiliComponent } from './checkacquistabili/checkacquistabili.component';
import { EventiweekComponent } from './eventiweek/eventiweek.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'esercitazioniCicliIterativi';

  arrayDiPersone: string[] = ['gaetano', 'davide', 'francesco', 'miriana'];

  listaNumeri: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


  utenti: any[] = [
    { id: 1, nome: 'mario', eta: 22, media: 2, abitazione: 'na' },
    { id: 2, nome: 'luigi', eta: 12, media: 9, abitazione: 'mi' },
    { id: 3, nome: 'peach', eta: 24, media: 5, abitazione: 'na' },
  ]

  utentiFiltro: any[] = [
    { id: 1, nome: 'Carlotta' },
    { id: 2, nome: 'Vincenza' },
    { id: 3, nome: 'peach' },

  ]

  ordini: any[] = [
    { id: 1, status: 'pronto' },
    { id: 2, status: 'in attesa' },
    { id: 3, status: 'pronto' },
    { id: 4, status: 'in attesa' },
    { id: 5, status: 'in attesa' },
    { id: 6, status: 'pronto' },
    { id: 7, status: 'in attesa' },
    { id: 8, status: 'pronto' },
    { id: 9, status: 'in attesa' },

  ]


  abitazioneClienti: any[] = [
    { id: 1, nome: 'giuseppe', abitazione: 'milano' },
    { id: 1, nome: 'ciro', abitazione: 'napoli' },
    { id: 1, nome: 'marco', abitazione: 'milano' },
    { id: 1, nome: 'alessandro', abitazione: 'napoli' },
    { id: 1, nome: 'francesco', abitazione: 'napoli' },
  ]

  eventiwknd: any[] = [
    { evento: 'evento 1', data: new Date('2024/06/23'), citta: 'milano' },
    { evento: 'evento 2', data: new Date('2025/06/23'), citta: 'napoli' },
    { evento: 'evento 3', data: new Date('2027/06/23'), citta: 'verona' },
    { evento: 'evento 4', data: new Date('2028/06/23'), citta: 'milano' }
  ]


  prodotti: any[] = [
    { nome: 'bicchieri', prezzo: 3, scadenza: new Date('2025-08-05'), giacenza: 40 },
    { nome: 'tovaglioli', prezzo: 2, scadenza: new Date('2025-08-05'), giacenza: 40 },
    { nome: 'biscotti', prezzo: 4, scadenza: new Date('2024-06-04'), giacenza: 22 },
    { nome: 'cereali', prezzo: 5, scadenza: new Date('2024-06-05'), giacenza: 0 },
    { nome: 'pane', prezzo: 3, scadenza: new Date('2025-06-28'), giacenza: 0 },
  ]

  libri: any[] = [
    { nome: 'lib1', npag: 22, annopb: 2021, copieV: 12345 },
    { nome: 'lib2', npag: 33, annopb: 1990, copieV: 1234567 },
    { nome: 'lib3', npag: 55, annopb: 2000, copieV: 12345678 },

  ]

  listaMin: any[] = [
    { id: 1, nome: "Tizio", eta: 34, media: 9, citta: "Milano" },
    { id: 2, nome: "Caio", eta: 22, medisa: 7, citta: "Napoli" },
    { id: 3, nome: "Sempronio", eta: 56, media: 4, citta: "Benevento" },
    { id: 4, nome: "Mevio", eta: 18, media: 7, citta: "Milano" },
    { id: 5, nome: "Filone", eta: 12, media: 6, citta: "Milano" }
  ]

  @ViewChild(StampaelementiComponent) elementoDaStampare!: StampaelementiComponent;
  @ViewChild(StampapariComponent) elementiPari!: StampapariComponent;
  @ViewChild(CercaelementoComponent) utentiNintendo!: CercaelementoComponent;
  @ViewChild(FiltrolengthComponent) filtro!: FiltrolengthComponent;
  @ViewChild(SommaComponent) somma!: SommaComponent;
  @ViewChild(Cercaelemento2Component) cercaelem!: Cercaelemento2Component;
  @ViewChild(ContanomiperletteraComponent) nomea!: ContanomiperletteraComponent;
  @ViewChild(ProdottoEconomicoComponent) prodotto!: ProdottoEconomicoComponent;
  @ViewChild(ClientiMilanoComponent) cliente!: ClientiMilanoComponent;
  @ViewChild(LibropagineComponent) libropg!: LibropagineComponent;
  @ViewChild(EventiFuturiComponent) event!: EventiFuturiComponent;
  @ViewChild(ScadenzaComponent) scadenza!: ScadenzaComponent;
  @ViewChild(CheckacquistabiliComponent) acquistabili!: CheckacquistabiliComponent;
  @ViewChild(EventiweekComponent) eventiw!: EventiweekComponent;

  prendiOrdiniPronti(ordine: number) {
    console.log(ordine)
  }

  checkScadenza(prodotti: any[]) {//francesco
    return prodotti.filter(p => p.scadenza < new Date());
    /*    
    let prodottiScaduti = prodotti.filter(p => p.scadenza < new Date());
    
    console.log('prodotti scadutiiii\n', prodottiScaduti)*/
  }

  checkGiacenza() {//gennaro

    let prodottifiniti: any[] = [];
    this.prodotti.forEach(prodotti => {
      if (prodotti.giacenza == 0) {
        prodottifiniti.push(prodotti)
      }
    })

    return prodottifiniti
  }

  prodottinonscadeTerm() {//io
    let prodottilista: any[] = [];
    for (let prodottiNot of this.prodotti) {
      if (prodottiNot.giacenza != 0 && prodottiNot.scadenza > new Date()) {
        prodottilista.push(prodottiNot)
      }
    }
    return prodottilista;
  }
  //variabile Globale per poter passare il tipo di ritorno del metodo dei prodotti
  prodottononscaduto!: any[]


  giacenzaMinoreDiTre() {//davide r
    let prodottiAcquistabile: any[] = []
    let prodottiNotAcquistabile: any[] = []
    for (let prodottiacq of this.prodotti) {
      prodottiacq.giacenza > 3 ? prodottiAcquistabile.push(prodottiacq) : prodottiNotAcquistabile.push(prodottiacq)
    }
    console.log('prodotti acquistabili:\n', prodottiAcquistabile)
    console.log('prodotti non acquistabili:\n', prodottiNotAcquistabile)
    this.acquistabili.caricaListe(prodottiNotAcquistabile, prodottiAcquistabile )

  }




  copieVenduteLibri() {//davide c
    let sommaLib: any;
    for (let librisomma of this.libri) {
      librisomma.copieV += sommaLib;
    }
    console.log('somma copie vendute', sommaLib)
    return sommaLib
  }

    passaCopie!: any;
    

  mediaVotiStudMilano() {//gaetano
    var salvamedia: number = 0;
    let contatore: number = 0;
    for (let media of this.utenti) {
      if (media.abitazione == 'mi') {
        salvamedia += media.voti
        contatore++;
      }
    }
    salvamedia / contatore;
    console.log('media voti di milano:', salvamedia)
    return salvamedia
  }


  eventiWeek() {//vincenzo
    let salvaEvento: any[] = []
    for (let evento of this.eventiwknd) {
      if (evento.citta == 'milano' && evento.data >= new Date('2025-06-28') && evento.data <= new Date('2025-06-29')) {
        salvaEvento += evento
      }
    }
    console.log(salvaEvento)
    this.eventiw.getEventiFiglio(salvaEvento)
  }

  minAmil() {
    let salvaLista: any[] = []
    for (let minorenni of this.listaMin) {
      if (minorenni.citta == "milano" && minorenni.eta < 18) {
        salvaLista.push(minorenni)
      }
    }

  }





  ngAfterViewInit() {
    this.elementoDaStampare.stampaElementi();
    this.elementiPari.stampaPari();
    this.elementiPari.stampaPariInline()
    this.utentiNintendo.chiamaUtente()
    this.filtro.filtraNome()
    this.somma.restituisciSomma(this.listaNumeri)
    this.cercaelem.cercaElemento()
    this.nomea.cercaNomiPerA()
    this.prodotto.calcoloMigliorMedia()
    this.cliente.cercaMilano()
    this.libropg.libroMaggPag()
    this.event.eventiFuturi()
    this.checkScadenza(this.prodotti)//francesco
    this.scadenza.prod = this.checkScadenza(this.prodotti)
    this.checkGiacenza()//gennaro
    this.prodottinonscadeTerm()//io
    this.prodottononscaduto = this.prodottinonscadeTerm()// qui abbiamo passato il ritorno del metodo
    this.passaCopie=this.giacenzaMinoreDiTre()//davide
    this.acquistabili
    this.copieVenduteLibri()//davide c 
    this.mediaVotiStudMilano()//gaetano
    this.eventiWeek()//vincenzo
    this.minAmil()//miriana
  }
}
