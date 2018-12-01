import { TestBed } from '@angular/core/testing';

import { ReserveService } from './reserve.service';

describe('ReserveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReserveService = TestBed.get(ReserveService);
    expect(service).toBeTruthy();
  });
});
