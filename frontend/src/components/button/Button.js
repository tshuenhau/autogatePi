import classes from "./Button.module.css";

function Button(props) {
  if (props.primary) {
    return (
      <div
        className={[
          classes.button,
          classes["primary-button"],
          "hoverable",
        ].join(" ")}
      >
        {props.label}
      </div>
    );
  } else {
    return (
      <div
        className={[
          classes.button,
          classes["secondary-button"],
          "hoverable",
        ].join(" ")}
      >
        {props.label}
      </div>
    );
  }
}

export default Button;
