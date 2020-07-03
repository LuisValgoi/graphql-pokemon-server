const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

const data = require('./data/GET_POKEMONS');
router.get('/v1/pokemons', (req, res) => {
  res.json(data);
});
app.use('/.netlify/functions/api', router)

module.exports.handler = serverless(app);