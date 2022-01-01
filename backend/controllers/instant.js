import { schedule } from "../testdata.js";
import { addSchedule } from "../testdata.js";
import { Gpio } from "onoff";

//const Gpio = require("onoff").Gpio;
var relay = new Gpio(18, "out");
relay.writeSync(0);

// import arr from "../index";

export const instant = (req, res) => {
  res.send("Instant Unlock");
  console.log("Unlock");
  console.log("Instant Unlock @ " + req.body.time);
  addSchedule(req.body.time); // this is for testing purposes for the schedule unlock later on
  console.log(schedule); // this is for testing purposes for the schedule unlock later on
  //set gpio to high/low

  setTimeout(() => {
    relay.writeSync(1);
  }, 3000);
  relay.writeSync(0);
};
