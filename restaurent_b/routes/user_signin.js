var express = require('express');
var router = express.Router();
const{ user_signup,user_Login,facebook_Login,logout}  = require("../controller/user_signin")

router.post("/user/signup_user",user_signup)
router.post("/user/login_user",user_Login)
router.post("/user/login_facebook",facebook_Login)
router.get("/user_logout",logout)

module.exports = router;