var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");
app.use(bodyParser.json());
app.use(express.static(__dirname + '/ShintoAngular/dist'))

app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./ShintoAngular/dist/index.html"))
})

app.listen(8000, function(){
    console.log("listen on port 8000");
})