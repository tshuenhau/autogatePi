import { Gpio } from "onoff";
import { isUnlocked, setUnlocked, setLocked } from "../static/gatestatus.js";

//const Gpio = require("onoff").Gpio;
var relay = new Gpio(18, "low");
// import arr from "../index";
export const unlock = (req, res) => {
  if (isUnlocked) {
    res.send("Server Busy");
    return;
  }
  setUnlocked();
  res.send("Unlock");
  console.log("Unlock");
  relay.writeSync(1);

  setTimeout(() => {
    relay.writeSync(0);
    setLocked();
  }, 3000);
};
