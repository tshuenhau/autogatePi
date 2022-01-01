import { schedule } from "../testdata.js";
import { addSchedule } from "../testdata.js";
import { Gpio } from "onoff";

//const Gpio = require("onoff").Gpio;
var relay = new Gpio(14, "high");
let lock = false;
// import arr from "../index";
export const instant = (req, res) => {
  if (lock) {
    res.send("Server Busy");
    return;
  }
  lock = true;
  res.send("Unlock");
  console.log("Unlock");
  console.log("Instant Unlock @ " + req.body.time);
  addSchedule(req.body.time); // this is for testing purposes for the schedule unlock later on
  console.log(schedule); // this is for testing purposes for the schedule unlock later on
  //set gpio to high/low

  //while (relay.readSync() != 0) {}
  setTimeout(() => {
    relay.writeSync(1);
  }, 3000);
  relay.writeSync(0);
  lock = false;
};
