import { Component, ElementRef, ViewChild, ChangeDetectionStrategy, signal, Renderer2, OnInit, Inject } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { inject } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { FormControl } from '@angular/forms';
import { map, Observable, startWith } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class AppComponent {
  title = 'progrttoMaterial';
  announcer = inject(LiveAnnouncer);

  separatorKeysCodes: number[] = [ENTER, COMMA];
  interessiCtrl = new FormControl('');

  interesseFiltrato: Observable<string[]>;
  interessi: string[] = ['Musica'];
  allFruits: string[] = ['Musica', 'Sport', 'Cinema', 'Svago', 'Hobby'];

  @ViewChild('fruitInput') fruitInput!: ElementRef<HTMLInputElement>;


  constructor(private render: Renderer2, private _snackBar: MatSnackBar) {
    this.interesseFiltrato = this.interessiCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.allFruits.slice())),
    );
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();


    if (value) {
      this.interessi.push(value);
    }

    event.chipInput!.clear();

    this.interessiCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.interessi.indexOf(fruit);

    if (index >= 0) {
      this.interessi.splice(index, 1);

      this.announcer.announce(`Removed ${fruit}`);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.interessi.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.interessiCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }

  hideSingleSelectionIndicator = signal(false);
  hideMultipleSelectionIndicator = signal(false);

  toggleSingleSelectionIndicator() {
    this.hideSingleSelectionIndicator.update(value => !value);
  }

  toggleMultipleSelectionIndicator() {
    this.hideMultipleSelectionIndicator.update(value => !value);
  }

  currentTheme = 'light';

  onThemeToggle(value: string) {
    this.currentTheme = value;
    const bgColor = value == 'light' ? '#ffffff' : '#121212';
    this.render.setStyle(document.body, 'background-color', bgColor);

  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }


}
