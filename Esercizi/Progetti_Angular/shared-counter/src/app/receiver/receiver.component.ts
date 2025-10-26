import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';
@Component({
  selector: 'app-receiver',
  templateUrl: './receiver.component.html',
  styleUrls: ['./receiver.component.css']
})
export class ReceiverComponent {
  counter: number = 0;

  constructor(private counterService: CounterService) {

    this.counterService.counterObservable.subscribe(value => {
      this.counter = value;
    });
  }
}
