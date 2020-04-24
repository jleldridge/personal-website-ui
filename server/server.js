const express = require("express");
const path = require("path");
const app = express();
var router = express.Router();
const rootDir = process.cwd();

// app.get("/", function (req, res) {
//   console.log(req);
//   res.sendFile(path.join(rootDir, "build", "index.html"));
// });

app.get("/admin/login", function (req, res) {
  res.sendFile(path.join(rootDir, "server", "views", "login.html"));
});

app.post("/admin/login", function (req, res) {
  console.log(req);
  res.send("Hello admin!");
});

app.use(require(path.join(rootDir, "server", "error-handler")));
app.use(express.static(path.join(rootDir, "build")));

console.log("server started!");
app.listen(9000);
