import { Component } from '@angular/core';
import { MailService } from '../service/mail.service';

@Component({
  selector: 'app-recivemail',
  templateUrl: './recivemail.component.html',
  styleUrls: ['./recivemail.component.css']
})
export class RecivemailComponent {
  message = '';
  constructor(private serviceMail: MailService){}

  ngOnInit(){
    this.serviceMail.message$.subscribe(txt =>this.message = txt)
  }
}
