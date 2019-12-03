import { TestBed } from '@angular/core/testing';

import { ProjectMongoService } from './projectmongo.service';

describe('ProjectmongoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectMongoService = TestBed.get(ProjectMongoService);
    expect(service).toBeTruthy();
  });
});
