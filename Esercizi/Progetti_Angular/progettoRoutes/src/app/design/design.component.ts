import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent {
  constructor(private router: Router){//le dipendenze si ignettano direttamente nel costruttore le classi e servizi hanno injection e injectable
  }
  backToHome(){
    //this.router.navigate(["/"])
    this.router.navigate(['/about', '5'])
  }

}
