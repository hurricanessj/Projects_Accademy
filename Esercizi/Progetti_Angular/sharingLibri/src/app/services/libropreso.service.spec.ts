import { TestBed } from '@angular/core/testing';

import { LibropresoService } from './libropreso.service';

describe('LibropresoService', () => {
  let service: LibropresoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibropresoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
