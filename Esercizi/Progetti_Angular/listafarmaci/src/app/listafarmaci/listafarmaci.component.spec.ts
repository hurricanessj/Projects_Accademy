import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListafarmaciComponent } from './listafarmaci.component';

describe('ListafarmaciComponent', () => {
  let component: ListafarmaciComponent;
  let fixture: ComponentFixture<ListafarmaciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListafarmaciComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListafarmaciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
