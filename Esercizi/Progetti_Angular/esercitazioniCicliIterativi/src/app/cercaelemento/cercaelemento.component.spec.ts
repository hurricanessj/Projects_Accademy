import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CercaelementoComponent } from './cercaelemento.component';

describe('CercaelementoComponent', () => {
  let component: CercaelementoComponent;
  let fixture: ComponentFixture<CercaelementoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CercaelementoComponent]
    });
    fixture = TestBed.createComponent(CercaelementoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
