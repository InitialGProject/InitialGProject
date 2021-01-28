import { TestBed } from '@angular/core/testing';

import { AudiovisualesService } from './audiovisuales.service';

describe('AudiovisualesService', () => {
  let service: AudiovisualesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudiovisualesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
