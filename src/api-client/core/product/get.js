import {get} from "../utils";

export default host => (id) =>
  get(`${host}/productos/${id}`)
    .then(response => response.json())
    .then(json => json.data)
