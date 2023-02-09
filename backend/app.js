const dotenv = require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(require("./routes/auth"));
app.use(require("./routes/vault"));

const PORT = process.env.PORT;

app.listen(PORT, (req, res) => {
  console.log("Started at port " + PORT);
});
