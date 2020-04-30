const express = require("express");
const path = require("path");
const bcrypt = require("bcryptjs");
const router = express.Router();
const rootDir = process.cwd();
const redisClient = require("./redisClient");

// routes
router.get("/", getIndex);
router.get("/login", getLogin);
router.post("/login", postLogin);

module.exports = router;

function getIndex(req, res, next) {
  res.sendFile(path.join(rootDir, "server", "views", "admin", "index.html"));
}

function getLogin(req, res, next) {
  res.sendFile(path.join(rootDir, "server", "views", "admin", "login.html"));
}

function postLogin(req, res, next) {
  const { username, password } = req.body;
  redisClient.get(`user:${username}`, function (err, reply) {
    if (reply && bcrypt.compareSync(password, reply)) {
      res.send("Admin authenticated");
    } else {
      res.status(400).json({ message: "Username or password is incorrect" });
    }
  });
}
