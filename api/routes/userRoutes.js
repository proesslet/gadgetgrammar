const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const passport = require("passport");
const authMiddleware = require("../middleware/auth.js");

const User = require("../models/user");

router.post("/incrementstreak", (req, res) => {
  User.update(
    { currentstreak: req.body.currentstreak + 1 },
    { where: { username: req.body.username } }
  )
    .then((user) => {
      User.findOne({ where: { username: req.body.username } }).then((user) => {
        if (user.currentstreak > user.higheststreak) {
          User.update(
            { higheststreak: user.currentstreak },
            { where: { username: req.body.username } }
          );
        }
      });
    })
    .then(() => {
      res.json({ message: "Streak updated" });
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

router.post("/resetstreak", (req, res) => {
  User.update({ currentstreak: 0 }, { where: { username: req.username } })
    .then(() => {
      res.json({ message: "Streak reset" });
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

router.get("/getstreak", (req, res) => {
  User.findOne({ where: { username: req.body.username } })
    .then((user) => {
      res.json({ status: user.currentstreak });
    })
    .catch((err) => {
      res.send("error: " + err);
    });
});

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

// @desc   Login user
// @route  POST /user/login
// @access Public
router.post("/login", (req, res, next) => {
  if (!req.body.username && !req.body.password) {
    res.status(400).json({ error: "Username and password required" });
  }

  if (req.body.username && req.body.password) {
    // Use Passport to authenticate
    passport.authenticate("local", (err, user, info) => {
      if (err) {
        console.log(err);
        return next(err);
      }
      if (!user) {
        return res.status(400).send(info.message);
      }

      req.logIn(user, (err) => {
        res.json({
          status: "Successfully logged in",
          user: {
            username: user.username,
            currentstreak: user.currentstreak,
            higheststreak: user.higheststreak,
          },
        });
      });
    })(req, res, next);
  }
});

// @desc   Logout user
// @route  GET /user/logout
// @access Public
router.post("/logout", (req, res) => {
  req.logout();
  res.send("Successfully logged out");
});

// @desc   Get user data
// @route  GET /user
// @access Private
router.get("/", (req, res) => {
  if (req.user) {
    res.json({
      user: {
        username: req.user[0].username,
        currentstreak: req.user[0].currentstreak,
        higheststreak: req.user[0].higheststreak,
      },
    });
  }
});

module.exports = router;
