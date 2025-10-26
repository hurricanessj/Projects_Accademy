import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormfarmacoComponent } from './formfarmaco.component';

describe('FormfarmacoComponent', () => {
  let component: FormfarmacoComponent;
  let fixture: ComponentFixture<FormfarmacoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormfarmacoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormfarmacoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
