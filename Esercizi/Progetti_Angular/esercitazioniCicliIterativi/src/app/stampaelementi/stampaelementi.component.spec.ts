import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StampaelementiComponent } from './stampaelementi.component';

describe('StampaelementiComponent', () => {
  let component: StampaelementiComponent;
  let fixture: ComponentFixture<StampaelementiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StampaelementiComponent]
    });
    fixture = TestBed.createComponent(StampaelementiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
