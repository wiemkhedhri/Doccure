import { TestBed } from '@angular/core/testing';

import { SpecialitesserviceService } from './specialitesservice.service';

describe('SpecialitesserviceService', () => {
  let service: SpecialitesserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpecialitesserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
