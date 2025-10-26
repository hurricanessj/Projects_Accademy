import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { aziendaGuard } from './azienda.guard';

describe('aziendaGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => aziendaGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
