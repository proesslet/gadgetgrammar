// Create express server
const express = require("express");
const app = express();

// Import models
const Word = require("./models/word");
// get all words
app.get("/words", async (req, res) => {
  const words = await Word.findAll();
  res.json(words);
});

app.get("/", (req, res) => {
  res.json({ message: "The Gadget Grammar API is running" });
});

app.get("/newWord", (req, res) => {
  res.json({ word: "mouse" });
});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
