// setup server
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var storeRoute = require('./route/store.route');
var bookRoute = require('./route/book.route');

var app = express();



app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json());








app.use("/api/v1" , storeRoute);
app.use("/api/v1" , bookRoute);



const server= app.listen(4000, () => {
    console.log(`Server start ....... `)
})








