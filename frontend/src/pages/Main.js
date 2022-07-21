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
    //   const savedPassword = localStorage.getItem("savedPassword");
    //   axios
    //     .get("http://116.15.19.109:5152/authentication/isLoggedIn", {
    //       params: { password: savedPassword },
    //     })
    //     .then((res) => {
    //       setIsAuthenticated(res.data);
    //     });
    api.checkAuth().then((res) => {
      setIsAuthenticated(res);
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
          {isAuthenticated ? (
            <div>
              <GlassButton
                label="Open"
                color="green"
                function={function toggleAdd() {
                  api.instant();
                }}
              />
              <GlassButton
                label="Backup"
                color="orange"
                function={function toggleAdd() {
                  api.backup();
                }}
              />
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
