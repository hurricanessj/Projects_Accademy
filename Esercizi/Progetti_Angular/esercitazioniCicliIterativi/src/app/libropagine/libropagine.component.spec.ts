import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibropagineComponent } from './libropagine.component';

describe('LibropagineComponent', () => {
  let component: LibropagineComponent;
  let fixture: ComponentFixture<LibropagineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LibropagineComponent]
    });
    fixture = TestBed.createComponent(LibropagineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
