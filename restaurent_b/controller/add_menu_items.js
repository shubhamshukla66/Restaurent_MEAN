const menu_items = require('../model/add_menu_items')
const Category = require("../model/add_category")

exports.create_menu_items= (req,res)=>{
    var menuitmObj = new menu_items(req.body)
    menuitmObj.save((err,menu_itm)=>{
        if(err){
            res.json(err)
        }
        else{
            Category.findOneAndUpdate({category_name:req.body.category_name},{$push:{menu_items:menu_itm._id}},
                (err,resp)=>{
                    if(err){
                        res.json(err)
                    }
                    else{
                        res.json(menu_itm)
                    }
                })
        }
    })
}