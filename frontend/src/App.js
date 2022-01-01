import { Route, Switch } from "react-router-dom";
import * as api from "./api";

function App() {
  return <button onClick={api.instant}>Unlock2</button>;
}

export default App;
