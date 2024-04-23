import {Component, OnInit} from '@angular/core';
import {League} from "../../models/leagues/league";
import {Team} from "../../models/teams/team";
import {LandingLoadFromJSONService} from "../../services/landing-load-from-json.service";
import {NgForOf, NgIf} from "@angular/common";
import {LeagueArtDisplayComponent} from "../../components/league-art-display/league-art-display.component";
import {TeamLogoDisplayComponent} from "../../components/team-logo-display/team-logo-display.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    LeagueArtDisplayComponent,
    TeamLogoDisplayComponent
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit{
    leagues?: League[];
    teams?: Team[];

    constructor(private dataService: LandingLoadFromJSONService) {}
    ngOnInit(): void {
        this.dataService.getLeagues().subscribe(data => {
          this.leagues = data;
        });
        this.dataService.getTeams().subscribe(data => {
          this.teams = data;
        });
    }

}
