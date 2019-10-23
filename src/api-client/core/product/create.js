import {
  post
} from '../utils'

export default host => ({
    sku,
    name,
    price,
    stock,
  }) => post(`${host}/productos`, JSON.stringify({producto: {
    sku,
    nombre: name,
    precio: price,
    stock,
  }}))
  .then(response => response.json())
