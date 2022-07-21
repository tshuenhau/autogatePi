import express from "express";
import { unlock, unlockbackup } from "../controllers/unlock.js";

const router = express.Router();
let unlocked = false;

router.get("/", (req, res) => {
  res.send("Unlock Page");
});

router.post("/instant", unlock);
router.post("/backup", unlockbackup);

export default router;
