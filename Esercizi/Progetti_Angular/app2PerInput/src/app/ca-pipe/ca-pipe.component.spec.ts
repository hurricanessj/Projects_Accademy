import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaPipeComponent } from './ca-pipe.component';

describe('CaPipeComponent', () => {
  let component: CaPipeComponent;
  let fixture: ComponentFixture<CaPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaPipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
