import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListautentiComponent } from './listautenti.component';

describe('ListautentiComponent', () => {
  let component: ListautentiComponent;
  let fixture: ComponentFixture<ListautentiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListautentiComponent]
    });
    fixture = TestBed.createComponent(ListautentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
