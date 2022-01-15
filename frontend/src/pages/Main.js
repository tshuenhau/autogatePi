import * as api from "../api/index";
import GlassButton from "../components/glassbutton/GlassButton.js";
import classes from "./Main.module.css";

// send a http request to check with server if credentials are valid
function Main() {
  return (
    <div className={classes.main}>
      <div className={classes.center}>
        <div className={classes.column}>
          {/*
          <div className={classes.titlepanel}>
            <div className={classes.title}>
              lasciate ogne speranza, voi ch'intrate.{" "}
            </div>
          </div>
          */}
          <GlassButton
            label="Unlock"
            color="green"
            function={function toggleAdd() {
              api.instant();
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
