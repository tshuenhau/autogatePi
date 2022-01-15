import classes from "./GlassButton.module.css";
import { useState, useRef, useEffect } from "react";

function GlassButton(props) {
  const [isClicked, setIsClicked] = useState(false);
  let isMounted = true;

  const idRef = useRef();
  useEffect(() => {
    const timeoutId = idRef.current;
    return () => {
      isMounted = false;
      clearTimeout(timeoutId);
    };
  }, []);
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
        const id = setTimeout(() => {
          //! This is a problem
          if (isMounted) {
            setIsClicked(false);
          }
        }, 1000);
        idRef.current = id;
      }}
    >
      <a> {props.label}</a>
    </div>
  );
}

export default GlassButton;
