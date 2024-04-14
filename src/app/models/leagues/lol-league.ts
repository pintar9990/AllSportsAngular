import {LolTeam} from "../teams/lol-team";

export interface LolLeague{
  name: string;
  logo_src: string;
  art_src: string;
  teams: LolTeam[];
}
