import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibripresiComponent } from './libripresi.component';

describe('LibripresiComponent', () => {
  let component: LibripresiComponent;
  let fixture: ComponentFixture<LibripresiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibripresiComponent]
    });
    fixture = TestBed.createComponent(LibripresiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
