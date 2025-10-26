import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UppercaseComponent } from './uppercase.component';

describe('UppercaseComponent', () => {
  let component: UppercaseComponent;
  let fixture: ComponentFixture<UppercaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UppercaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UppercaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
