var express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
require('dotenv').config()
var expressValidator = require('express-validator')
var path = require('path')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const http = require('http').Server(app)

if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}


app.get("/demo", (req, res) => {
  res.send("good shubham")
})


//User_details_routes
const User = require('./routes/user_signin')
const Category = require('./routes/add_category')
const menu_item = require('./routes/add_menu_items')


app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true,
  parameterLimit: 50000
}));

app.use(cors())
app.use(morgan('dev'))
app.use(express.json());

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))



mongoose.Promise = global.Promise
const PASSWORD = encodeURIComponent('');
const database = 'Restaurant'
const databs = encodeURI(``)
mongoose.set('useFindAndModify', false);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB Connected'))
  .catch(() => console.log('not conected'))



  //user_middleware
app.use('/api',User)
app.use('/api',Category)
app.use('/api',menu_item)

const port = process.env.PORT || 5000
http.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
