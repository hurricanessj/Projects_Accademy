import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormtaskComponent } from './formtask.component';

describe('FormtaskComponent', () => {
  let component: FormtaskComponent;
  let fixture: ComponentFixture<FormtaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormtaskComponent]
    });
    fixture = TestBed.createComponent(FormtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
