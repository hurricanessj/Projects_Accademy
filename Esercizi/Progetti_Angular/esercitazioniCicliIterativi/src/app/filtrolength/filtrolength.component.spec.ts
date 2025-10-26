import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrolengthComponent } from './filtrolength.component';

describe('FiltrolengthComponent', () => {
  let component: FiltrolengthComponent;
  let fixture: ComponentFixture<FiltrolengthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltrolengthComponent]
    });
    fixture = TestBed.createComponent(FiltrolengthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
