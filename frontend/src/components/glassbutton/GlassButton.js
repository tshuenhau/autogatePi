import classes from "./GlassButton.module.css";
import { useState } from "react";

function GlassButton(props) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      className={[
        isClicked ? classes.glassbuttonactive : classes.glassbutton,
        classes[props.color],
        "hoverable",
      ].join(" ")}
      onClick={function (e) {
        props.function();
        setIsClicked(true);
        setTimeout(() => {
          setIsClicked(false);
        }, 1000);
      }}
    >
      <a> {props.label}</a>
    </div>
  );
}

export default GlassButton;
