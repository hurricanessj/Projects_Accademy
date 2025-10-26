import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-libropagine',
  templateUrl: './libropagine.component.html',
  styleUrls: ['./libropagine.component.css']
})
export class LibropagineComponent {
@Input()
arrLibri!: any[];

libroMaggPag(){
  let libroMagg = 0;
  for(let libro of this.arrLibri){
    if(libroMagg < libro.npag){
      libroMagg=libro.npag
    }
  }
  console.log(libroMagg)
}

  
}
