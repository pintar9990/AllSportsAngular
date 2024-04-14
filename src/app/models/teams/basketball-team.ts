import {Player} from "../player/Player";

export interface BasketballTeam {
  name: string;
  logo_src: string;
  point_guards: Player[];
  shooting_guards: Player[];
  small_forwards: Player[];
  centers: Player[];
}
