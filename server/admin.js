const express = require("express");
const path = require("path");
const bcrypt = require("bcryptjs");
const redis = require("redis");

const redisClient = redis.createClient();
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
  const { username, password } = req.body;
  redisClient.get(`user:${username}`, function (err, reply) {
    if (reply && bcrypt.compareSync(password, reply)) {
      res.send("Admin authenticated");
    } else {
      res.status(400).json({ message: "Username or password is incorrect" });
    }
  });
}
