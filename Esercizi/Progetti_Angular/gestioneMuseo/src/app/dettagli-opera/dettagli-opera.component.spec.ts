import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliOperaComponent } from './dettagli-opera.component';

describe('DettagliOperaComponent', () => {
  let component: DettagliOperaComponent;
  let fixture: ComponentFixture<DettagliOperaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DettagliOperaComponent]
    });
    fixture = TestBed.createComponent(DettagliOperaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
