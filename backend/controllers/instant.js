import { schedule } from "../testdata.js";
import { addSchedule } from "../testdata.js";
import { Gpio } from "onoff";
//const Gpio = require("onoff").Gpio;
var relay = new Gpio(18, "out");
// import arr from "../index";

export const instant = (req, res) => {
  res.send("Instant Unlock");
  console.log("Instant Unlock @ " + req.body.time);
  addSchedule(req.body.time); // this is for testing purposes for the schedule unlock later on
  console.log(schedule); // this is for testing purposes for the schedule unlock later on
  //set gpio to high/low
  try {
    relay.writeSync(0);
    time.sleep(3);
  } finally {
    relay.writeSync(1);
  }
};
