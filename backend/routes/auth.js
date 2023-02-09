const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

require("../db/conn");
const User = require("../models/userSchema");

router.post("/sign_up", async (req, res) => {
  const { uname, password } = req.body;
  if (!uname || !password) {
    return res.sendStatus(400);
  }

  try {
    const exists = await User.findOne({ uname: uname });
    if (exists) {
      return res.sendStatus(409);
    }

    const user = new User({ uname, password });
    await user.save();
    return res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
});

router.post("/password_manager", async (req, res) => {
  try {
    const { uname, password } = req.body;
    if (!uname || !password) {
      return res.sendStatus(400);
    }

    const exist = await User.findOne({ uname: uname });
    if (exist) {
      if (exist.password === password) {
        let secret = "IHAVEAPENIHAVEANAPPLEAPPLEPEN";
        const token = jwt.sign({ id: exist._id }, secret, {
          expiresIn: "60min",
        });
        res.cookie("evrythng", token, {
          expires: new Date(Date.now() + 3600000),
          httpOnly: true,
        });
        return res.sendStatus(200);
      } else {
        return res.sendStatus(409);
      }
    } else {
      return res.sendStatus(409);
    }
  } catch (err) {
    console.log(err);
  }
});



module.exports = router;
