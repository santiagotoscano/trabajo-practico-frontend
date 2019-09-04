import { del } from '../utils'

export default host => id => del(`${host}/productos/${id}`)
