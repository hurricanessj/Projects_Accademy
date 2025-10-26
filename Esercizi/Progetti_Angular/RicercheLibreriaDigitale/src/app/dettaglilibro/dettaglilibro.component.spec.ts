import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglilibroComponent } from './dettaglilibro.component';

describe('DettaglilibroComponent', () => {
  let component: DettaglilibroComponent;
  let fixture: ComponentFixture<DettaglilibroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DettaglilibroComponent]
    });
    fixture = TestBed.createComponent(DettaglilibroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
