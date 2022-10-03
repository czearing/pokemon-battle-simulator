import * as React from "react";
import { makeStyles, mergeClasses } from "@griffel/react";
import { HealthBar } from "./HealthBar";

const useBattleInfoBarStyles = makeStyles({
  background: {
    position: "relative",
    display: "flex",
    width: "250px",
    height: "80px",
    backgroundColor: "white",
    verticalAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});

export const BattleInfoBar = (props) => {
  const battleInfoBarStyles = useBattleInfoBarStyles();

  return (
    <div className={battleInfoBarStyles.background}>
      <div style={{ display: "flex", gap: "2px", flexDirection: "column" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "2px" }}>
          <p style={{ fontSize: "15px" }}>Pikachu</p>
          <div style={{ flexGrow: "1" }} />
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <p style={{ fontSize: "15px" }}>Lv.</p>
            <p style={{ fontSize: "19px" }}>50</p>
          </div>
        </div>
        <HealthBar currentHealth={10} maxHealth={100} />
      </div>
    </div>
  );
};
