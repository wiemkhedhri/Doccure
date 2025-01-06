import { TestBed } from '@angular/core/testing';

import { SpecialiteserviceService } from './specialiteservice.service';

describe('SpecialiteserviceService', () => {
  let service: SpecialiteserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialiteserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
