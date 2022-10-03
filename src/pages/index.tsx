import * as React from "react";
import { MoveButton, BattleInfoBar } from "src/components";

export const Home = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "grey",
      }}
    >
      <BattleInfoBar currentHealth={60} maxHealth={100} />
      <div
        style={{
          position: "fixed",
          marginBottom: "10px",
          bottom: "0px",
          right: "0px",
          paddingRight: "10px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "right",
          textAlign: "right",
          justifyContent: "right",
        }}
      >
        <MoveButton moveValue="tackle" movePP={10} />
        <MoveButton moveValue="ember" movePP={2} />
        <MoveButton moveValue="tackle" movePP={10} />
        <MoveButton moveValue="tackle" movePP={10} />
      </div>
    </div>
  );
};

export default Home;
