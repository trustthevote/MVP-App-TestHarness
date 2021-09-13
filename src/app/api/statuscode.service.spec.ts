import { TestBed } from '@angular/core/testing';

import { StatuscodeService } from './statuscode.service';

describe('StatuscodeService', () => {
  let service: StatuscodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatuscodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
