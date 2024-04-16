import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FootballLeague } from "../../models/leagues/football-league";
import {FootballLeagueLoadFromJSONService} from "../../services/football-league-load-from-json.service";
import {FootballTeam} from "../../models/teams/football-team";


@Component({
  selector: 'app-premier-league',
  templateUrl: './premier-league.component.html',
  standalone: true,
  styleUrls: ['./premier-league.component.css'],
  imports: [CommonModule]
})
export class PremierLeagueComponent implements OnInit{

  league: any;
  jsonUrl = 'assets/premier.json';
  teams?: FootballTeam[];

  constructor(private dataService: FootballLeagueLoadFromJSONService) { }

  ngOnInit(): void {
    this.loadLeague();
  }

  loadLeague() {
    this.dataService.getLeague(this.jsonUrl).subscribe((data: FootballLeague) => {
      this.league = data;
      this.loadTeams();
    });
  }

  loadTeams() {
    this.teams = this.league.teams;
  }
}
