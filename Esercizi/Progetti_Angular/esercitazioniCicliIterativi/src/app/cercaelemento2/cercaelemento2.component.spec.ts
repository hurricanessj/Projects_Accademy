import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cercaelemento2Component } from './cercaelemento2.component';

describe('Cercaelemento2Component', () => {
  let component: Cercaelemento2Component;
  let fixture: ComponentFixture<Cercaelemento2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Cercaelemento2Component]
    });
    fixture = TestBed.createComponent(Cercaelemento2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
