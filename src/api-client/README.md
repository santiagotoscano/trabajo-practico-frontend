# Flowlike Api Client

## Usage

```js
import { request } from 'src/api-client/index' // or the api folder location

// REACT_APP_API_HOST env var must be declared or the plugin will throw an error

// get client

request.client.get(id)
  .then(client => {/* handle obtained client */})
  .catch(error => {/* handle error */})

// create client

request.client.create(client)
  .then(client => {/* handle created client */})
  .catch(error => {/* handle error */})

// delete client

request.client.delete(clientId)
  .then(client => {/* handle deleted client */})
  .catch(error => {/* handle error */})

```

These are just a few examples, more api calls can be found inside the api client structure.

FZ