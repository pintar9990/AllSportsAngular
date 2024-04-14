import {BasketballTeam} from "../teams/basketball-team";

export interface BasketballLeague{
  name: string;
  logo_src: string;
  art_src: string;
  western_conference: BasketballTeam[];
  eastern_conference: BasketballTeam[];
}
