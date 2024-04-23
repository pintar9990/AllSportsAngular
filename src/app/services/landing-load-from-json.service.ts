import {Injectable} from '@angular/core';
import {League} from "../models/leagues/league";
import {Team} from "../models/teams/team";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class LandingLoadFromJSONService {

  constructor(private http: HttpClient) { }

  getLeagues(): Observable<League[]> {
    return this.http.get<{ leagues: League[] }>('assets/trending.json').pipe(
      map(response => response.leagues)
    );
  }

  getTeams(): Observable<Team[]> {
    return this.http.get<{ teams: Team[] }>('assets/trending.json').pipe(
      map(response => response.teams)
    );
  }
}
