var express = require("express");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller.js")
var path = require("path")

var PORT = process.env.PORT || 8080;
var app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(path.join(__dirname, "/public")));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function() {
    console.log("Listening on port: ", PORT)
})
