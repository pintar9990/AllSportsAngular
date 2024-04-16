import {FootballTeam} from "../teams/football-team";

export interface FootballLeague {
  name: string;
  logo: string;
  art: string;
  teams: FootballTeam[];
}
