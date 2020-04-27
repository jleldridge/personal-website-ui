const bcrypt = require("bcryptjs");
const redis = require("redis");

const redisClient = redis.createClient();

bcrypt.genSalt(10, function (err, salt) {
  if (err) return err;
  console.log("Got salt");
  bcrypt.hash(process.argv[2], salt, function (err, hash) {
    if (err) return err;
    console.log("Got hash, setting in redis");
    redisClient.set("user:admin", hash, function (err, reply) {
      if (err) return err;
      console.log(reply);
      redisClient.save(function (err, reply) {
        if (err) console.log(err);
        console.log("Saved new password successfully!");
        process.exit();
      });
    });
  });
});
