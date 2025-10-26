import { TestBed } from '@angular/core/testing';

import { FarmaciService } from './farmaci.service';

describe('FarmaciService', () => {
  let service: FarmaciService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FarmaciService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
