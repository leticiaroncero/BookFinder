var express = require("express");
var books = require("../data/books");

var router = express.Router();

router.get("/api/books", function (req, res) {
    res.json(books);
});

router.post("/api/books", function (req, res) {
    var userScores = req.body.scores;

    var bestMatchScore;
    var bestMatch;
    for (var i = 0; i < books.length; i++) {
        var currentBookScores = books[i].scores;

        var totalDifference = 0;
        for (var j = 0; j < userScores.length; j++) {
            difference = Math.abs(userScores[j] - currentBookScores[j]);
            totalDifference += difference;
        }
        if (totalDifference < bestMatchScore || bestMatchScore === undefined) {
            bestMatchScore = totalDifference;
            bestMatch = books[i];
        }
    }

    books.push(req.body);

    res.json(bestMatch);
});

module.exports = router;