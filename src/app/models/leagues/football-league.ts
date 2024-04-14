import {FootballTeam} from "../teams/football-team";

export interface FootballLeague {
  name: string;
  logo_src: string;
  art_src: string;
  teams: FootballTeam[];
}
