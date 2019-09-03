var express = require("express");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller.js")
var bodyParser = require("body-parser")
var path = require("path")

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());


app.use(express.static(path.join(__dirname, "public")));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function() {
    console.log("Listening on port: ", PORT)
});
