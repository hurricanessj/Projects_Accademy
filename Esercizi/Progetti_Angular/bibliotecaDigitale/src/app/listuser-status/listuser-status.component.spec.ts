import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListuserStatusComponent } from './listuser-status.component';

describe('ListuserStatusComponent', () => {
  let component: ListuserStatusComponent;
  let fixture: ComponentFixture<ListuserStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListuserStatusComponent]
    });
    fixture = TestBed.createComponent(ListuserStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
