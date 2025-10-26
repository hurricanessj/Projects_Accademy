import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevunoComponent } from './devuno.component';

describe('DevunoComponent', () => {
  let component: DevunoComponent;
  let fixture: ComponentFixture<DevunoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevunoComponent]
    });
    fixture = TestBed.createComponent(DevunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
