const mongoose = require('mongoose')
const schema = mongoose.Schema

const categorySchema = new schema(
    {
        thali_items:{
            type:String,
            require:true,
        },
        mini_meals:{
            type:String
        },
        snacks:{
          type:String
        },
        menu_items:[{
          type:schema.Types.ObjectId,
          ref:'menu_items'
        }]
  }
,
  { timestamps: true }
)

module.exports = mongoose.model('category', categorySchema)
