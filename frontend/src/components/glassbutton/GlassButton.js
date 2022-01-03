import classes from "./GlassButton.module.css";
import { useState } from "react";

function GlassButton(props) {
  const [isClicked, setIsClicked] = useState(false);

  function updateLabel() {}
  return (
    <div
      className={[
        props.active ? classes.glassbuttonactive : classes.glassbutton,
        classes[props.color],
        "hoverable",
      ].join(" ")}
      onClick={function (e) {
        props.function();
        updateLabel();
      }}
    >
      <a> {props.label}</a>
    </div>
  );
}

export default GlassButton;
