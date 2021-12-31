import express from "express";
import { instant } from "../controllers/instant.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Unlock Page");
});

router.post("/instant", instant);

export default router;
