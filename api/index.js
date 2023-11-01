// Create express server
const express = require("express");
const app = express();
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// Setup Passport
app.use(
  cookieSession({
    name: "ggrammar-session",
    keys: ["randomkey"],
    resave: true,
    maxAge: 12 * 60 * 60 * 1000, // 12 hours
  })
);

app.use(passport.initialize());
app.use(passport.session());
const User = require("./models/user");

require("./config/passport")(passport, User);

app.use("/user", require("./routes/userRoutes"));

// TODO: Move to building services rather than putting everything in here
// Import Word Model
const Word = require("./models/word");

// get all words
app.get("/words", async (req, res) => {
  const words = await Word.findAll();
  res.json(words);
});

// @desc   Check if word exists in database
// @route  GET /words/:word
// @access Public
app.get("/words/:word", async (req, res) => {
  const word = await Word.findOne({ where: { word: req.params.word } });
  if (word) {
    res.json(word);
  } else {
    res.json({ message: "Word not found" });
  }
});

// @desc   Return status of the API
// @route  GET /status
// @access Public
app.get("/status", (req, res) => {
  res.json({ message: "The Gadget Grammar API is running" });
});

// Initialize server and listen on specified port
app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
