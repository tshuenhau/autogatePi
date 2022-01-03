import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main.js";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.app}>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
