import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprodottoComponent } from './addprodotto.component';

describe('AddprodottoComponent', () => {
  let component: AddprodottoComponent;
  let fixture: ComponentFixture<AddprodottoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddprodottoComponent]
    });
    fixture = TestBed.createComponent(AddprodottoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
