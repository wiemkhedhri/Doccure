import { TestBed } from '@angular/core/testing';

import { DoctorsserviceService } from './doctorsservice.service';

describe('DoctorsserviceService', () => {
  let service: DoctorsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
