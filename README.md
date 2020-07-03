## Overview

Serverless function for the `graphql-pokemon-ui`

## How to Run

```js
yarn
yarn start
```

## Endpoints

```js
http://.../.netlify/functions/api/v1/pokemons
```

## Available Scripts

- `yarn start`: runs locally @ [:9000](http://localhost:9000/.netlify/functions/api/).
- `yarn build`: to netlify run this server.

## Dependencies

- `express`: The node server.
- `serverless-http`: Serverless facilitator.
- `netlify-lambda`: Netlify function helper.
