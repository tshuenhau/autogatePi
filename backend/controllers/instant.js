import { schedule } from "../testdata.js";
import { addSchedule } from "../testdata.js";
import { Gpio } from "onoff";
//import { unlocked } from "../gatestatus";
let unlocked = false;
//const Gpio = require("onoff").Gpio;
var relay = new Gpio(14, "high");
// import arr from "../index";
export const instant = (req, res) => {
  if (unlocked) {
    res.send("Server Busy");
    return;
  }
  unlocked = true;
  res.send("Unlock");
  console.log("Unlock");
  console.log("Instant Unlock @ " + req.body.time);
  addSchedule(req.body.time); // this is for testing purposes for the schedule unlock later on
  console.log(schedule); // this is for testing purposes for the schedule unlock later on

  setTimeout(() => {
    relay.writeSync(1);
    unlocked = false;
  }, 3000);
  relay.writeSync(0);
};
