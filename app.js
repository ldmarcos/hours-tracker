const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./src/routes/index.js')
app.use(express.json());
app.use(bodyParser.json());
routes(app)

module.exports=app;