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

exports.menu_list_item = (req, res) => {
    //console.log(req.params._id)
    menu_items.findOne({ _id: req.params.user_id })
        .exec((err, List) => {
            if (err) {
                res.json(err)
            }
            else {

                res.json(List)
            }
        })
}

exports.edit_menu_item = (req, res) => {
    menu_items.updateOne({ _id: req.params.user_id }, req.body, (err, resp) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json(resp)
        }
    })
}
exports.remove_menu_item =(req,res)=>{
    menu_items.deleteOne({_id:req.params.user_id},(err,del_itm)=>{
        if(err){
            res.json(err)
        }
        else{
            res.json({code:200,resp:del_itm})
        }
    })
}