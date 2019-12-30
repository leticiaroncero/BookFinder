var express = require("express");
var apiRoutes = require("./app/routing/apiRoutes.js")
var htmlRoutes = require("./app/routing/htmlRoutes.js");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("app/public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, function () {
    console.log("App listening on http://localhost:" + PORT);
});



