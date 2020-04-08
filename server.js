/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const path = require('path');
const compression = require('compression');
const zlib = require('zlib');

const app = express();

app.use(compression({ level: zlib.Z_BEST_SPEED }));
app.use(express.static(path.join(__dirname, 'dist')));

app.all('*', function(_, res) {
  return res.status(200).sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);

module.exports = app;
