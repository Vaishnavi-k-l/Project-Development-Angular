import { TestBed } from '@angular/core/testing';

import { TnCserviceService } from './tn-cservice.service';

describe('TnCserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TnCserviceService = TestBed.get(TnCserviceService);
    expect(service).toBeTruthy();
  });
});
