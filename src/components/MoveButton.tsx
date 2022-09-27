import { makeStyles, shorthands, mergeClasses } from "@griffel/react";
import { PokemonTypeIcon } from "./PokemonTypeIcon";

const useClasses = makeStyles({
  fire: {
    backgroundColor: "#F49658",
    "&:hover": {
      backgroundColor: "#E08A51",
    },
    "&:active": {
      backgroundColor: "#D2814C",
    },
  },
  dark: {
    backgroundColor: "#9d81ce",
  },
  normal: {
    backgroundColor: "white",
  },
  button: {
    cursor: "pointer",
    height: "50px",
    width: "280px",
    fontSize: "15px",
    transitionProperty: "background, box-shadow",
    textAlign: "left",
    display: "flex",
    boxShadow:
      "rgba(0, 0, 0, 0.133) 0px 3.2px 7.2px 0px, rgba(0, 0, 0, 0.11) 0px 0.6px 1.8px 0px",
    alignItems: "center",
    ...shorthands.border("0px"),
    ...shorthands.padding("0px"),
    ...shorthands.borderRadius("999px"),
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
   * The name of the Pokemon move to display on the button.
   */
  moveName: string;

  /**
   * The value of the Pokemon move. Used for callback on press.
   */
  moveValue: string;
};

export const MoveButton = (props: MoveButtonProps) => {
  const { moveValue } = props;
  const type = "normal";

  const classes = useClasses();
  const mergedRootClasses = mergeClasses(classes.button, classes[type]);

  return (
    <button className={mergedRootClasses} value={moveValue}>
      <PokemonTypeIcon type={type} className={classes.icon} />
      Ember
      <div style={{ flexGrow: "1" }} />
      <div
        style={{
          width: "0px",
          height: "0px",
          borderLeft: "50px solid transparent",
          borderRight: "20px solid  #000000",
          borderTop: "50px solid transparent",
        }}
      />
      <div className={classes.ppIndicator}>25/25</div>
    </button>
  );
};
