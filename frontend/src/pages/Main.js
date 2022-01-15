import * as api from "../api/index";
import GlassButton from "../components/glassbutton/GlassButton.js";
import classes from "./Main.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

// send a http request to check with server if credentials are valid
function Main() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const savedPassword = localStorage.getItem("savedPassword");
    axios
      .get("http://116.15.19.109:5152/authentication/isLoggedIn", {
        params: { password: savedPassword },
      })
      .then(function (response) {
        console.log(response);
      });
  }, []);

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
