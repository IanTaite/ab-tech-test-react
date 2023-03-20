import { useContext } from "react";
import { StateContext } from "../contexts/StateProvider";

export const PageHeader = () => {
  const state = useContext(StateContext);
  return (
    <div style={{padding: "0 24px"}}>
      <h1 style={{margin: 0, padding: 0}}>Go Outdoors</h1>
    </div>
  );
};
