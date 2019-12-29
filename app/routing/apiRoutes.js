var express = require("express");
var books = require("../data/friends");

var router = express.Router();

router.get("/api/friends", function (req, res) {
    res.json(books);
});

router.post("/api/friends", function (req, res) {
    books.push(req.body);
    res.send();
});

module.exports = router;