import { schedule } from "../static/testdata.js";
import { addSchedule } from "../static/testdata.js";
import { Gpio } from "onoff";
import { unlocked, unlock, lock } from "../static/gatestatus.js";

//const Gpio = require("onoff").Gpio;
var relay = new Gpio(18, "low");
// import arr from "../index";
export const instant = (req, res) => {
  if (unlocked) {
    res.send("Server Busy");
    return;
  }
  unlock();
  res.send("Unlock");
  console.log("Unlock");
  console.log("Instant Unlock @ " + req.body.time);
  addSchedule(req.body.time); // this is for testing purposes for the schedule unlock later on
  console.log(schedule); // this is for testing purposes for the schedule unlock later on
  relay.writeSync(1);

  setTimeout(() => {
    relay.writeSync(0);
    lock();
  }, 3000);
};
