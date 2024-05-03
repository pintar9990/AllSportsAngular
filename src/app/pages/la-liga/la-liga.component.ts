import {Component, OnInit} from '@angular/core';
import {FootballLeague} from "../../models/leagues/football-league";
import {FootballTeam} from "../../models/teams/football-team";
import {FootballLeagueLoadFromJSONService} from "../../services/football-league-load-from-json.service";
import {NgForOf, NgIf} from "@angular/common";
import {CommonModule, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-la-liga',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgOptimizedImage,
    CommonModule
  ],
  templateUrl: './la-liga.component.html',
  styleUrl: './la-liga.component.css'
})
export class LaLigaComponent implements OnInit{

  jsonUrl = 'assets/laliga.json';
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
