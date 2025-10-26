import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomeaziendaComponent } from './nomeazienda.component';

describe('NomeaziendaComponent', () => {
  let component: NomeaziendaComponent;
  let fixture: ComponentFixture<NomeaziendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NomeaziendaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NomeaziendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
