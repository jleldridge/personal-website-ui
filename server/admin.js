const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = process.cwd();

// routes
router.get("/", adminRoot);
router.get("/login", getLogin);
router.post("/login", postLogin);

module.exports = router;

function adminRoot(req, res, next) {
  res.send("Hello unauthed admin!");
}

function getLogin(req, res, next) {
  res.sendFile(path.join(rootDir, "server", "views", "login.html"));
}

function postLogin(req, res, next) {
  res.send("Hello admin!");
}
