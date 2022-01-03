import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main.js";
import { useState } from "react";

function App() {
  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
