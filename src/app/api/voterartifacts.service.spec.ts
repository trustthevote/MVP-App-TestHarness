import { TestBed } from '@angular/core/testing';

import { VoterartifactsService } from './voterartifacts.service';

describe('VoterartifactsService', () => {
  let service: VoterartifactsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoterartifactsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
