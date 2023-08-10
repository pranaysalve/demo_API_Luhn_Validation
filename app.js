const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { default: helmet } = require("helmet");
const fs = require("fs");
const { default: rateLimit } = require("express-rate-limit");

const xss = require("xss-clean");
const compression = require("compression");
const app = express();
const { CardVaildity } = require("./utils");
app.use(bodyParser.json());
app.enable("trust proxy");

app.options("*", cors());

app.post("/", cors(), async (req, res) => {
  console.log(req.body.CardDetails);
  const Validity = CardVaildity(String(req.body.CardDetails));
  res.status(200).json({
    validity: Validity,
    message: Validity === true ? "Card is valid" : "Card is not valid",
  });
});

module.exports = app;
