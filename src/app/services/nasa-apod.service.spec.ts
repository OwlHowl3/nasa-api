import { TestBed } from '@angular/core/testing';

import { NasaApodService } from './nasa-apod.service';

describe('NasaApodService', () => {
  let service: NasaApodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NasaApodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
