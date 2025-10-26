import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScadenzaComponent } from './scadenza.component';

describe('ScadenzaComponent', () => {
  let component: ScadenzaComponent;
  let fixture: ComponentFixture<ScadenzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScadenzaComponent]
    });
    fixture = TestBed.createComponent(ScadenzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
