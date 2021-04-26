const mongoose = require('mongoose')
const schema = mongoose.Schema

const menuitemsSchema = new schema(
  {
    name: {
      type: String
    },
    price_small: {
      type: String,
    },
    price_large: {
      type: String
    }
  }
  ,
  { timestamps: true }
)

module.exports = mongoose.model('menu_items', menuitemsSchema)
