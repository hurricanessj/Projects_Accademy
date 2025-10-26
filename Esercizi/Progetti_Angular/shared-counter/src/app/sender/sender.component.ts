import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';
@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.css']
})
export class SenderComponent {
  constructor(private counterService: CounterService) {}

  increment() {
    this.counterService.increment();
  }
}