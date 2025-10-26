import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimaleCardComponent } from './animale-card.component';

describe('AnimaleCardComponent', () => {
  let component: AnimaleCardComponent;
  let fixture: ComponentFixture<AnimaleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimaleCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimaleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
