import * as api from "../api/index";
import classes from "./Login.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [savedPassword, setSavedPassword] = useState();
  useEffect(() => {
    const previouslySavedPassword = localStorage.getItem("savedPassword");
    if (previouslySavedPassword) {
      //const foundSavedPassword = JSON.parse(previouslySavedPassword);
      setSavedPassword(previouslySavedPassword);
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // send the username and password to the server
    const response = await axios.post(
      "http://116.15.19.109:5152/authentication/login",
      {
        password: password,
      }
    );
    // set the state of the user
    setSavedPassword(response.data);
    // store the user in localStorage
    localStorage.setItem("savedPassword", response.data.toString());
    console.log(response.data.toString());
  };
  // if there's a user show the message below
  if (savedPassword) {
    navigate("/unlock");

    console.log(savedPassword);

    return <div>{savedPassword} is loggged in</div>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="password">password: </label>
        <input
          type="password"
          value={password}
          placeholder="enter a password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
