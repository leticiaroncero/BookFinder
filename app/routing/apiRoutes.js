var express = require("express");
var books = require("../data/books");

var router = express.Router();

router.get("/api/books", function (req, res) {
    res.json(books);
});

router.post("/api/books", function (req, res) {
    books.push(req.body);
    res.json(books[0]);
});

module.exports = router;