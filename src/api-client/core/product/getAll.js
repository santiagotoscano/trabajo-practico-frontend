import {get} from '../utils'

export default host => () =>
  get(`${host}/productos`)
  .then(response => response.json())
  .then(json => json.meta ? json : json.data)