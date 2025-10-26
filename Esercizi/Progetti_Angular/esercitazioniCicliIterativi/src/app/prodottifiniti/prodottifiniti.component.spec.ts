import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdottifinitiComponent } from './prodottifiniti.component';

describe('ProdottifinitiComponent', () => {
  let component: ProdottifinitiComponent;
  let fixture: ComponentFixture<ProdottifinitiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdottifinitiComponent]
    });
    fixture = TestBed.createComponent(ProdottifinitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
