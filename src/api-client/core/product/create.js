import {
  post
} from '../utils'

export default host => ({
    name,
    price,
    stock,
  }) => post(`${host}/productos`, JSON.stringify({producto: {
    nombre: name,
    precio: price,
    stock,
  }}))
  .then(response => response.json())