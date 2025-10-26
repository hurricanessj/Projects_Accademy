import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule
  ],

  exports:[
    MatTableModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule
  ]


})
export class MaterialModule { }
