import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  private mailSubject= new BehaviorSubject<string>('')
  message$ =this.mailSubject.asObservable();
  constructor() { }

  setMessage(message: string){
    this.mailSubject.next(message)
  }
  
}
