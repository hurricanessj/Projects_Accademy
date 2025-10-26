import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardopereComponent } from './cardopere.component';

describe('CardopereComponent', () => {
  let component: CardopereComponent;
  let fixture: ComponentFixture<CardopereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardopereComponent]
    });
    fixture = TestBed.createComponent(CardopereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
