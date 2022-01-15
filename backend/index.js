import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import unlock from "./routes/unlock.js";
import login from "./routes/login.js";
import sqlite3 from "sqlite3";

const app = express();

var db = new sqlite3.Database("../../database.db");

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/unlock", unlock);
app.use("/login", login);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
