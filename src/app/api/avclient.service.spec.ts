import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AvclientService } from './avclient.service';

describe('AvclientService', () => {
  let service: AvclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
    service = TestBed.inject(AvclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
