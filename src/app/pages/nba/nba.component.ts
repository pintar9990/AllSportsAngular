import {Component, OnInit} from '@angular/core';
import {FootballLeague} from "../../models/leagues/football-league";
import {FootballTeam} from "../../models/teams/football-team";
import {FootballLeagueLoadFromJSONService} from "../../services/football-league-load-from-json.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-nba',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './nba.component.html',
  styleUrl: './nba.component.css'
})
export class NbaComponent implements OnInit{

  jsonUrl = 'assets/nba.json';
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
