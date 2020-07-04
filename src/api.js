const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

const data = require('./data/GET_POKEMONS');

router.get('/v1/pokemons', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  const nameParam = req.query.query;
  if (nameParam) {
    const response = {
      data: {
        pokemons: data.data.pokemons.filter(pokemon => pokemon.name.toLowerCase().trim().includes(nameParam.toLowerCase()))
      }
    }
    res.json(response);
  }

  res.json(data);
});

router.get('/v1/pokemons/:id', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  const id = req.params.id;
  const pokemon = data.data.pokemons.filter(pokemon => pokemon.id === id)[0];
  res.json(pokemon);
});

app.use('/.netlify/functions/api', router)

module.exports.handler = serverless(app);