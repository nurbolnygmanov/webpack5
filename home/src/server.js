const path = require("path");
const fs = require("fs");

const express = require("express");

const app = express();

app.use("/", express.static(path.resolve(__dirname, "../dist")));

app.get("/", function (req, res) {
  const pathToHtml = path.resolve(__dirname, "../dist/home.html");
  const contentFromHtml = fs.readFileSync(pathToHtml, "utf-8");

  res.send(contentFromHtml);
});

app.listen(9001, () => {
  console.log("app port ", 9001);
});
