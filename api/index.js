var express = require('express');
const router = require('./router')
var app = express();
router(app)
app.listen(3000);