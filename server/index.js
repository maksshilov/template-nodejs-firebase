// const express = require("express");
// const cors = require("cors");
// const dotenv = require("dotenv");

// const env = process.env.NODE_ENV || "dev";
// dotenv.config({ path: `./.env/.${env}` });

// const app = express();
// const router = express.Router();

// const PORT = process.env.PORT;

// app.use(cors());
// app.use(express.json({ extendet: true }));
// app.use("/api", router);

// async function start() {
//   try {
//     app.listen(PORT, () => console.log(`Server starts at port ${PORT}\nFIREBASE = ${process.env.FIREBASE}`));
//   } catch (error) {
//     process.exit();
//   }
// }

// start();

import express from "express";
import cors from "cors";
import config from "./config.js";
import checkListRoute from "./routes/checkList.js";

const app = express();

app.use(cors());
app.use(express.json({ extendet: true }));
app.use("/api", checkListRoute);

app.listen(config.port, () => console.log(`Server is live @ ${config.hostUrl}`));
