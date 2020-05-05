const express = require("express");
const redisClient = require("../redisClient");

const router = express.Router();

router.get("/", getHome);
router.post("/", updateHome);

module.exports = router;

function getHome(req, res, next) {
  redisClient.get("content:home", function (err, reply) {
    if (reply) {
      res.json(JSON.parse(reply));
    } else {
      res.json({});
    }
  });
}

function updateHome(req, res, next) {
  redisClient.set("content:home", JSON.stringify(req.body), function (
    err,
    reply
  ) {
    res.send(reply);
  });
}
