import express from "express";
import { login } from "../controllers/login.js";
import { db } from "./../index.js";

const router = express.Router();

let sql = "SELECT pass FROM login WHERE password = ?";
let sql = "SELECT ";
router.get("/", (req, res) => {
  db.get(sql, "opensesame", (err, row) => {
    if (err) {
      return console.error(err.message);
    }
    return row ? console.log(row.id, row.name) : console.log("No record found");
  });
  res.send("Login Page");
});

router.post("/login", login);

export default router;
