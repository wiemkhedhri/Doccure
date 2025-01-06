import { TestBed } from '@angular/core/testing';

import { RendezvousserviceService } from './rendezvousservice.service';

describe('RendezvousserviceService', () => {
  let service: RendezvousserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RendezvousserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
