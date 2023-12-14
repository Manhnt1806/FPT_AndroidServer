var express = require("express");
var config = require("../config/database");
require("../config/passport")(passport);
var express = require("express");
var jwt = require("jsonwebtoken");
var router = express.Router();
var User = require("../models/user");
var router = express.Router();

router.use(bodyParser.json());

const parser = bodyParser.urlencoded({ extended: true });


module.exports = router;