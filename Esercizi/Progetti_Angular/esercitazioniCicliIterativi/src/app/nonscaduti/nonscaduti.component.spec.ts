import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NonscadutiComponent } from './nonscaduti.component';

describe('NonscadutiComponent', () => {
  let component: NonscadutiComponent;
  let fixture: ComponentFixture<NonscadutiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NonscadutiComponent]
    });
    fixture = TestBed.createComponent(NonscadutiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
