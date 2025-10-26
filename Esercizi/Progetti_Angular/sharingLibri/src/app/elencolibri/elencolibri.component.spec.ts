import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencolibriComponent } from './elencolibri.component';

describe('ElencolibriComponent', () => {
  let component: ElencolibriComponent;
  let fixture: ComponentFixture<ElencolibriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElencolibriComponent]
    });
    fixture = TestBed.createComponent(ElencolibriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
