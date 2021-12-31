import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import unlock from "./routes/unlock.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use("/unlock", unlock);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
