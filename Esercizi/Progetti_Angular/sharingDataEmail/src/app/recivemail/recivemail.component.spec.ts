import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecivemailComponent } from './recivemail.component';

describe('RecivemailComponent', () => {
  let component: RecivemailComponent;
  let fixture: ComponentFixture<RecivemailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecivemailComponent]
    });
    fixture = TestBed.createComponent(RecivemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
