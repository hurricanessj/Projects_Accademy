import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventiweekComponent } from './eventiweek.component';

describe('EventiweekComponent', () => {
  let component: EventiweekComponent;
  let fixture: ComponentFixture<EventiweekComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventiweekComponent]
    });
    fixture = TestBed.createComponent(EventiweekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
