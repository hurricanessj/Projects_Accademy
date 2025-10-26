import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StampapariComponent } from './stampapari.component';

describe('StampapariComponent', () => {
  let component: StampapariComponent;
  let fixture: ComponentFixture<StampapariComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StampapariComponent]
    });
    fixture = TestBed.createComponent(StampapariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
