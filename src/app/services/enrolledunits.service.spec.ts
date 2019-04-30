import { TestBed } from '@angular/core/testing';

import { EnrolledunitsService } from './enrolledunits.service';

describe('EnrolledunitsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EnrolledunitsService = TestBed.get(EnrolledunitsService);
    expect(service).toBeTruthy();
  });
});
