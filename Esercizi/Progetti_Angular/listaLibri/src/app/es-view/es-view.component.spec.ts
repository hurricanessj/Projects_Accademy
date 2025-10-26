import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsViewComponent } from './es-view.component';

describe('EsViewComponent', () => {
  let component: EsViewComponent;
  let fixture: ComponentFixture<EsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EsViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
