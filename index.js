const express = require('express')
var expressLayouts = require('express-ejs-layouts');
const querystring = require("querystring")
const { MongoClient, ServerApiVersion } = require('mongodb')
var path = require('path');
var bodyParser = require('body-parser');
const app = express()
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// const uri = "mongodb+srv://tuanvo92:"+querystring.escape('Team@123')+"@cluster0.ae1yz.mongodb.net/?retryWrites=true&w=majority"
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })
// client.connect().then(res => { console.log('Connected')})
//Routes
app.use('/', require('./routes/login'))
app.use('/', require('./routes/home'))
app.use('/', require('./routes/about'))
app.use('/', require('./routes/contact'))
const PORT = process.env.PORT || 4112

app.listen(PORT, console.log("Server don start for port: " + PORT))

module.exports = app