import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteFiglioSalutaComponent } from './componente-figlio-saluta.component';

describe('ComponenteFiglioSalutaComponent', () => {
  let component: ComponenteFiglioSalutaComponent;
  let fixture: ComponentFixture<ComponenteFiglioSalutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponenteFiglioSalutaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteFiglioSalutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
