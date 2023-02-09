const express = require("express");
const router = express.Router();
require("../db/conn");
const Credential = require("../models/userCredentials");
const authenticate = require("../middleware/authenticate");

router.get("/vault", authenticate, async (req, res) => {
  const id = req.user;
  const data = await Credential.find({ user_id: id });
  res.send(data);
});

router.post("/vault", authenticate, async (req, res) => {
  try {
    const user_id = req.user;
    const { site, username, password } = req.body;
    if (!site || !username || !password) {
      return res.sendStatus(400);
    }
    const cred = new Credential({ user_id, site, username, password });
    await cred.save();
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(400);
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie("evrythng", { path: "/" }).sendStatus(200);
});

module.exports = router;
