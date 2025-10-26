import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaprodottiComponent } from './listaprodotti.component';

describe('ListaprodottiComponent', () => {
  let component: ListaprodottiComponent;
  let fixture: ComponentFixture<ListaprodottiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaprodottiComponent]
    });
    fixture = TestBed.createComponent(ListaprodottiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
