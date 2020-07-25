const express = require('express');
const bodyParser = require('body-parser');
const { config } = require('./config/index')
const routes = require('./api/routes');

var app = express();

app.use(bodyParser());
routes(app);

app.listen(config.port, () => {
  console.log(`server running port ${config.port}`);
});