import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {


constructor(private fb: FormBuilder){}
  form = this.fb.group({
    
  })


ngOnInit(){
    

}

}
