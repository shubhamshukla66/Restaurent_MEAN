var express = require('express');
var router = express.Router();
const{ create_cat } = require("../controller/add_category")

router.post("/user/add_category",create_cat)


module.exports = router;