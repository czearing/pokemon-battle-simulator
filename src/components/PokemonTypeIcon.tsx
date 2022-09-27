import * as React from "react";
import dynamic from "next/dynamic";

const Bug = dynamic(() => import("../../public/icons/pokemon-types/bug.svg"));
const Dark = dynamic(() => import("../../public/icons/pokemon-types/dark.svg"));
const Dragon = dynamic(
  () => import("../../public/icons/pokemon-types/dragon.svg")
);
const Electric = dynamic(
  () => import("../../public/icons/pokemon-types/electric.svg")
);
const Fairy = dynamic(
  () => import("../../public/icons/pokemon-types/fairy.svg")
);
const Fighting = dynamic(
  () => import("../../public/icons/pokemon-types/fighting.svg")
);
const Fire = dynamic(() => import("../../public/icons/pokemon-types/fire.svg"));
const Flying = dynamic(
  () => import("../../public/icons/pokemon-types/flying.svg")
);
const Ghost = dynamic(
  () => import("../../public/icons/pokemon-types/ghost.svg")
);
const Grass = dynamic(
  () => import("../../public/icons/pokemon-types/grass.svg")
);
const Ground = dynamic(
  () => import("../../public/icons/pokemon-types/ground.svg")
);
const Ice = dynamic(() => import("../../public/icons/pokemon-types/ice.svg"));
const Normal = dynamic(
  () => import("../../public/icons/pokemon-types/normal.svg")
);
const Poison = dynamic(
  () => import("../../public/icons/pokemon-types/poison.svg")
);
const Psychic = dynamic(
  () => import("../../public/icons/pokemon-types/psychic.svg")
);
const Rock = dynamic(() => import("../../public/icons/pokemon-types/rock.svg"));
const Steel = dynamic(
  () => import("../../public/icons/pokemon-types/steel.svg")
);
const Water = dynamic(
  () => import("../../public/icons/pokemon-types/water.svg")
);

type PokemonTypeIconProps = {
  /**
   * The Pokemon type.
   */
  type: string;
};

export const PokemonTypeIcon = (props: PokemonTypeIconProps) => {
  const { type, ...componentProps } = props;

  switch (type) {
    case "bug":
      return <Bug {...componentProps} />;
    case "dark":
      return <Dark {...componentProps} />;
    case "dragon":
      return <Dragon {...componentProps} />;
    case "electric":
      return <Electric {...componentProps} />;
    case "fairy":
      return <Fairy {...componentProps} />;
    case "fighting":
      return <Fighting {...componentProps} />;
    case "fire":
      return <Fire {...componentProps} />;
    case "flying":
      return <Flying {...componentProps} />;
    case "ghost":
      return <Ghost {...componentProps} />;
    case "grass":
      return <Grass {...componentProps} />;
    case "ground":
      return <Ground {...componentProps} />;
    case "ice":
      return <Ice {...componentProps} />;
    case "normal":
      return <Normal {...componentProps} />;
    case "poison":
      return <Poison {...componentProps} />;
    case "psychic":
      return <Psychic {...componentProps} />;
    case "rock":
      return <Rock {...componentProps} />;
    case "steel":
      return <Steel {...componentProps} />;
    case "water":
      return <Water {...componentProps} />;
    default:
      return <Normal {...componentProps} />;
  }
};
