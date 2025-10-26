import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListalibriComponent } from './listalibri.component';

describe('ListalibriComponent', () => {
  let component: ListalibriComponent;
  let fixture: ComponentFixture<ListalibriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListalibriComponent]
    });
    fixture = TestBed.createComponent(ListalibriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
