import express from "express";
import { login } from "../controllers/login.js";
import sqlite3 from "sqlite3";
var db = new sqlite3.Database("../../database.db");

const router = express.Router();

let sql = "SELECT password FROM login WHERE password = ?";
router.get("/", (req, res) => {
  db.get(sql, "opensesame", (err, row) => {
    if (err) {
      return console.error(err.message);
    }
    return row ? console.log(row.password) : console.log("No record found");
  });
  res.send("Login Page");
});

router.post("/login", login);

export default router;
