import { TestBed } from '@angular/core/testing';

import { NasaImageVideoLibraryService } from './nasa-image-video-library.service';

describe('NasaImageVideoLibraryService', () => {
  let service: NasaImageVideoLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NasaImageVideoLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
