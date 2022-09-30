import { makeStyles, shorthands, mergeClasses } from "@griffel/react";
import { PokemonTypeIcon } from "./PokemonTypeIcon";
import { moves } from "../data";

const useClasses = makeStyles({
  fire: {
    backgroundColor: "#F49658",
  },
  dark: {
    backgroundColor: "#9d81ce",
  },
  normal: {
    backgroundColor: "white",
  },
  fighting: {
    backgroundColor: "#d85b93",
  },
  flying: {
    backgroundColor: "#934b5df",
  },
  button: {
    cursor: "pointer",
    boxSizing: "border-box",
    height: "50px",
    width: "300px",
    fontSize: "15px",
    transitionProperty: "background, box-shadow",
    textAlign: "left",
    display: "flex",
    boxShadow:
      "rgba(0, 0, 0, 0.133) 0px 3.2px 7.2px 0px, rgba(0, 0, 0, 0.11) 0px 0.6px 1.8px 0px",
    alignItems: "center",
    ...shorthands.outline("0px", "solid", "black"),
    ...shorthands.border("0px"),
    ...shorthands.padding("0px"),
    ...shorthands.borderRadius("999px"),
    "&:hover": {
      ...shorthands.outline("4px", "solid", "black"),
    },
  },
  ppIndicator: {
    color: "white",
    backgroundColor: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "70px",
    fontSize: "19px",
    ...shorthands.padding("0px", "10px", "0px", "0px"),
    ...shorthands.borderRadius("0px", "999px", "999px", "0px"),
    height: "100%",
  },
  typeIndicator: {
    fontFamily: "Essentiarum Regular",
  },
  icon: {
    ...shorthands.padding("6px"),
    width: "32px",
    height: "32px",
  },
});

type MoveButtonProps = {
  /**
   * The number of remaining uses for the Pokemon move.
   */
  movePP: number;

  /**
   * The value of the Pokemon move. Used for callback on press.
   */
  moveValue: string;
};

const triangleStyles = {
  width: "0px",
  height: "0px",
  borderLeft: "50px solid transparent",
  borderRight: "20px solid  #000000",
  borderTop: "50px solid transparent",
};

export const MoveButton = (props: MoveButtonProps) => {
  const { moveValue, movePP } = props;
  const type = "normal";

  const classes = useClasses();
  const mergedRootClasses = mergeClasses(classes.button, classes[type]);

  return (
    <button className={mergedRootClasses} value={moveValue}>
      <PokemonTypeIcon type={moves[moveValue].type} className={classes.icon} />
      {moves[moveValue].name}
      <div style={{ flexGrow: "1" }} />
      <div style={triangleStyles} />
      <div className={classes.ppIndicator}>
        {movePP}/{moves[moveValue].pp}
      </div>
    </button>
  );
};
