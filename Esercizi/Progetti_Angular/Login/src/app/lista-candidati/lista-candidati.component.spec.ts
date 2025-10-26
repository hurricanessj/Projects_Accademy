import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCandidatiComponent } from './lista-candidati.component';

describe('ListaCandidatiComponent', () => {
  let component: ListaCandidatiComponent;
  let fixture: ComponentFixture<ListaCandidatiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaCandidatiComponent]
    });
    fixture = TestBed.createComponent(ListaCandidatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
