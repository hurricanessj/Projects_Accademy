import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormregistrazioneComponent } from './formregistrazione.component';

describe('FormregistrazioneComponent', () => {
  let component: FormregistrazioneComponent;
  let fixture: ComponentFixture<FormregistrazioneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormregistrazioneComponent]
    });
    fixture = TestBed.createComponent(FormregistrazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
