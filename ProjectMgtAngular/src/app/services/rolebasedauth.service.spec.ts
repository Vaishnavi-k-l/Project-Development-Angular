import { TestBed } from '@angular/core/testing';

import { RolebasedauthService } from './rolebasedauth.service';

describe('RolebasedauthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RolebasedauthService = TestBed.get(RolebasedauthService);
    expect(service).toBeTruthy();
  });
});
