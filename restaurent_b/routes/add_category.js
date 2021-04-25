var express = require('express');
var router = express.Router();
const{ create_cat,list_cat,edit_cat,remove_cat } = require("../controller/add_category")


//router.get("/admin/category_list/:adminId",isAdmin,list_cat)
router.post("/user/add_category",create_cat)
//router.put("/admin/edit_category/:adminId/:catId",isAdmin,edit_cat)
//router.delete("/admin/remove_category/:adminId/:catId",isAdmin,remove_cat)

module.exports = router;