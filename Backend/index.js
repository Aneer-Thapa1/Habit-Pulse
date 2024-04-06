const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const db = require("./config/dbConfig");

const port = 8900;

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("uploads"));

app.listen(port, () => {
  console.log("Listening on http://localhost:" + port);
});
