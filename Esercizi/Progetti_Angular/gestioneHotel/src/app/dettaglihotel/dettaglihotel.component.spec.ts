import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglihotelComponent } from './dettaglihotel.component';

describe('DettaglihotelComponent', () => {
  let component: DettaglihotelComponent;
  let fixture: ComponentFixture<DettaglihotelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DettaglihotelComponent]
    });
    fixture = TestBed.createComponent(DettaglihotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
