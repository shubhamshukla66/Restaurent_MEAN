const category = require('../model/add_category')

exports.create_cat= (req,res)=>{
    console.log(req.body)
    var catObj = new category(req.body)
    console.log(catObj)
    catObj.save((err,cat)=>{
        if(err){
            res.json(err)
        }
        else{
            res.send(cat)
        }
    })
}