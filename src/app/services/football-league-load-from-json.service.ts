import { Injectable } from '@angular/core';
import {FootballLeague} from "../models/leagues/football-league";
import {FootballTeam} from "../models/teams/football-team";
import {Player} from "../models/player/Player";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FootballLeagueLoadFromJSONService {
  private players: Player[] = [];
  private teams: FootballTeam[] = [];
  private leagues: FootballLeague[] = [];

  constructor(private http: HttpClient) { }

  getLeague(): Observable<FootballLeague> {
    return this.http.get<FootballLeague>('/src/app/premier.json');
  }

  getTeams(): Observable<FootballTeam[]> {
    return this.http.get<FootballTeam[]>('/src/app/premier.json');
  }

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>('/src/app/premier.json');
  }
}
