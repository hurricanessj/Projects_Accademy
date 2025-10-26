import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlibriComponent } from './formlibri.component';

describe('FormlibriComponent', () => {
  let component: FormlibriComponent;
  let fixture: ComponentFixture<FormlibriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormlibriComponent]
    });
    fixture = TestBed.createComponent(FormlibriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
