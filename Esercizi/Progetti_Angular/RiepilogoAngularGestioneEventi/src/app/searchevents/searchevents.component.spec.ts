import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearcheventsComponent } from './searchevents.component';

describe('SearcheventsComponent', () => {
  let component: SearcheventsComponent;
  let fixture: ComponentFixture<SearcheventsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearcheventsComponent]
    });
    fixture = TestBed.createComponent(SearcheventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
