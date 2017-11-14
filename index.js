'use strict';
var express = require('express')
var bodyParser = require('body-parser')
var expressValidator = require('express-validator')
var errorcodes = require('./utils/errorcodes')
var cors = require('cors');
var port = process.env.PORT || 3003;
var app = express()
var router = express.Router();

app.use(cors());
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(expressValidator())
app.use(function (error, req, res, next) {
  res.status(400).json(errorcodes.bodyParser)
})
app.use(function (req, res, next) {
  if (req.is('multipart/form-data')) {

  } else {
    req.headers["content-type"] = "application/json"
  }

  res.header("Access-Control-Allow-Origin", "*")
  // res.header("Access-Control-Allow-Headers", "Origin,Authorization,X-HIP-KEY,X-Requested-With, Content-Type, Accept")
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Credentials',false)
  next()
})




router.use(require('./userroutes'))
module.exports = router;
