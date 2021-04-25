const mongoose = require('mongoose')
const schema = mongoose.Schema

const menuitemsSchema = new schema(
    {
        menu_items:{
            type:String
        },
  }
,
  { timestamps: true }
)

module.exports = mongoose.model('menu_items', menuitemsSchema)
