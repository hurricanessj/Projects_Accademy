import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  aboutId!: any;

  constructor(private route: ActivatedRoute) { }
  ngOnInit() {
    this.aboutId=this.route.snapshot.paramMap.get('id')
    console.log(this.aboutId)
    console.log(this.route.snapshot.paramMap.get('id'))
    this.route.paramMap.subscribe(params => { console.log(params.get('id')) })
  }

}
