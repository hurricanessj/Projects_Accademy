import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizzaDettagliComponent } from './visualizza-dettagli.component';

describe('VisualizzaDettagliComponent', () => {
  let component: VisualizzaDettagliComponent;
  let fixture: ComponentFixture<VisualizzaDettagliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizzaDettagliComponent]
    });
    fixture = TestBed.createComponent(VisualizzaDettagliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
