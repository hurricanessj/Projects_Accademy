import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompitiService {
  private compiti = new BehaviorSubject<string>('non ci sono compiti')
  currentMessage = this.compiti.asObservable()

  changeCompiti(compiti: string) {
    this.compiti.next(compiti)
  }

}
