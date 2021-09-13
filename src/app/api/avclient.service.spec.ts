import { TestBed } from '@angular/core/testing';

import { AvclientService } from './avclient.service';

describe('AvclientService', () => {
  let service: AvclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
