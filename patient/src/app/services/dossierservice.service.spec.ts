import { TestBed } from '@angular/core/testing';

import { DossierserviceService } from './dossierservice.service';

describe('DossierserviceService', () => {
  let service: DossierserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DossierserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
