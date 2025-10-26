import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientiMilanoComponent } from './clienti-milano.component';

describe('ClientiMilanoComponent', () => {
  let component: ClientiMilanoComponent;
  let fixture: ComponentFixture<ClientiMilanoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientiMilanoComponent]
    });
    fixture = TestBed.createComponent(ClientiMilanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
