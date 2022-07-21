import { Gpio } from "onoff";
import { isUnlocked, setUnlocked, setLocked } from "../static/gatestatus.js";

//const Gpio = require("onoff").Gpio;
var relay1 = new Gpio(18, "low");
var relay2 = new Gpio(12, "low");

// import arr from "../index";
export const unlock = (req, res) => {
  if (isUnlocked) {
    res.send("Server Busy");
    return;
  }
  setUnlocked();
  res.send("Unlock");
  console.log("Unlock");
  relay1.writeSync(1);

  setTimeout(() => {
    relay1.writeSync(0);
    setLocked();
  }, 3000);
};

// import arr from "../index";
export const unlockbackup = (req, res) => {
  if (isUnlocked) {
    res.send("Server Busy");
    return;
  }
  setUnlocked();
  res.send("UnlockBackup");
  console.log("UnlockBackup");
  relay2.writeSync(1);

  setTimeout(() => {
    relay2.writeSync(0);
    setLocked();
  }, 3000);
};
