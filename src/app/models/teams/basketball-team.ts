import {Player} from "../player/player";

export interface BasketballTeam {
  name: string;
  logo: string;
  point_guards: Player[];
  shooting_guards: Player[];
  small_forwards: Player[];
  centers: Player[];
}
