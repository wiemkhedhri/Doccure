import { TestBed } from '@angular/core/testing';

import { FicheconsultationserviceService } from './ficheconsultationservice.service';

describe('FicheconsultationserviceService', () => {
  let service: FicheconsultationserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FicheconsultationserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
