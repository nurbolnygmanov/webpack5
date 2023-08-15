const express = require("express");

const path = require("path");
const fs = require("fs");

const app = express();

app.use("/", express.static(path.resolve(__dirname, "../dist")));
app.get("*", function (req, res) {
  const pathToHtml = path.resolve(__dirname, "../dist/dashboard.html");
  const contentFromHtml = fs.readFileSync(pathToHtml, "utf-8");

  res.send(contentFromHtml);
});

app.listen(9000, () => {
  console.log("dashboard running on", 9000);
});
