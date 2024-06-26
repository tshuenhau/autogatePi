import * as api from "../api/index";
import GlassButton from "../components/glassbutton/GlassButton.js";
import classes from "./Main.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// send a http request to check with server if credentials are valid
function Main() {
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    api.checkAuth().then((res) => {
      setIsAuthenticated(res);
    });
  }, []);

  return (
    <div className={classes.main}>
      <div className={classes.center}>
        <div className={classes.column}>
          {isAuthenticated ? (
            <div className={classes.buttonsection}>
              <GlassButton
                label="Open"
                color="green"
                function={function toggleAdd() {
                  api.instant();
                }}
              />
              <div
                className={[classes.column, classes.backupsection].join(" ")}
              >
                <div className={classes.backuptext}>
                  Not Working? <br></br> Try this instead.
                </div>
                <div className={classes.backup}>
                  <GlassButton
                    label="Open2"
                    color="orange"
                    function={function toggleAdd() {
                      api.backup();
                    }}
                  />
                </div>
              </div>
            </div>
          ) : (
            <GlassButton
              label="Login"
              color="red"
              function={function login() {
                setTimeout(() => {
                  navigate("/login");
                }, 1850);
                console.log("login");
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;
