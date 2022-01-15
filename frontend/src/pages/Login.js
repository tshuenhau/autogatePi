import * as api from "../api/index";
import classes from "./Login.module.css";
import { useState } from "react";
import axios from "axios";

function Login() {
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // send the username and password to the server
    const response = await axios.post(
      "http://116.15.19.109:5152/login",
      password
    );
    // set the state of the user
    setUser(response.data);
    // store the user in localStorage
    localStorage.setItem("user", response.data);
    console.log(response.data);
  };
  // if there's a user show the message below
  if (user) {
    return <div>{user.name} is loggged in</div>;
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
