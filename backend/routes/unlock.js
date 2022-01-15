import express from "express";
import { unlock } from "../controllers/unlock.js";

const router = express.Router();
let unlocked = false;

router.get("/", (req, res) => {
  res.send("Unlock Page");
});

router.post("/instant", unlock);

export default router;
