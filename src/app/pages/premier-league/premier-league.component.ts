import { Component, OnInit } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { FootballLeague } from "../../models/leagues/football-league";
import {FootballLeagueLoadFromJSONService} from "../../services/football-league-load-from-json.service";
import {FootballTeam} from "../../models/teams/football-team";


@Component({
  selector: 'app-premier-league',
  templateUrl: './premier-league.component.html',
  standalone: true,
  styleUrls: ['./premier-league.component.css'],
  imports: [CommonModule, NgOptimizedImage]
})
export class PremierLeagueComponent implements OnInit{

  jsonUrl = 'assets/premier.json';
  league?: FootballLeague;
  teams?: FootballTeam[];

  constructor(private dataService: FootballLeagueLoadFromJSONService) { }

  ngOnInit(): void {
    this.loadLeague();
  }

  private loadLeague() {
    this.dataService.getLeague(this.jsonUrl).subscribe((data: FootballLeague) => {
      this.league = data;
      this.teams = this.league.teams;
      this.sortTeamsByStandings();
    })
  }
  private sortTeamsByStandings(){
    this.teams?.sort((teamA, teamB) => parseInt(String(teamA.position)) - parseInt(String(teamB.position)));
  }
}
