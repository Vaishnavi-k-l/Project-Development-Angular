import { TestBed } from '@angular/core/testing';

import { TaskDataStorageService } from './taskdatastorage.service';

describe('TaskdatastorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskDataStorageService = TestBed.get(TaskDataStorageService);
    expect(service).toBeTruthy();
  });
});
