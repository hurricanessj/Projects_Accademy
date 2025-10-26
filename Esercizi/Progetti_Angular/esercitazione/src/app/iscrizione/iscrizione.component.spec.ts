import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IscrizioneComponent } from './iscrizione.component';

describe('IscrizioneComponent', () => {
  let component: IscrizioneComponent;
  let fixture: ComponentFixture<IscrizioneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IscrizioneComponent]
    });
    fixture = TestBed.createComponent(IscrizioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
