import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import unlock from "./routes/unlock.js";
import unlockbackup from "./routes/unlock.js";

import authentication from "./routes/authentication.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/unlock", unlock);

app.use("/unlockbackup", unlockbackup);

app.use("/authentication", authentication);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
