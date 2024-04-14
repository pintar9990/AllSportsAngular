import {Player} from "../player/Player";

export interface FootballTeam{
  name: string;
  logo_src: string;
  goalkeepers: Player[];
  defenders: Player[];
  midfielders: Player[];
  attackers: Player[];
}
