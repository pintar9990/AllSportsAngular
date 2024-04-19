import {Player} from "../player/player";

export interface FootballTeam{
  id?: string;
  name: string;
  logo: string;
  position: string;
  goalkeepers: Player[];
  defenders: Player[];
  midfielders: Player[];
  attackers: Player[];
}
