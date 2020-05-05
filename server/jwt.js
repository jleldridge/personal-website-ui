const expressJwt = require("express-jwt");
const config = require("./config.json");

module.exports = jwt;

function jwt() {
  const secret = config.secret;
  return expressJwt({ secret, isRevoked }).unless({
    path: [
      // public routes that don't require authentication
      "/admin/login",
      {
        url: "/content/home",
        method: "GET",
      },
    ],
  });
}

async function isRevoked(req, payload, done) {
  //todo don't really need this for just the admin user,
  // but might want to implement it anyway to be safe.
  //   const user = await userService.getById(payload.sub);

  //   // revoke token if user no longer exists
  //   if (!user) {
  //     return done(null, true);
  //   }

  done();
}
