import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizzaImgComponent } from './visualizza-img.component';

describe('VisualizzaImgComponent', () => {
  let component: VisualizzaImgComponent;
  let fixture: ComponentFixture<VisualizzaImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VisualizzaImgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizzaImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
