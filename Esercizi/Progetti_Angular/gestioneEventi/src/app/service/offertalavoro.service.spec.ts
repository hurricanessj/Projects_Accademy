import { TestBed } from '@angular/core/testing';

import { OffertalavoroService } from './offertalavoro.service';

describe('OffertalavoroService', () => {
  let service: OffertalavoroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffertalavoroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
