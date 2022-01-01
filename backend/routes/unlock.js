import express from "express";
import { instant } from "../controllers/instant.js";
import { Gpio } from "onoff";

//const Gpio = require("onoff").Gpio;
var relay = new Gpio(14, "high");
const router = express.Router();
let lock = false;

router.get("/", (req, res) => {
  res.send("Unlock Page");
});

router.post("/instant", (req, res) => {
  if (lock) {
    res.send("Server is Busy");
    return;
  }
  lock = true;
  res.send("Unlock");
  // console.log("Unlock");
  // console.log("Instant Unlock @ " + req.body.time);
  // addSchedule(req.body.time); // this is for testing purposes for the schedule unlock later on
  // console.log(schedule); // this is for testing purposes for the schedule unlock later on
  //set gpio to high/low

  //while (relay.readSync() != 0) {}
  setTimeout(() => {
    relay.writeSync(1);
  }, 3000);
  relay.writeSync(0);
  lock = false;
});

export default router;
