import { TestBed } from '@angular/core/testing';

import { SkillsService } from './skill.service';

describe('SkillService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SkillsService = TestBed.get(SkillsService);
    expect(service).toBeTruthy();
  });
});
