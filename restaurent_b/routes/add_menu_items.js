var express = require('express');
var router = express.Router();
const{create_menu_items } = require("../controller/add_menu_items")


router.post("/user/add_menu_items/:userId",create_menu_items)
//router.put("/admin/edit_sub_category/:adminId/:subcatId",isAdmin,edit_sub_cat)
//router.delete("/admin/remove_sub_category/:adminId/:subcatId",isAdmin,remove_sub_cat)

module.exports = router;