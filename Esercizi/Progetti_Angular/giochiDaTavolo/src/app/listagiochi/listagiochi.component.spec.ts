import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagiochiComponent } from './listagiochi.component';

describe('ListagiochiComponent', () => {
  let component: ListagiochiComponent;
  let fixture: ComponentFixture<ListagiochiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListagiochiComponent]
    });
    fixture = TestBed.createComponent(ListagiochiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
