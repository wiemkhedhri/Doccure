import { TestBed } from '@angular/core/testing';

import { OrdonnanceserviceService } from './ordonnanceservice.service';

describe('OrdonnanceserviceService', () => {
  let service: OrdonnanceserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdonnanceserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
