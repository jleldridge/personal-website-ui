const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const rootDir = process.cwd();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/admin", require("./admin"));
app.use(require("./error"));

console.log("server started!");
app.listen(9000);
