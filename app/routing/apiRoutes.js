var express = require("express");
var books = require("../data/friends");

var router = express.Router();

router.get("/api/friends", function (req, res) {
    res.json(books);
});

module.exports = router;