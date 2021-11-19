var express = require('express');
const mongoist = require("mongoist");
const axios = require("axios");

var router = express.Router();

const username = '##USERNAME##';
const password = '##PASSWORD##';

const uri = `mongodb+srv://${username}:${password}@newonce.ksdr0.mongodb.net/Artists?retryWrites=true&w=majority`
const db =  mongoist(uri)

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    const response = await axios.get('https://www.newonce.net/api/radio_now_playing');
    if (!response.data.artist) {
      res.send(response.data);
      return;
    }
    const artist = await db.Artists.findOne({name: response.data.artist});
    res.send({...response.data, donateEnabled: !!artist});
  } catch (e) {
    console.log(e)
    res.status(500);
    res.send(e);
  }
});




module.exports = router;
