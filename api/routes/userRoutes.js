const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const User = require("../models/user");

// @desc   Register new user
// @route  POST /user/register
// @access Public
router.post("/register", (req, res) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 10);

  User.create({
    username: req.body.username,
    password: hashedPassword,
  })
    .then((user) => {
      res.json({ status: user.email + " registered" });
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

module.exports = router;
