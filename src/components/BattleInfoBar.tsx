import * as React from "react";
import { makeStyles, shorthands } from "@griffel/react";
import { HealthBar } from "./HealthBar";

const useBattleInfoBarStyles = makeStyles({
  background: {
    position: "relative",
    display: "flex",
    width: "230px",
    height: "60px",
    backgroundColor: "white",
    verticalAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    lineHeight: "0px",
  },
  smallFont: {
    fontSize: "15px",
    height: "10px",
    ...shorthands.margin("0px"),
    marginTop: "10px",
  },
  largeFont: {
    fontSize: "19px",
    marginTop: "10px",
    marginBottom: "10px",
  },
  container: {
    display: "flex",
    alignItems: "center",
    ...shorthands.gap("4px"),
  },
  textContainer: {
    display: "flex",
    alignItems: "center",
  },
});

type BattleInfoBarProp = {
  name: string;
  level: number;
  target: "enemy" | "player";
  currentHealth: number;
  maxHealth: number;
};

const playerTriangleStyles: React.CSSProperties = {
  position: "absolute",
  width: "0px",
  height: "0px",
  left: "230px",
  borderLeft: "60px solid transparent",
  borderRight: "20px solid white",
  borderTop: "60px solid transparent",
  transform: "rotate(180deg)",
};

const enemyTriangleStyles: React.CSSProperties = {
  position: "absolute",
  width: "0px",
  height: "0px",
  right: "230px",
  borderLeft: "60px solid transparent",
  borderRight: "20px solid white",
  borderTop: "60px solid transparent",
  transform: "rotateX(180deg) scaleY(-1)",
};

export const BattleInfoBar = (props: BattleInfoBarProp) => {
  const { currentHealth, maxHealth, name, level, target } = props;
  const battleInfoBarStyles = useBattleInfoBarStyles();

  return (
    <div className={battleInfoBarStyles.background}>
      {target == "enemy" && <div style={enemyTriangleStyles} />}
      <div>
        <div className={battleInfoBarStyles.textContainer}>
          <p className={battleInfoBarStyles.smallFont}>{name}</p>
          <div style={{ flexGrow: "1" }} />
          <div className={battleInfoBarStyles.container}>
            <p className={battleInfoBarStyles.smallFont}>Lv.</p>
            <p className={battleInfoBarStyles.largeFont}>{level}</p>
          </div>
        </div>
        <HealthBar currentHealth={currentHealth} maxHealth={maxHealth} />
        {target == "player" && (
          <p className={battleInfoBarStyles.largeFont}>
            {currentHealth} / {maxHealth}
          </p>
        )}
      </div>
      {target == "player" && <div style={playerTriangleStyles} />}
    </div>
  );
};
