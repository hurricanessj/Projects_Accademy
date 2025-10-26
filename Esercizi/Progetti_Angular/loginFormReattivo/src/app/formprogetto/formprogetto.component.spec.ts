import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormprogettoComponent } from './formprogetto.component';

describe('FormprogettoComponent', () => {
  let component: FormprogettoComponent;
  let fixture: ComponentFixture<FormprogettoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormprogettoComponent]
    });
    fixture = TestBed.createComponent(FormprogettoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
