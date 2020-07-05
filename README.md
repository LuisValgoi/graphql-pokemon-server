## Overview

Serverless function for the `graphql-pokemon-ui`

## Status
[![Netlify Status](https://api.netlify.com/api/v1/badges/6d705c43-7e91-40c2-8dcf-5233de872047/deploy-status)](https://app.netlify.com/sites/graphql-pokemon-server/deploys)

## Frontend

https://github.com/LuisValgoi/graphql-pokemon-ui

## How to Run

```js
yarn
yarn start
```

## Endpoints

```js
/.netlify/functions/api/v1/pokemons
```

## Available Scripts

- `yarn start`: runs locally @ [:9000](http://localhost:9000/.netlify/functions/api/).
- `yarn build`: to netlify run this server.

## Dependencies

- `express`: The node server.
- `serverless-http`: Serverless facilitator.
- `netlify-lambda`: Netlify function helper.

## Server

The data was extracted from [graphql-pokemon.now.sh](https://graphql-pokemon.now.sh/)

## Query Example

The following query gets the 50 first records @ database

```graphql
{
  pokemons(first: 50) {
    id
    number
    name
    weight {
      minimum
      maximum
    }
    height {
      minimum
      maximum
    }
    classification
    resistant
    weaknesses
    fleeRate
    maxCP
    evolutionRequirements {
      amount
      name
    }
    maxHP
    image
    types
    attacks {
      special {
        name
        type
        damage
      }
    }
    evolutions {
      id
      number
      name
      weight {
        minimum
        maximum
      }
      attacks {
        fast {
          name
          type
          damage
        }
      }
    }
  }
}
```

