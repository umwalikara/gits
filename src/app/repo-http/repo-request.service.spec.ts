import { TestBed } from '@angular/core/testing';

import { RepoRequestService } from './repo-request.service';

describe('RepoRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepoRequestService = TestBed.get(RepoRequestService);
    expect(service).toBeTruthy();
  });
});
