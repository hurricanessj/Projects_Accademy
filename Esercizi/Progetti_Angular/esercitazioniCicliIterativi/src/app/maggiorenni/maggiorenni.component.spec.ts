import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaggiorenniComponent } from './maggiorenni.component';

describe('MaggiorenniComponent', () => {
  let component: MaggiorenniComponent;
  let fixture: ComponentFixture<MaggiorenniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaggiorenniComponent]
    });
    fixture = TestBed.createComponent(MaggiorenniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
