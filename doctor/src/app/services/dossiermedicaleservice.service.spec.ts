import { TestBed } from '@angular/core/testing';

import { DossiermedicaleserviceService } from './dossiermedicaleservice.service';

describe('DossiermedicaleserviceService', () => {
  let service: DossiermedicaleserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DossiermedicaleserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
