import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdottoEconomicoComponent } from './prodotto-economico.component';

describe('ProdottoEconomicoComponent', () => {
  let component: ProdottoEconomicoComponent;
  let fixture: ComponentFixture<ProdottoEconomicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdottoEconomicoComponent]
    });
    fixture = TestBed.createComponent(ProdottoEconomicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
