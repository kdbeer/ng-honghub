import { TestBed } from '@angular/core/testing';

import { ResidentService } from './resident.service';

describe('ResidentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResidentService = TestBed.get(ResidentService);
    expect(service).toBeTruthy();
  });
});
