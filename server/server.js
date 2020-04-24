const express = require("express");
const path = require("path");
const app = express();
const rootDir = process.cwd();

app.use("/admin", require("./admin"));
app.use(require(path.join(rootDir, "server", "error-handler")));
app.use(express.static(path.join(rootDir, "build")));

console.log("server started!");
app.listen(9000);
