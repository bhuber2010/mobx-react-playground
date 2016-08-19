const express = require('express');
const router = express.Router();
const unirest = require("unirest");
const apiKey = '0f91ca9d-b649-483f-bfa4-af20bd40bc32';

router.get('/games', function(req, res) {
  const games = []
  const request = unirest("GET", "https://jsonodds.com/api/odds/nfl");
  request.query({
    "oddType": "Game",
    "SiteID": "Bookmaker"
  });
  request.headers({
    "cache-control": "no-cache",
    "jsonodds-api-key": apiKey
  });

  request.end(response => {
    if (response.error) throw new Error(response.error)
    console.log(response.body)
    response.body.forEach(game => games.push(game))
    res.send(games)
  });

});

module.exports = router;
