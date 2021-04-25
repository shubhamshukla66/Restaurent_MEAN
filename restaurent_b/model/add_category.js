const mongoose = require('mongoose')
const schema = mongoose.Schema

const categorySchema = new schema(
    {
        Thali_Items:{
            type:String,
            require:true,
        },
        Mini_Meals:{
            type:String
        },
        Snacks:{
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
