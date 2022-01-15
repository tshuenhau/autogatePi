import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main.js";
import Login from "./pages/Login.js";

import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.app}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
