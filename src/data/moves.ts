import { PokemonType } from "./pokemon-type";
import { CombatType } from "./combat-type";

type MovesData = {
  /**
   * The number id for the move
   */
  number: number;

  /**
   * The name to displayed for the move
   */
  name: string;

  /**
   * The Pokemon type.
   */
  type: PokemonType;

  /**
   * The category for the move.
   */
  category: CombatType;

  /**
   * The attack power of the move
   */
  power: number;

  /**
   * The accuracy of the move
   */
  accuracy: number;

  /**
   * The priority of when the move should be used
   */
  priority: 0 | 1;

  /**
   * Who the move targets
   */
  target: "enemy" | "self";

  /**
   * The number of uses the move has
   */
  pp: number;
  // boosts:
};

export const Moves: { [moveValue: string]: MovesData } = {
  tackle: {
    number: 1,
    name: "Tackle",
    type: "normal",
    category: "attack",
    power: 10,
    accuracy: 100,
    priority: 1,
    target: "enemy",
    pp: 50,
    // boosts: {
    //   speed: 1,
    // },
  },
};
