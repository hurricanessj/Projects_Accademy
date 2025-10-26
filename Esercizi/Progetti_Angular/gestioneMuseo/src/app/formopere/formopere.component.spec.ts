import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormopereComponent } from './formopere.component';

describe('FormopereComponent', () => {
  let component: FormopereComponent;
  let fixture: ComponentFixture<FormopereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormopereComponent]
    });
    fixture = TestBed.createComponent(FormopereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
