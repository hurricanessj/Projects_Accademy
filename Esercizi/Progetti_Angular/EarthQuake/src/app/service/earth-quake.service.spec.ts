import { TestBed } from '@angular/core/testing';

import { EarthQuakeService } from './earth-quake.service';

describe('EarthQuakeService', () => {
  let service: EarthQuakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EarthQuakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
