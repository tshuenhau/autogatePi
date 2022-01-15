import sqlite3 from "sqlite3";

var db = new sqlite3.Database("../../database.db");

export const login = (req, res) => {
  const password = req.body.password;
};
