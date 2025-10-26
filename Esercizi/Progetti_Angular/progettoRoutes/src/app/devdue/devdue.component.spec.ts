import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevdueComponent } from './devdue.component';

describe('DevdueComponent', () => {
  let component: DevdueComponent;
  let fixture: ComponentFixture<DevdueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevdueComponent]
    });
    fixture = TestBed.createComponent(DevdueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
