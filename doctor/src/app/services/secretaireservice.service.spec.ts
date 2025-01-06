import { TestBed } from '@angular/core/testing';

import { SecretaireserviceService } from './secretaireservice.service';

describe('SecretaireserviceService', () => {
  let service: SecretaireserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecretaireserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
