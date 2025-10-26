import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
  standalone: false
})
export class FiltroPipe implements PipeTransform {

  transform(array: any[], property: string, ricercato: any): any {
    return array.filter(val => val[property] == ricercato);
  }

}
