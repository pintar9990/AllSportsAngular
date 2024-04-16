import {Injectable} from '@angular/core';
import {FootballLeague} from "../models/leagues/football-league";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class FootballLeagueLoadFromJSONService {

  constructor(private http: HttpClient) { }

  getLeague(jsonUrl: string): Observable<FootballLeague> {
    return this.http.get<FootballLeague>(jsonUrl);
  }
}
