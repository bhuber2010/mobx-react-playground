const express = require('express');
const router = express.Router();
const unirest = require("unirest");

router.get('/', function(req, res) {
  res.json({title: "Tenorio Bets"})
})

router.get('/games', function(req, res) {
  const games = []
  const request = unirest("GET", "https://jsonodds.com/api/odds/nfl");
  request.query({
    "oddType": "Game",
    "SiteID": "Bookmaker"
  });
  request.headers({
    "cache-control": "no-cache",
    "jsonodds-api-key": process.env.apiKey
  });

  request.end(response => {
    if (response.error) throw new Error(response.error)
    console.log(response.body)
    response.body.forEach(game => games.push(game))
    res.send(games)
  });

});

module.exports = router;
