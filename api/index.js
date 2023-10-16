// Create express server
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "The Gadget Grammar API is running" });
});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
