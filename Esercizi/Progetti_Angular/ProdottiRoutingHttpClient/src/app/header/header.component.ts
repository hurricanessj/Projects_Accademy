import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isCollapsed = true;
  query = '';
 
  onSearch() {
  
    console.log('Cerca:', this.query);
  }

}
