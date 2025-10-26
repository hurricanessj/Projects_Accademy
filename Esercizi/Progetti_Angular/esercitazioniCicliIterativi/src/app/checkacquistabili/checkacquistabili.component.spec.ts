import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckacquistabiliComponent } from './checkacquistabili.component';

describe('CheckacquistabiliComponent', () => {
  let component: CheckacquistabiliComponent;
  let fixture: ComponentFixture<CheckacquistabiliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CheckacquistabiliComponent]
    });
    fixture = TestBed.createComponent(CheckacquistabiliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
