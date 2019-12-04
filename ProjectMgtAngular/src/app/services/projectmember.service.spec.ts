import { TestBed } from '@angular/core/testing';

import { ProjectMemberService } from './projectmember.service';

describe('ProjectmemberService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProjectMemberService = TestBed.get(ProjectMemberService);
    expect(service).toBeTruthy();
  });
});
