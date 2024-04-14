import { TestBed } from '@angular/core/testing';

import { FootballLeagueLoadFromJSONService } from './football-league-load-from-json.service';

describe('FootballLeagueLoadFromJSONService', () => {
  let service: FootballLeagueLoadFromJSONService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FootballLeagueLoadFromJSONService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
