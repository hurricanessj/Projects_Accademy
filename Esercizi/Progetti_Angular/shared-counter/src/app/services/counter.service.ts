import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CounterService {  

  private counterSubject = new BehaviorSubject<number>(0);
  
  counterObservable = this.counterSubject.asObservable();

  increment() {
    const current = this.counterSubject.value;
    this.counterSubject.next(current + 1);
  }

}
