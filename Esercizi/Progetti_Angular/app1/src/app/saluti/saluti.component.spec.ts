import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalutiComponent } from './saluti.component';

describe('SalutiComponent', () => {
  let component: SalutiComponent;
  let fixture: ComponentFixture<SalutiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalutiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalutiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
