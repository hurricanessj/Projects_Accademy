import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOfferteComponent } from './lista-offerte.component';

describe('ListaOfferteComponent', () => {
  let component: ListaOfferteComponent;
  let fixture: ComponentFixture<ListaOfferteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaOfferteComponent]
    });
    fixture = TestBed.createComponent(ListaOfferteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
