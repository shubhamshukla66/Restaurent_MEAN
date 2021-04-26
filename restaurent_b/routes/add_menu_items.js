var express = require('express');
var router = express.Router();
const{create_menu_items,menu_list_item,edit_menu_item,remove_menu_item } = require("../controller/add_menu_items")


router.post("/user/add_menu_items",create_menu_items)
router.get("/menu/menu_list/:user_id",menu_list_item)
router.put("/user/edit_menu_items/:user_id",edit_menu_item)
router.delete("/user/remove_menu_items/:user_id",remove_menu_item)


module.exports = router;