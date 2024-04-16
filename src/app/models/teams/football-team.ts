import {Player} from "../player/player";

export interface FootballTeam{
  name: string;
  logo: string;
  goalkeepers: Player[];
  defenders: Player[];
  midfielders: Player[];
  attackers: Player[];
}
