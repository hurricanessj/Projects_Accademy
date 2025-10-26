import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
isCollapsed = true;
  query = '';
 
  onSearch() {
  
    console.log('Cerca:', this.query);
  }
}
