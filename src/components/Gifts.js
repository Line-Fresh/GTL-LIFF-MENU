import React, { useReducer } from "react";
import "./styles.css";

import box from "./images/box.png";
import boxLid from "./images/box-lid.png";
import kuku from "./images/tiger.png";
// import ConfettiGenerator from "./CanvasConfetti";
import Animation from "./Animation";

const init_state = {
  move: "move",
  jump: "",
  rotated: "",
  rotating: ""
};
const Gift = (props) => {
    const {getReward, setGetReward, handleClick} = props;
  const [state, setState] = useReducer(
    (state, new_state) => ({
      ...state,
      ...new_state
    }),
    init_state
  );

  const { move, rotating, rotated, jump } = state;

  function animate() {
    let isDone = rotated === "rotated" ? true : false;
    if (!isDone) {
      setState({ rotating: "rotating" });
      setTimeout(() => {
        setState({ jump: "jump" });
      }, 300);
      setTimeout(() => {
        setState({ rotated: "rotated" });
      }, 1000);
      setTimeout(() => {
          setGetReward(true);
          handleClick();
      }, 2000);
    } else {
      setState(init_state);
    }
    let moving = move === "move" ? "" : "move";
    setState({ move: moving });
    // setGetReward(true);
  }

  return (
    <div className="App">
      {/* <Animation open={jump === "jump"} /> */}
      <div className="img-container">
        <img className={`kuku ${jump}`} src={kuku} alt="kuku" width="40" height="40" />
        <button className="box" onClick={() => animate()}>
          <img src={box} alt="box" width="50"/>
        </button>
        <img
          className={`lid ${move} ${rotating} ${rotated}`}
          src={boxLid}
          alt="box-lid"
          width="55"
        />
      </div>
    </div>
  );
}

export default Gift;
