import {LolTeam} from "../teams/lol-team";

export interface LolLeague{
  name: string;
  logo: string;
  art: string;
  teams: LolTeam[];
}
