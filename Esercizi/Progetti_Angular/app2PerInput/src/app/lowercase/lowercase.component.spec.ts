import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowercaseComponent } from './lowercase.component';

describe('LowercaseComponent', () => {
  let component: LowercaseComponent;
  let fixture: ComponentFixture<LowercaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LowercaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowercaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
