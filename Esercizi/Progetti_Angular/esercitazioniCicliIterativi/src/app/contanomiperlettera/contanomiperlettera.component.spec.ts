import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContanomiperletteraComponent } from './contanomiperlettera.component';

describe('ContanomiperletteraComponent', () => {
  let component: ContanomiperletteraComponent;
  let fixture: ComponentFixture<ContanomiperletteraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContanomiperletteraComponent]
    });
    fixture = TestBed.createComponent(ContanomiperletteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
