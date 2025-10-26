import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliNuovouserComponent } from './dettagli-nuovouser.component';

describe('DettagliNuovouserComponent', () => {
  let component: DettagliNuovouserComponent;
  let fixture: ComponentFixture<DettagliNuovouserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DettagliNuovouserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DettagliNuovouserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
