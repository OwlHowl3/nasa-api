import { TestBed } from '@angular/core/testing';

import { EonetService } from './eonet.service';

describe('EarthService', () => {
  let service: EonetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EonetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
