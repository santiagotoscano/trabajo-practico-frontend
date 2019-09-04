import {
  put,
} from '../utils'

export default host => ({
    id,
    name,
    price,
    stock,
  }) => put(`${host}/productos/${id}`, JSON.stringify({producto: {
    nombre: name,
    precio: price,
    stock,
  }}))
  .then(response => response.json())