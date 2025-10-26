import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventiFuturiComponent } from './eventi-futuri.component';

describe('EventiFuturiComponent', () => {
  let component: EventiFuturiComponent;
  let fixture: ComponentFixture<EventiFuturiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventiFuturiComponent]
    });
    fixture = TestBed.createComponent(EventiFuturiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
