import express from "express";
import { login } from "../controllers/login.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Login Page");
});

router.post("/login", login);

export default router;
