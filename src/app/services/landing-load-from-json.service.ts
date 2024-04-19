import {Injectable} from '@angular/core';
import {League} from "../models/leagues/league";
import {Team} from "../models/teams/team";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class LandingLoadFromJsonService {

  constructor(private http: HttpClient) { }

  getLeagues(): Observable<League[]> {
    return this.http.get<League[]>('assets/trending.json');
  }

  getTeams(): Observable<Team[]> {
    return this.http.get<Team[]>('assets/trending.json');
  }
}
