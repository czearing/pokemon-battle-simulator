import * as React from "react";
import { MoveButton } from "src/components/MoveButton";

export const Home = () => {
  return (
    <div>
      Hello world
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
        <MoveButton moveName="Ember" moveValue="test" />
        <MoveButton moveName="Ember" moveValue="test" />
        <MoveButton moveName="Ember" moveValue="test" />
        <MoveButton moveName="Ember" moveValue="test" />
      </div>
    </div>
  );
};

export default Home;
