import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquilloComponent } from './squillo.component';

describe('SquilloComponent', () => {
  let component: SquilloComponent;
  let fixture: ComponentFixture<SquilloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SquilloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SquilloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
