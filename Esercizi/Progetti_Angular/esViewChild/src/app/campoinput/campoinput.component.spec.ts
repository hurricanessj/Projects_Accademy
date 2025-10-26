import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoinputComponent } from './campoinput.component';

describe('CampoinputComponent', () => {
  let component: CampoinputComponent;
  let fixture: ComponentFixture<CampoinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CampoinputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampoinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
