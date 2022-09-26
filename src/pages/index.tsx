import * as React from "react";
import { MoveButton } from "src/components/MoveButton";

export const Home = () => {
  return (
    <div>
      Hello world
      <MoveButton moveName="Ember" moveValue="test" />
    </div>
  );
};

export default Home;
