import { Component } from '@angular/core';
import { MailService } from '../service/mail.service';

@Component({
  selector: 'app-sendmail',
  templateUrl: './sendmail.component.html',
  styleUrls: ['./sendmail.component.css']
})
export class SendmailComponent {
  body = ''
  constructor(private emailService: MailService){}

  sendMessage(){
    this.emailService.setMessage(this.body)
    this.body=''
  }
}
