import { schedule } from "../static/testdata.js";
import { addSchedule } from "../static/testdata.js";
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
  console.log("Instant Unlock @ " + req.body.time);
  addSchedule(req.body.time); // this is for testing purposes for the schedule unlock later on
  console.log(schedule); // this is for testing purposes for the schedule unlock later on
  relay.writeSync(1);

  setTimeout(() => {
    relay.writeSync(0);
    setLocked();
  }, 3000);
};
