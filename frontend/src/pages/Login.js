import * as api from "../api/index";
import classes from "./Login.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/fontawesome-free-solid";

function Login() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [savedPassword, setSavedPassword] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    let isMounted = true;
    const previouslySavedPassword = localStorage.getItem("savedPassword");
    if (previouslySavedPassword) {
      api.checkAuth().then((res) => {
        if (isMounted) {
          setIsAuthenticated(res);
          console.log(res);
        }
      });
    }
    if (isAuthenticated) {
      navigate("/");
      console.log(savedPassword);
    }
    return () => {
      isMounted = false;
    };
  }, [isAuthenticated, navigate, savedPassword]);

  // useEffect(() => {
  //   let isMonunted = true;
  //   const previouslySavedPassword = localStorage.getItem("savedPassword");
  //   if (previouslySavedPassword) {
  //     api.checkAuth().then((res) => {
  //       if (isMonunted) {
  //         setIsAuthenticated(res);
  //         console.log(res);
  //       }
  //     });
  //   }
  //   if (isAuthenticated) {
  //     navigate("/");
  //     console.log(savedPassword);
  //   }
  // }, [isAuthenticated, navigate, savedPassword]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // send the username and password to the server
    const response = await axios.post(
      "http://116.15.20.163:5152/authentication/login",
      {
        password: password,
      }
    );
    // set the state of the user
    setTimeout(() => {
      setSavedPassword(response.data);
      localStorage.setItem("savedPassword", response.data.toString());
      console.log(response.data.toString());
    }, 150);
    // store the user in localStorage
  };

  return (
    <form onSubmit={handleSubmit} className={classes.glasspanel}>
      <h1 className={classes.title}>Login</h1>
      <div className={classes.content}>
        <div className={classes.field}>
          <input
            className={classes.input}
            type="password"
            value={password}
            placeholder="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
          <div className={classes.iconbox}>
            <FontAwesomeIcon icon={faLock} size="lg" />
          </div>
        </div>
        <button type="submit" className={classes.loginbutton}>
          Login
        </button>
      </div>
    </form>
  );
}

export default Login;
