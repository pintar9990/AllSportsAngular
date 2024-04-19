import { TestBed } from '@angular/core/testing';

import { LandingLoadFromJSONService } from './landing-load-from-json.service';

describe('LandingLoadFromJSONService', () => {
  let service: LandingLoadFromJSONService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandingLoadFromJSONService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
