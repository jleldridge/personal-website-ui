const express = require("express");
const path = require("path");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const redisClient = require("./redisClient");
const config = require("./config.json");

const router = express.Router();
const rootDir = process.cwd();

// routes
router.post("/login", login);

module.exports = router;

function login(req, res, next) {
  const { username, password } = req.body;
  redisClient.get(`user:${username}`, function (err, reply) {
    if (reply && bcrypt.compareSync(password, reply)) {
      const token = jwt.sign({ sub: "admin" }, config.secret, {
        expiresIn: "1d",
      });
      res.json({ user: "admin", token });
    } else {
      res.status(400).json({ message: "Username or password is incorrect" });
    }
  });
}
