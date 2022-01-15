import express from "express";
import { login } from "../controllers/login.js";
import sqlite3 from "sqlite3";
var db = new sqlite3.Database("../../database.db");

const router = express.Router();

let sql = "SELECT password FROM login WHERE password = ?";
router.post("/", (req, res) => {
  db.get(sql, req.body.password, (err, result) => {
    console.log(req.body);
    if (err) {
      return console.error(err.message);
    }
    return result
      ? res.send(result)
      : res.send({ message: "Invalid Password" });
  });
});

export default router;
