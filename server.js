var express = require("express");

var app = express();
var PORT = 3000;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var routes = require("./app/routing/htmlRoutes.js");
app.use(routes);

app.listen(PORT, function () {
    console.log("App listening on http://localhost:" + PORT);
});



