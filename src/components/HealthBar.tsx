import * as React from "react";
import { makeStyles, mergeClasses } from "@griffel/react";

const useHealthBarStyles = makeStyles({
  status: {
    position: "absolute",
    height: "100%",
    width: "100%",
    boxSizing: "border-box",
    transitionProperty: "background, width",
    transitionDuration: ".4s",
  },
  background: {
    position: "relative",
    width: "200px",
    height: "10px",
    backgroundColor: "#626061",
  },
});

export const HealthBar = (props) => {
  const { currentHealth, maxHealth } = props;
  const healthBarStyles = useHealthBarStyles();
  const percent = (currentHealth / maxHealth) * 100;

  const width = {
    width: percent + "%",
    backgroundColor:
      (percent <= 10 && "#eb6165") || (percent <= 50 && "#edc030") || "#24f51a",
  };

  return (
    <div className={healthBarStyles.background}>
      <div className={mergeClasses(healthBarStyles.status)} style={width} />
    </div>
  );
};
