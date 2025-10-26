import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharingdataService {

  private message= new BehaviorSubject<string>('messaggio iniziale')
  currentMessage = this.message.asObservable()

  changeMessage(message: string){
    this.message.next(message)
  }

}
 