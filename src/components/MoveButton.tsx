import { makeStyles, shorthands, mergeClasses } from "@griffel/react";
import Fire from "../../public/icons/fire.svg";

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
  button: {
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
    cursor: "pointer",
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
  ppIndicatorTriangle: {
    width: "0px",
    height: "0px",
    ...shorthands.borderLeft("50px solid transparent"),
    ...shorthands.borderRight("20px solid #000000"),
    ...shorthands.borderTop("50px solid transparent"),
  },
  typeIndicator: {
    fontFamily: "Essentiarum Regular",
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

// eslint-disable-next-line no-unused-vars
export const MoveButton = (props: MoveButtonProps) => {
  const { moveName, moveValue } = props;
  const classes = useClasses();
  const mergedRootClasses = mergeClasses(classes.button, classes.fire);

  return (
    <button className={mergedRootClasses} value={moveValue}>
      <Fire
        style={{
          width: "33px",
          height: "33px",
          fill: "#FDDC9E",
          padding: "6px",
        }}
      />
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
