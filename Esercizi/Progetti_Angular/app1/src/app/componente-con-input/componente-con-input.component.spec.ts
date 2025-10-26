import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteConInputComponent } from './componente-con-input.component';

describe('ComponenteConInputComponent', () => {
  let component: ComponenteConInputComponent;
  let fixture: ComponentFixture<ComponenteConInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponenteConInputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteConInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
