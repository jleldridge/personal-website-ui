const express = require('express');
const path = require('path');
const app = express();
const rootDir = process.cwd();

app.use(express.static(path.join(rootDir, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(rootDir, 'build', 'index.html'));
});

app.listen(9000);