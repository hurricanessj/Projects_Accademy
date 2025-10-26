import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayColoriComponent } from './array-colori.component';

describe('ArrayColoriComponent', () => {
  let component: ArrayColoriComponent;
  let fixture: ComponentFixture<ArrayColoriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArrayColoriComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayColoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
