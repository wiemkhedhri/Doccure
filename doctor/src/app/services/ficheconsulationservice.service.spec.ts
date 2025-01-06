import { TestBed } from '@angular/core/testing';

import { FicheconsulationserviceService } from './ficheconsulationservice.service';

describe('FicheconsulationserviceService', () => {
  let service: FicheconsulationserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FicheconsulationserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
