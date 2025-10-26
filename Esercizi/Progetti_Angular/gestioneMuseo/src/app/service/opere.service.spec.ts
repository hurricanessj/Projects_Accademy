import { TestBed } from '@angular/core/testing';

import { OpereService } from './opere.service';

describe('OpereService', () => {
  let service: OpereService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpereService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
